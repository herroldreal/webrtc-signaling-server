import {
  ClientMessage,
  MessageType,
  Session,
  WebRTCSessionState,
} from '../database/models/websocket.model';
import * as WebSocket from 'ws';
import { v4 as uuidV4 } from 'uuid';

export class WebsocketService {
  private sessions: Map<string, Session>;
  private unmatched: string;
  private onGoingCall: boolean;
  private currentState: WebRTCSessionState;

  constructor() {
    this.sessions = new Map();
    this.unmatched = '';
    this.onGoingCall = false;
    this.currentState = WebRTCSessionState.Impossible;
  }

  register(ws: WebSocket) {
    const id = uuidV4();
    const session = { id, ws };
    if (!this.onGoingCall) {
      this.sessions.set(id, session);
      this.send(session, `${MessageType.STATE} ${WebRTCSessionState.Ready}`);
      this.currentState = WebRTCSessionState.Ready;
      this.tryMatch(session);
    } else {
      this.send(session, { type: MessageType.ON_GOING_CALL });
    }

    ws.on('close', () => this.unregister(id));
    ws.on('error', () => this.unregister(id));
    ws.on('message', (data: WebSocket.Data) =>
      this.handleMessage(id, data.toString()),
    );
  }

  private tryMatch(session: Session) {
    if (this.unmatched != '') {
      const match = this.unmatched;
      const other = this.sessions.get(match);
      if (other) {
        session.peer = match;
        other.peer = session.id;
        this.send(session, {
          type: MessageType.MATCHED,
          match: other.id,
          offer: true,
        });
        this.send(other, {
          type: MessageType.MATCHED,
          match: session.id,
          offer: false,
        });
        this.onGoingCall = true;
      }
    } else {
      this.unmatched = session.id;
    }
  }

  private handleMessage(id: string, data: string) {
    try {
      console.log('===================================================');
      this.sessions.forEach((session: Session) => {
        console.log(`Session ID: ${session.id} - Match: ${session.peer}`);
      });
      console.log('===================================================');

      const message = JSON.parse(data) as ClientMessage;
      const wsMessage = JSON.parse(data);
      const session = this.sessions.get(id);

      if (!session) return console.error(`Can't find session for ${id}`);
      const peer = this.sessions.get(session.peer);
      if (!peer) return console.error(`Can't find session for peer of ${id}`);

      switch (message.type) {
        case MessageType.OFFER:
          if (this.currentState !== WebRTCSessionState.Ready) {
            throw new Error('Session should be in Ready state to handle offer');
          }
          this.currentState = WebRTCSessionState.Creating;
          console.log('==================================');
          console.log(`Handling OFFER from ${session.id}`);
          console.log('==================================');
          this.notifyAboutStateUpdate();
          const clientToSendOffer = this.sessions.get(session.id);
          this.send(clientToSendOffer, wsMessage);
          break;
        case MessageType.ANSWER:
          if (this.currentState !== WebRTCSessionState.Creating) {
            throw new Error(
              'Session should be in Crating state to handle answer',
            );
          }
          console.log('==================================');
          console.log(`Handling ANSWER from ${session.id}`);
          console.log('==================================');
          const clientsToSendAnswer = this.sessions.get(session.id);
          this.send(clientsToSendAnswer, wsMessage);
          this.currentState = WebRTCSessionState.Active;
          this.notifyAboutStateUpdate();
          break;
        case MessageType.ICE:
          this.send(peer, message);
          break;
        case MessageType.PEER_LEFT:
          this.send(peer, message);
          this.unregister(session.id);
          break;
        default:
          console.error(`Unexpected message from ${id}: ${data}`);
          break;
      }
    } catch (e) {
      console.error(`Unexpected error message from ${id}: ${data}`, e.message);
    }
  }
  private unregister(id: string) {
    const session = this.sessions.get(id);
    if (session && session.peer) {
      const peer = this.sessions.get(session.peer);
      if (peer) this.send(peer, { type: MessageType.PEER_LEFT });
    }
    if (id === this.unmatched) {
      this.unmatched = '';
      this.onGoingCall = false;
    }
    this.sessions.delete(id);

    this.sessions.forEach((s) => {
      console.log(`Current participants => Peer: ${s.peer} - Match: ${s.id}`);
    });

    this.currentState = WebRTCSessionState.Impossible;
    this.notifyAboutStateUpdate();
  }

  private send(session: Session, payload: any) {
    try {
      if (session.ws.readyState === WebSocket.OPEN) {
        session.ws.send(JSON.stringify(payload));
      }
    } catch (e) {
      console.error(`Error sending to ${session.id}`);
    }
  }

  private notifyAboutStateUpdate() {
    this.sessions.forEach((session: Session) => {
      session.ws.send(`${MessageType.STATE} ${this.currentState}`);
    });
  }
}
