import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { jwtModule, redisModule } from './module.config';
import { SessionService } from '../services/database/session.service';
import { SessionRepository } from '../repository/session.repository';

@Module({
  imports: [ConfigModule, redisModule, jwtModule],
  controllers: [],
  providers: [SessionService, SessionRepository],
})
export class SessionModule {}
