import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Injectable } from '@nestjs/common';

@Injectable()
@WebSocketGateway(80, { transports: 'websocket', namespace: 'rtc' })
export class RTCEventGateway {
  @SubscribeMessage('rtc')
  handleEvent(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: string,
  ): string {
    return data;
  }
}
