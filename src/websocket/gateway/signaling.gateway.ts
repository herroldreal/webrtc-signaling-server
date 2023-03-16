import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { SocketWithAuth } from '../rooms/types';
import { Namespace } from 'socket.io';
import { Logger, UseFilters } from '@nestjs/common';
import { WebRTCSessionStateEnum } from '../enums/webrtcsessionstate.enum';
import { WsCatchAllFilter } from '../../exceptions/ws-catch-all-filter';

@UseFilters(new WsCatchAllFilter())
@WebSocketGateway({
  namespace: 'rtc',
  transports: 'websocket',
})
export class SignalingGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() io: Namespace;
  private readonly logger = new Logger(SignalingGateway.name);
  private sessionState: WebRTCSessionStateEnum =
    WebRTCSessionStateEnum.Impossible;

  afterInit(): any {
    this.logger.log(`Websocket Signaling Gateway initialized`);
  }

  async handleConnection(client: SocketWithAuth) {
    this.logger.debug(
      `handleConnection (signaling) => ${JSON.stringify(client.rooms)}`,
    );
    const sockets = this.io.sockets;

    this.logger.debug(`Socket connected`);
    this.logger.log(`WS Client with id: ${client.id} connected!`);
    this.logger.debug(`Number of connected sockets: ${sockets.size}`);

    if (sockets.size > 1) this.sessionState = WebRTCSessionStateEnum.Ready;

    client.emit('/', { state: this.sessionState });
  }

  async handleDisconnect(client: SocketWithAuth): Promise<any> {
    const sockets = this.io.sockets;

    /* const { roomId, userId } = client;
    const updatedRoom = await this.roomService.removeParticipant(
      roomId,
      userId,
    );

    const roomName = client.pollID;
    const clientCount = this.io.adapter.rooms?.get(roomName)?.size ?? 0;*/

    this.logger.log(`Disconnected socket id: ${client.id}`);
    this.logger.debug(`Number of connected sockets: ${sockets.size}`);
    this.logger.debug(
      `Total clients connected to room '${sockets.size}': ${sockets.keys()}`,
    );

    // updatedRoom could be undefined if the the poll already started
    // in this case, the socket is disconnect, but no the room state
    /*if (updatedRoom) {
      this.io.to(roomId).emit('poll_updated', updatedRoom);
    }*/
  }

  @SubscribeMessage('/')
  async root(@ConnectedSocket() socket: SocketWithAuth) {
    this.logger.log('RTC Ping');
    return socket.emit('rtc', { name: WebRTCSessionStateEnum.Ready });
  }

  @SubscribeMessage('ping')
  async ping(
    @MessageBody('state') state: string,
    @ConnectedSocket() socket: SocketWithAuth,
  ): Promise<boolean> {
    this.logger.log('Ping', state);
    return socket.emit('signaling', { name: state });
  }

  @SubscribeMessage('signaling')
  async signaling(
    @MessageBody('name') message: string,
    @ConnectedSocket() socket: SocketWithAuth,
  ): Promise<boolean> {
    this.logger.log('Signaling', message);
    return socket.emit('signaling', { name: message });
  }
}
