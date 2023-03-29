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
import { DbClientsInstance } from './dbClients';
import { Logger } from '@nestjs/common';
import { Pricing } from 'aws-sdk';

class DbOps {
  private readonly logger = new Logger(DbOps.name);
  private static instance: DbOps;

  private constructor() {
    console.log('DbOps init');
    if (DbOps.instance) throw new Error('Error - Already initialized');
  }

  static getInstance(): DbOps {
    DbOps.instance = DbOps.instance || new DbOps();
    return DbOps.instance;
  }

  put = async (params: PutCommandInput): Promise<PutCommandOutput> => {
    try {
      return await DbClientsInstance.dbDocumentClient.send(
        new PutCommand(params),
      );
    } catch (e) {
      this.logger.error(e);
      return e;
    }
  };

  update = async (params: UpdateCommandInput): Promise<UpdateCommandOutput> => {
    try {
      return await DbClientsInstance.dbDocumentClient.send(
        new UpdateCommand(params),
      );
    } catch (e) {
      this.logger.error(e);
      return e;
    }
  };

  scan = async (params: ScanCommandInput): Promise<ScanCommandOutput> => {
    try {
      return DbClientsInstance.dbDocumentClient.send(new ScanCommand(params));
    } catch (e) {
      this.logger.error(e);
      return e;
    }
  };

  query = async (params: QueryCommandInput): Promise<QueryCommandOutput> => {
    try {
      return DbClientsInstance.dbDocumentClient.send(new QueryCommand(params));
    } catch (e) {
      this.logger.error(e);
      return e;
    }
  };

  get = async (params: GetCommandInput): Promise<GetCommandOutput> => {
    try {
      return DbClientsInstance.dbClient.send(new GetCommand(params));
    } catch (e) {
      this.logger.error(e);
      return e;
    }
  };

  batchGet = async (
    params: BatchGetCommandInput,
  ): Promise<BatchGetCommandOutput> => {
    try {
      return DbClientsInstance.dbClient.send(new BatchGetCommand(params));
    } catch (e) {
      this.logger.error(e);
      return e;
    }
  };

  executeStatement = async (
    params: ExecuteStatementCommandInput,
  ): Promise<ExecuteStatementCommandOutput> => {
    try {
      return DbClientsInstance.dbClient.send(
        new ExecuteStatementCommand(params),
      );
    } catch (e) {
      this.logger.error(e);
      return e;
    }
  };

  executeTransaction = async (
    params: ExecuteTransactionCommandInput,
  ): Promise<ExecuteTransactionCommandOutput> => {
    try {
      return await DbClientsInstance.dbDocumentClient.send(
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
      return await DbClientsInstance.dbDocumentClient.send(
        new BatchExecuteStatementCommand(params),
      );
    } catch (e) {
      this.logger.error(e);
      return e;
    }
  };

  delete = async (params: DeleteCommandInput): Promise<DeleteCommandOutput> => {
    try {
      return await DbClientsInstance.dbDocumentClient.send(
        new DeleteCommand(params),
      );
    } catch (e) {
      this.logger.error(e);
      return e;
    }
  };
}

export const DbDataOpsInstance = DbOps.getInstance();
