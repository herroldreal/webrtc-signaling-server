import { Injectable } from '@nestjs/common';
import { WebSocketGateway } from '@nestjs/websockets';

@Injectable()
@WebSocketGateway(80, { namespace: 'rtc', transports: ['websocket'] })
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
