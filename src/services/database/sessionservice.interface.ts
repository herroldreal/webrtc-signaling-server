import { Session } from '../../models/session.model';

export interface ISessionService {
  createSession(session: Session): Promise<boolean>;
  closeSession(sessionId: string): Promise<boolean>;
  updateSessionState(session: Session): Promise<boolean>;
}
