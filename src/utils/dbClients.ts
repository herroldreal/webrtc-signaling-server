import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

class DbClients {
  private static instance: DbClients;
  public dbClient: DynamoDBClient;
  public dbDocumentClient: DynamoDBDocumentClient;

  private constructor() {
    console.log('DbClients init');
    if (DbClients.instance) {
      throw new Error('Error - already initialized');
    }
  }

  init() {
    const marshallOptions = {
      convertEmptyValues: false,
      removeUndefinedValues: false,
      convertClassInstanceToMap: false,
    };
    const unmarshallOptions = {
      wrapNumbers: false,
    };
    const translateConfig = { marshallOptions, unmarshallOptions };
    this.dbClient = new DynamoDBClient({
      region: process.env.AWS_REGION,
      endpoint: process.env.DB_ENDPOINT,
    });
    this.dbDocumentClient = DynamoDBDocumentClient.from(
      this.dbClient,
      translateConfig,
    );
  }

  destroy() {
    this.dbDocumentClient.destroy();
    this.dbClient.destroy();
  }

  static getInstance(): DbClients {
    DbClients.instance = DbClients.instance || new DbClients();
    return DbClients.instance;
  }
}

export const DbClientsInstance = DbClients.getInstance();
