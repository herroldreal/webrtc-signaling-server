import { Handler, Context, APIGatewayProxyWebsocketEventV2 } from 'aws-lambda';
import {
  ApiGatewayManagementApiClient,
  PostToConnectionCommand,
} from '@aws-sdk/client-apigatewaymanagementapi';

interface StatusCodeResponse {
  statusCode: 200 | 500;
}

export const handler: Handler = async (
  event: APIGatewayProxyWebsocketEventV2,
  context: Context,
): Promise<StatusCodeResponse> => {
  console.info(`Event => ${JSON.stringify(event.body, undefined, 2)}`);
  console.info(`Context => ${JSON.stringify(context, undefined, 2)}`);

  const connectionId = JSON.parse(JSON.stringify(event.body)).connectionId;
  const endpoint = JSON.parse(JSON.stringify(event.body)).endpoint;

  console.info('====================================');
  console.info(`Connection ID: ${connectionId}`);
  console.info('====================================');
  console.info(`Endpoint: ${endpoint}`);
  console.info('====================================');

  const client = new ApiGatewayManagementApiClient({
    region: 'us-east-1',
    endpoint: process.env.IS_OFFLINE ? 'http://localhost:3001' : `${endpoint}`,
  });

  try {
    console.info('====================================');
    console.info(`Client Config: ${endpoint}`);
    console.info('====================================');

    const encoder = new TextEncoder();
    const postCmd = new PostToConnectionCommand({
      ConnectionId: connectionId,
      Data: encoder.encode('STATE'),
    });

    const result = await client.send(postCmd);
    console.info('====================================');
    console.info('Message : ', JSON.stringify(result, undefined, 2));
    console.info('====================================');
  } catch (err: unknown) {
    console.info(err);
    return { statusCode: 500 };
  } finally {
    client.destroy();
  }

  return { statusCode: 200 };
};
