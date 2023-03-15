import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  transports: ['websocket'],
})
export class RtcEventGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('friends')
  async friends(@MessageBody() data: number): Promise<any> {
    console.log('data => ', data);
    this.server.emit('Data => ', data);
  }

  @SubscribeMessage('identity')
  async identity(@MessageBody() data: any) {
    console.log('Identity -> ', data);
    this.server.emit(`Identify {$data}`);
  }
}
