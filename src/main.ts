import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { RedisIoAdapter } from './websocket/adapters/redis-io.adapter';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const redisIoAdapter = new RedisIoAdapter(app, configService);
  await redisIoAdapter.connectToRedis();
  app.useWebSocketAdapter(redisIoAdapter);

  await app.listen(configService.get('port'));

  console.log(`Application running on: ${await app.getUrl()}`);
}

bootstrap();
