import { Module } from '@nestjs/common';
import { RtcEventGateway } from '../websocket/events/rtc-event.gateway';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [RtcEventGateway],
})
export class EventsModule {}
