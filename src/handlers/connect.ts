import {
  APIGatewayProxyResult,
  APIGatewayProxyWebsocketEventV2,
  Context,
  Handler,
} from 'aws-lambda';
import {
  InvocationRequest,
  InvocationType,
  LogType,
  Lambda,
} from '@aws-sdk/client-lambda';

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
    InvocationType: InvocationType.Event,
    LogType: LogType.Tail,
    Payload: encoder.encode(
      JSON.stringify({
        body: {
          connectionId: event.requestContext.connectionId,
        },
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
