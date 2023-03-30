import {
  BatchExecuteStatementCommandInput,
  BatchExecuteStatementCommandOutput,
  BatchGetCommandInput,
  BatchGetCommandOutput,
  DeleteCommandInput,
  DeleteCommandOutput,
  ExecuteStatementCommandInput,
  ExecuteStatementCommandOutput,
  ExecuteTransactionCommandInput,
  ExecuteTransactionCommandOutput,
  GetCommandInput,
  GetCommandOutput,
  PutCommandInput,
  PutCommandOutput,
  QueryCommandInput,
  QueryCommandOutput,
  ScanCommandInput,
  ScanCommandOutput,
  UpdateCommandInput,
  UpdateCommandOutput,
} from '@aws-sdk/lib-dynamodb';

export interface IDynamoStore {
  put(params: PutCommandInput): Promise<PutCommandOutput>;
  update(params: UpdateCommandInput): Promise<UpdateCommandOutput>;
  scan(params: ScanCommandInput): Promise<ScanCommandOutput>;

  query(params: QueryCommandInput): Promise<QueryCommandOutput>;
  get(params: GetCommandInput): Promise<GetCommandOutput>;
  batchGet(params: BatchGetCommandInput): Promise<BatchGetCommandOutput>;
  executeStatement(
    params: ExecuteStatementCommandInput,
  ): Promise<ExecuteStatementCommandOutput>;
  executeTransaction(
    params: ExecuteTransactionCommandInput,
  ): Promise<ExecuteTransactionCommandOutput>;
  batchExecuteTransaction(
    params: BatchExecuteStatementCommandInput,
  ): Promise<BatchExecuteStatementCommandOutput>;
  delete(params: DeleteCommandInput): Promise<DeleteCommandOutput>;
}
