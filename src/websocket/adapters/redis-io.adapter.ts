import { IoAdapter } from '@nestjs/platform-socket.io';
import { ServerOptions } from 'socket.io';
import { createAdapter } from '@socket.io/redis-adapter';
import { createClient } from 'redis';
import { ConfigService } from '@nestjs/config';
import { INestApplicationContext } from '@nestjs/common';

export class RedisIoAdapter extends IoAdapter {
  constructor(
    app: INestApplicationContext,
    private configService: ConfigService,
  ) {
    super(app);
  }

  private adaptarConstructor: ReturnType<typeof createAdapter>;

  async connectToRedis(): Promise<void> {
    const pubClient = createClient({
      url: this.configService.get('redis.url'),
    });
    const subClient = pubClient.duplicate();

    await Promise.all([pubClient.connect(), subClient.connect()]);

    this.adaptarConstructor = createAdapter(pubClient, subClient);
  }

  createIOServer(port: number, options?: ServerOptions): any {
    const server = super.createIOServer(port, options);
    server.adapter(this.adaptarConstructor);
    return server;
  }
}
