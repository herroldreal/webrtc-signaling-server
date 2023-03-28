import {
  Handler,
  Context,
  APIGatewayProxyWebsocketEventV2,
  APIGatewayProxyResult,
} from 'aws-lambda';
import { InvocationRequest, Lambda } from '@aws-sdk/client-lambda';

export const handler: Handler = async (
  event: APIGatewayProxyWebsocketEventV2,
  context: Context,
): Promise<APIGatewayProxyResult> => {
  const lambda = new Lambda({
    region: 'us-east-1',
  });
  const encoder = new TextEncoder();
  const lambdaParamsInvocation: InvocationRequest = {
    FunctionName: 'websocket-test-dev-defaultHandler',
    InvocationType: 'RequestResponse',
    LogType: 'Tail',
    Payload: encoder.encode(
      JSON.stringify({
        connectionId: event.requestContext.connectionId,
      }),
    ),
  };

  const invokeResult = await lambda.invoke(lambdaParamsInvocation);
  console.log('=============================');
  console.log(
    `Invoke result => ${JSON.stringify(invokeResult.$metadata, undefined, 2)}`,
  );
  console.log('=============================');

  return {
    statusCode: 200,
    body: 'STATE',
  };
};
