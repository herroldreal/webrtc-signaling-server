import { Handler, Context } from 'aws-lambda';

export const handler: Handler = async (event: any, context: Context) => {
  console.log(`Event => ${JSON.stringify(event, undefined, 2)}`);
  console.log(`Context => ${JSON.stringify(context, undefined, 2)}`);

  return {
    statusCode: 200,
    body: JSON.stringify('Disconnected'),
  };
};
