import { Handler, Context } from 'aws-lambda';

export const handler: Handler = async (event: any, context: Context) => {
  console.log(`Event => ${event}`);
  console.log(`Context => ${context}`);

  return {
    statusCode: 200,
    body: JSON.stringify('Disconnected'),
  };
};
