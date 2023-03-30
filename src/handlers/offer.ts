import 'reflect-metadata';
import { Handler, Context, APIGatewayProxyWebsocketEventV2 } from 'aws-lambda';
import {
  ApiGatewayManagementApiClient,
  PostToConnectionCommand,
} from '@aws-sdk/client-apigatewaymanagementapi';
import { diContainer } from '../di/container.di';
import { SessionService } from '../services/database/session.service';

interface StatusCodeResponse {
  statusCode: 200 | 500;
}

let wsClient: ApiGatewayManagementApiClient;
const sessionService: SessionService = diContainer.resolve('ISessionService');

export const handler: Handler = async (
  event: APIGatewayProxyWebsocketEventV2,
): Promise<StatusCodeResponse> => {
  const connectionId = event.requestContext.connectionId;
  const endpoint = `https://${event.requestContext.domainName}/${event.requestContext.stage}`;
  const routeKey = event.requestContext.routeKey;
  const { action } = JSON.parse(event.body);

  buildWsClient(endpoint);

  console.info('====================================');
  console.log(`Event body => ${event.body}`);
  console.info('====================================');
  console.info(`Connection ID: ${connectionId}`);
  console.info('====================================');
  console.info(`Endpoint: ${endpoint}`);
  console.info('====================================');
  console.info(`Command: ${action}`);
  console.info('====================================');
  console.info(`Route: ${routeKey}`);
  console.info('====================================');

  await handleOffer(connectionId);

  return { statusCode: 200 };
};

function buildWsClient(endpoint: string) {
  wsClient = new ApiGatewayManagementApiClient({
    region: process.env.AWS_REGION,
    endpoint: process.env.IS_OFFLINE ? 'http://localhost:3001' : endpoint,
  });
}

async function handleOffer(connectionId: string) {
  try {
    const encoder = new TextEncoder();
    const postCmd = new PostToConnectionCommand({
      ConnectionId: connectionId,
      Data: encoder.encode('OFFER Ready'),
    });

    const result = await wsClient.send(postCmd);
    console.info('====================================');
    console.info('Message : ', JSON.stringify(result, undefined, 2));
    console.info('====================================');

    await sessionService.updateSessionState({ connectionId, state: 'Offer' });
  } catch (err: unknown) {
    console.info(err);
    return { statusCode: 500 };
  } finally {
    wsClient.destroy();
  }
}
