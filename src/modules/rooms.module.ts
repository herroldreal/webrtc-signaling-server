import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { jwtModule, redisModule } from './module.config';
import { RoomService } from '../services/room/room.service';
import { RoomsRepository } from '../services/room/room.repository';
import { RoomGateway } from '../websocket/gateway/room.gateway';

@Module({
  imports: [ConfigModule, redisModule, jwtModule],
  controllers: [],
  providers: [RoomService, RoomsRepository, RoomGateway],
})
export class RoomsModule {}
