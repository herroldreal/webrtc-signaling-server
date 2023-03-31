import * as WebSocket from 'ws';

export enum MessageType {
  STATE = 'state',
  ICE = 'ice',
  OFFER = 'offer',
  ANSWER = 'answer',
  PEER_LEFT = 'peer-left',
  ON_GOING_CALL = 'on-going-call',
}

type StateMessage = {
  type: MessageType.STATE;
  state: string;
};

type AnswerMessage = {
  type: MessageType.ANSWER;
  message: string;
};

type OfferMessage = {
  type: MessageType.OFFER;
  message: string;
};
type ICEMessage = {
  type: MessageType.ICE;
  candidate: string;
  label: number;
  id: string;
};

type PeerLeft = {
  type: MessageType.PEER_LEFT;
};

type OnGoingCall = {
  type: MessageType.ON_GOING_CALL;
};

export type ClientMessage =
  | StateMessage
  | OfferMessage
  | ICEMessage
  | AnswerMessage
  | PeerLeft
  | OnGoingCall;

export type Session = {
  id: string;
  ws: WebSocket;
  peer?: string;
};

export enum WebRTCSessionState {
  Active = 'active',
  Creating = 'creating',
  Ready = 'ready',
  Impossible = 'impossible',
  Offline = 'offline',
}
