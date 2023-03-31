import * as WebSocket from 'ws';

export enum MessageType {
  MATCHED = 'MATCHED',
  STATE = 'STATE',
  ICE = 'ICE',
  OFFER = 'OFFER',
  ANSWER = 'ANSWER',
  PEER_LEFT = 'PEER-LEFT',
  ON_GOING_CALL = 'ON-GOING-CALL',
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
  Active = 'Active',
  Creating = 'Creating',
  Ready = 'Ready',
  Impossible = 'Impossible',
  Offline = 'Offline',
}
