import { Injectable, Logger } from '@nestjs/common';
import { Session } from '../models/session.model';
import { PutCommandInput } from '@aws-sdk/lib-dynamodb';
import { ConfigService } from '@nestjs/config';
import { DbDataOpsInstance } from '../utils/dbOps';

@Injectable()
export class SessionRepository {
  private readonly logger = new Logger(SessionRepository.name);
  private readonly tableName: string;

  constructor(private readonly configService: ConfigService) {
    this.tableName = configService.get('database.table');
  }

  async create(session: Session): Promise<boolean> {
    try {
      this.logger.log('Create session');
      const params: PutCommandInput = {
        TableName: this.tableName,
        Item: session,
      };
      const data = await DbDataOpsInstance.put(params);
      this.logger.verbose(
        `Put result => ${JSON.stringify(data, undefined, 2)}`,
      );
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
