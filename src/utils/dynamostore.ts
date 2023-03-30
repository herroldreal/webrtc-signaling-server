import {
  BatchExecuteStatementCommand,
  BatchExecuteStatementCommandInput,
  BatchExecuteStatementCommandOutput,
  BatchGetCommand,
  BatchGetCommandInput,
  BatchGetCommandOutput,
  DeleteCommand,
  DeleteCommandInput,
  DeleteCommandOutput,
  DynamoDBDocumentClient,
  ExecuteStatementCommand,
  ExecuteStatementCommandInput,
  ExecuteStatementCommandOutput,
  ExecuteTransactionCommand,
  ExecuteTransactionCommandInput,
  ExecuteTransactionCommandOutput,
  GetCommand,
  GetCommandInput,
  GetCommandOutput,
  PutCommand,
  PutCommandInput,
  PutCommandOutput,
  QueryCommand,
  QueryCommandInput,
  QueryCommandOutput,
  ScanCommand,
  ScanCommandInput,
  ScanCommandOutput,
  UpdateCommand,
  UpdateCommandInput,
  UpdateCommandOutput,
} from '@aws-sdk/lib-dynamodb';
import { Logger } from './logger';
import { IDynamoStore } from './dynamoStore.interface';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';

export class DynamoStore implements IDynamoStore {
  private readonly logger = new Logger(DynamoStore.name);
  public dbClient: DynamoDBClient;
  public dbDocumentClient: DynamoDBDocumentClient;

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

  put = async (params: PutCommandInput): Promise<PutCommandOutput> => {
    try {
      return await this.dbDocumentClient.send(new PutCommand(params));
    } catch (e) {
      this.logger.error(e);
      return e;
    }
  };

  update = async (params: UpdateCommandInput): Promise<UpdateCommandOutput> => {
    try {
      return await this.dbDocumentClient.send(new UpdateCommand(params));
    } catch (e) {
      this.logger.error(e);
      return e;
    }
  };

  scan = async (params: ScanCommandInput): Promise<ScanCommandOutput> => {
    try {
      return this.dbDocumentClient.send(new ScanCommand(params));
    } catch (e) {
      this.logger.error(e);
      return e;
    }
  };

  query = async (params: QueryCommandInput): Promise<QueryCommandOutput> => {
    try {
      return this.dbDocumentClient.send(new QueryCommand(params));
    } catch (e) {
      this.logger.error(e);
      return e;
    }
  };

  get = async (params: GetCommandInput): Promise<GetCommandOutput> => {
    try {
      return this.dbClient.send(new GetCommand(params));
    } catch (e) {
      this.logger.error(e);
      return e;
    }
  };

  batchGet = async (
    params: BatchGetCommandInput,
  ): Promise<BatchGetCommandOutput> => {
    try {
      return this.dbClient.send(new BatchGetCommand(params));
    } catch (e) {
      this.logger.error(e);
      return e;
    }
  };

  executeStatement = async (
    params: ExecuteStatementCommandInput,
  ): Promise<ExecuteStatementCommandOutput> => {
    try {
      return this.dbClient.send(new ExecuteStatementCommand(params));
    } catch (e) {
      this.logger.error(e);
      return e;
    }
  };

  executeTransaction = async (
    params: ExecuteTransactionCommandInput,
  ): Promise<ExecuteTransactionCommandOutput> => {
    try {
      return await this.dbDocumentClient.send(
        new ExecuteTransactionCommand(params),
      );
    } catch (e) {
      this.logger.error(e);
      return e;
    }
  };

  batchExecuteTransaction = async (
    params: BatchExecuteStatementCommandInput,
  ): Promise<BatchExecuteStatementCommandOutput> => {
    try {
      return await this.dbDocumentClient.send(
        new BatchExecuteStatementCommand(params),
      );
    } catch (e) {
      this.logger.error(e);
      return e;
    }
  };

  delete = async (params: DeleteCommandInput): Promise<DeleteCommandOutput> => {
    try {
      return await this.dbDocumentClient.send(new DeleteCommand(params));
    } catch (e) {
      this.logger.error(e);
      return e;
    }
  };
}
