import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from '../config/configuration';
import { RoomsModule } from './rooms.module';
import { SignalingModule } from './signaling.gateway';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    RoomsModule,
    SignalingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
