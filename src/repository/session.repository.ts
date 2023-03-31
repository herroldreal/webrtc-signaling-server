import { Session } from '../database/models/session.model';
import { Logger } from '../utils/logger';
import { inject, injectable } from 'tsyringe';
import { ISessionRepository } from './sessionrepository.interface';
import { IMongoDbStore } from '../database/imongostore';

@injectable()
export class SessionRepository implements ISessionRepository {
  private readonly tableName: string;
  private readonly logger = new Logger(SessionRepository.name);

  constructor(@inject('IMongoDbStore') private db: IMongoDbStore) {
    this.tableName = process.env.SESSION_TABLE_NAME;
    console.info('===================================');
    console.info(`Table name => ${this.tableName}`);
    console.info('===================================');
  }

  async create(session: Session): Promise<boolean> {
    try {
      return true;
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
