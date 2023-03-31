import { Session } from '../../database/models/session.model';
import { SessionRepository } from '../../repository/session.repository';
import { inject, injectable } from 'tsyringe';
import { ISessionService } from './sessionservice.interface';

@injectable()
export class SessionService implements ISessionService {
  constructor(
    @inject('ISessionRepository') private repository: SessionRepository,
  ) {}

  async createSession(session: Session): Promise<boolean> {
    return this.repository.create(session);
  }

  async closeSession(sessionId: string): Promise<boolean> {
    return this.repository.close(sessionId);
  }

  async updateSessionState(session: Session): Promise<boolean> {
    return this.repository.update(session);
  }
}
