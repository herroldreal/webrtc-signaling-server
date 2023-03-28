import {
  Handler,
  Context,
  APIGatewayProxyWebsocketEventV2,
  APIGatewayProxyResult,
} from 'aws-lambda';

export const handler: Handler = async (
  event: APIGatewayProxyWebsocketEventV2,
  context: Context,
): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: 'STATE',
  };
};
