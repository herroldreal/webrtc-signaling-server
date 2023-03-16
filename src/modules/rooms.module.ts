import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { jwtModule, redisModule } from 'src/modules/module.config';
import { RoomService } from '../services/room/room.service';
import { RoomsRepository } from '../services/room/room.repository';
import { RoomGateway } from '../websocket/gateway/room.gateway';
import { RoomController } from '../controllers/room.controller';

@Module({
  imports: [ConfigModule, redisModule, jwtModule],
  controllers: [RoomController],
  providers: [RoomService, RoomsRepository, RoomGateway],
})
export class RoomsModule {}
