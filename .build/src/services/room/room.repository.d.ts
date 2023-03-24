import { ConfigService } from '@nestjs/config';
import { Redis } from 'ioredis';
import { AddParticipantFields } from 'src/websocket/rooms/types';
import { Room } from 'src/websocket/super/types';
export declare class RoomsRepository {
    private readonly redisClient;
    private readonly ttl;
    private readonly logger;
    constructor(configService: ConfigService, redisClient: Redis);
    createRoom(data: any): Promise<Room>;
    addParticipant(participant: AddParticipantFields): Promise<Room>;
    getRoom(roomId: string): Promise<Room>;
    removeParticipant(roomId: string, userId: string): Promise<void>;
}
