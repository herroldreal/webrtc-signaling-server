import { Request } from 'express';
import { Nomination } from '../super/types';
import { Socket } from 'socket.io';

export type CreateRoomFields = {
  topic: string;
  votesPerVoter: number;
  name: string;
};

export type JoinRoomFields = {
  roomId: string;
  name: string;
};

export type RejoinRoomFields = {
  roomId: string;
  userId: string;
  name: string;
};

export type AddParticipantFields = {
  roomId: string;
  userId: string;
  name: string;
};

export type AddNominationFields = {
  roomId: string;
  userId: string;
  text: string;
};

export type SubmitRankingsFields = {
  roomId: string;
  userId: string;
  rankings: string[];
};

export type CreateRoomData = {
  roomId: string;
  topic: string;
  votesPerVoter: number;
  userId: string;
};

export type AddParticipantData = {
  roomId: string;
  userId: string;
  name: string;
};

export type AddNominationData = {
  roomId: string;
  nominationId: string;
  nomination: Nomination;
};

export type AddParticipantRankingData = {
  roomId: string;
  userId: string;
  rankings: string[];
};

export type AuthPayload = {
  userId: string;
  roomId: string;
  name: string;
};

export type RequestWithAuth = Request & AuthPayload;
//export type SocketWithAuth = Socket & AuthPayload;
export type SocketWithAuth = Socket;
