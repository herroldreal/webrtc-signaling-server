import 'reflect-metadata';
import { Handler, APIGatewayProxyWebsocketEventV2 } from 'aws-lambda';
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
  console.log('=========================================');
  console.log(
    `Event => ${event.requestContext.eventType} - Route key => ${event.requestContext.routeKey}`,
  );
  console.log('=========================================');

  const { connectionId, endpoint } = JSON.parse(JSON.stringify(event.body));
  buildWsClient(endpoint);
  await handleState(connectionId);

  return { statusCode: 200 };
};

function buildWsClient(endpoint: string) {
  wsClient = new ApiGatewayManagementApiClient({
    region: process.env.AWS_REGION,
    endpoint: process.env.IS_OFFLINE ? 'http://localhost:3001' : endpoint,
  });
}

async function handleState(connectionId: string) {
  try {
    const encoder = new TextEncoder();
    const postCmd = new PostToConnectionCommand({
      ConnectionId: connectionId,
      Data: encoder.encode('STATE Ready'),
    });

    const result = await wsClient.send(postCmd);
    if (result.$metadata.httpStatusCode === 200) {
      // Store connectionId and status in db
      await sessionService.createSession({
        connectionId: connectionId,
        state: 'Ready',
      });
    }
  } catch (err: unknown) {
    console.info(err);
    return { statusCode: 500 };
  } finally {
    wsClient.destroy();
  }
}
