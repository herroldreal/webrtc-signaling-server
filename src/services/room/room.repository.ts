import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Redis } from 'ioredis';
import { IORedisKey } from '../../modules/redis.module';
import { AddParticipantFields } from 'src/websocket/rooms/types';
import { Room } from 'src/websocket/super/types';

@Injectable()
export class RoomsRepository {
  // to use time-to-live from configuration
  private readonly ttl: string;
  private readonly logger = new Logger(RoomsRepository.name);

  constructor(
    configService: ConfigService,
    @Inject(IORedisKey) private readonly redisClient: Redis,
  ) {
    this.ttl = configService.get('POLL_DURATION');
  }

  async createRoom(data: any): Promise<Room> {
    return null;
  }

  async addParticipant(participant: AddParticipantFields): Promise<Room> {
    return null;
  }
  async getRoom(roomId: string): Promise<Room> {
    return null;
  }
  async removeParticipant(roomId: string, userId: string) {
    console.log('Remove participants');
  }
}
