import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class RtcEventGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('friends')
  async friends(@MessageBody() data: number): Promise<any> {
    console.log('data => ', data);
  }

  @SubscribeMessage('identity')
  async identity(@MessageBody() data: any) {
    console.log('Identity -> ', data);
  }
}
