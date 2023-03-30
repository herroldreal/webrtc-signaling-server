import { Session } from '../models/session.model';
import { PutCommandInput } from '@aws-sdk/lib-dynamodb';
import { DynamoStore } from '../utils/dynamostore';
import { Logger } from '../utils/logger';
import { inject, injectable } from 'tsyringe';
import { ISessionRepository } from './sessionrepository.interface';
import { IDynamoStore } from '../utils/dynamoStore.interface';

@injectable()
export class SessionRepository implements ISessionRepository {
  private readonly tableName: string;
  private readonly logger = new Logger(SessionRepository.name);

  constructor(@inject('IDynamoStore') private db: IDynamoStore) {
    this.tableName = process.env.SESSION_TABLE_NAME;
  }

  async create(session: Session): Promise<boolean> {
    try {
      this.logger.log('Create session');
      const params: PutCommandInput = {
        TableName: this.tableName,
        Item: session,
      };
      const data = await this.db.put(params);
      this.logger.info(`Put result => ${JSON.stringify(data, undefined, 2)}`);
      return data.$metadata.httpStatusCode === 200;
    } catch (e) {
      this.logger.error(e);
      return false;
    }
  }

  async close(sessionId: string): Promise<boolean> {
    return true;
  }

  async update(session: Session): Promise<boolean> {
    return true;
  }
}
