import { Handler, Context, APIGatewayProxyWebsocketEventV2 } from 'aws-lambda';
import {
  ApiGatewayManagementApiClient,
  PostToConnectionCommand,
} from '@aws-sdk/client-apigatewaymanagementapi';

interface StatusCodeResponse {
  statusCode: 200 | 500;
}

let wsClient: ApiGatewayManagementApiClient;

export const handler: Handler = async (
  event: APIGatewayProxyWebsocketEventV2,
  context: Context,
): Promise<StatusCodeResponse> => {
  const { connectionId, endpoint, command } = JSON.parse(
    JSON.stringify(event.body),
  );
  buildWsClient(endpoint);

  console.info('====================================');
  console.info(`Connection ID: ${connectionId}`);
  console.info('====================================');
  console.info(`Endpoint: ${endpoint}`);
  console.info('====================================');
  console.info(`Command: ${command}`);
  console.info('====================================');

  switch (command.toLowerCase()) {
    case 'state': {
      await handleState(connectionId);
      break;
    }
    case 'offer': {
      await handleOffer(connectionId);
      break;
    }
    case 'answer': {
      await handleAnswer(connectionId);
      break;
    }
    case 'ice': {
      await handleIce(connectionId);
      break;
    }
  }

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
    console.info('====================================');
    console.info('Message : ', JSON.stringify(result, undefined, 2));
    console.info('====================================');
  } catch (err: unknown) {
    console.info(err);
    return { statusCode: 500 };
  } finally {
    wsClient.destroy();
  }
}

async function handleAnswer(connectionId: string) {
  return connectionId;
}

async function handleIce(connectionId: string) {
  return connectionId;
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
  } catch (err: unknown) {
    console.info(err);
    return { statusCode: 500 };
  } finally {
    wsClient.destroy();
  }
}
