import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from '../config/configuration';
import { RoomsModule } from './rooms.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    RoomsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
