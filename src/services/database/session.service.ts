import { Injectable, Logger } from '@nestjs/common';
import { Session } from '../../models/session.model';
import { SessionRepository } from '../../repository/session.repository';

@Injectable()
export class SessionService {
  private readonly logger = new Logger(SessionService.name);

  constructor(private readonly repository: SessionRepository) {}

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
