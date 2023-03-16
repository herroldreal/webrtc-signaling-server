import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Room } from '../../websocket/super/types';
import { createRoomID, createUserID } from '../../utils/ids';
import { RoomsRepository } from './room.repository';
import {
  AddParticipantFields,
  CreateRoomFields,
  JoinRoomFields,
  RejoinRoomFields,
} from 'src/websocket/rooms/types';

@Injectable()
export class RoomService {
  private readonly logger = new Logger(RoomService.name);

  constructor(
    private readonly repository: RoomsRepository,
    private readonly jwtService: JwtService,
  ) {}

  async createRoom(fields: CreateRoomFields) {
    const roomId = createRoomID();
    const userId = createUserID();

    const createdRoom = await this.repository.createRoom({
      ...fields,
      roomId,
      userId,
    });

    this.logger.debug(
      `Creating token string for RoomID: ${createdRoom.id} and User ID: ${userId}`,
    );

    const signedString = this.jwtService.sign(
      {
        roomId: createdRoom.id,
        name: fields.name,
      },
      {
        subject: userId,
      },
    );

    return {
      room: createdRoom,
      accessToken: signedString,
    };
  }

  async joinToRoom(fields: JoinRoomFields) {
    const userId = createUserID();

    this.logger.debug(
      `Fetching room with ID: ${fields.roomId} for user with ID: ${userId}`,
    );

    const joinedRoom = await this.repository.getRoom(fields.roomId);

    this.logger.debug(
      `Creating token string for Room ID: ${joinedRoom.id} and User ID: ${userId}`,
    );

    const signedString = this.jwtService.sign(
      {
        roomId: joinedRoom.id,
        name: fields.name,
      },
      {
        subject: userId,
      },
    );

    return {
      room: joinedRoom,
      accessToken: signedString,
    };
  }

  async rejoinPoll(fields: RejoinRoomFields) {
    this.logger.debug(
      `Rejoining poll with ID: ${fields.roomId} for user with ID: ${fields.userId} with name: ${fields.name}`,
    );
    return await this.repository.addParticipant(fields);
  }

  async addParticipant(addParticipant: AddParticipantFields): Promise<Room> {
    return this.repository.addParticipant(addParticipant);
  }

  async removeParticipant(
    pollID: string,
    userID: string,
  ): Promise<Room | void> {
    const poll = await this.repository.getRoom(pollID);
    if (!poll.hasStarted) {
      return await this.repository.removeParticipant(pollID, userID);
    }
  }

  async getRoom(roomId: string): Promise<Room> {
    return this.repository.getRoom(roomId);
  }
}
