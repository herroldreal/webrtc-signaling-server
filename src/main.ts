import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.enableCors({
    origin: ['*'],
  });
  await app.listen(configService.get('port'));

  return await app.getUrl();
}

bootstrap()
  .then((url: string) => {
    console.log(`Application running on: ${url}`);
  })
  .catch(console.error);
