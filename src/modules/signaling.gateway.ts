import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { jwtModule, redisModule } from './module.config';
import { SignalingGateway } from '../websocket/gateway/signaling.gateway';

@Module({
  imports: [ConfigModule, redisModule, jwtModule],
  controllers: [],
  providers: [SignalingGateway],
})
export class SignalingModule {}
