import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from '../config/configuration';
import { SessionModule } from './session.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    SessionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
