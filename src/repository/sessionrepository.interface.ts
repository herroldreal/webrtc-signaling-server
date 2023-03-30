import { Session } from '../models/session.model';

export interface ISessionRepository {
  create(session: Session): Promise<boolean>;
  close(sessionId: string): Promise<boolean>;
  update(session: Session): Promise<boolean>;
}
