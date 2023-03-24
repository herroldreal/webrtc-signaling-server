import { JwtService } from '@nestjs/jwt';
import { Room } from '../../websocket/super/types';
import { RoomsRepository } from './room.repository';
import { AddParticipantFields, CreateRoomFields, JoinRoomFields, RejoinRoomFields } from 'src/websocket/rooms/types';
export declare class RoomService {
    private readonly repository;
    private readonly jwtService;
    private readonly logger;
    constructor(repository: RoomsRepository, jwtService: JwtService);
    createRoom(fields: CreateRoomFields): Promise<{
        room: Room;
        accessToken: string;
    }>;
    joinToRoom(fields: JoinRoomFields): Promise<{
        room: Room;
        accessToken: string;
    }>;
    rejoinPoll(fields: RejoinRoomFields): Promise<Room>;
    addParticipant(addParticipant: AddParticipantFields): Promise<Room>;
    removeParticipant(pollID: string, userID: string): Promise<Room | void>;
    getRoom(roomId: string): Promise<Room>;
}
