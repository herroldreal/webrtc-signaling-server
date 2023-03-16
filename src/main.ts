import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { ConfigService } from '@nestjs/config';
import { SocketIOAdapter } from './websocket/adapters/socketio.adapter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.enableCors({
    origin: ['*'],
  });
  app.useWebSocketAdapter(new SocketIOAdapter(app, configService));

  await app.listen(configService.get('port'));

  return await app.getUrl();
}

bootstrap()
  .then((url: string) => {
    console.log(`Application running on: ${url}`);
  })
  .catch(console.error);
