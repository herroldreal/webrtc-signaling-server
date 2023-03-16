import { Logger, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import {
  OnGatewayInit,
  WebSocketGateway,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Namespace } from 'socket.io';
import { WsCatchAllFilter } from '../../exceptions/ws-catch-all-filter';
import { RoomService } from '../../services/room/room.service';
import { SocketWithAuth } from '../rooms/types';
import { MessageTo } from '../models/message.to.model';

@UsePipes(new ValidationPipe())
@UseFilters(new WsCatchAllFilter())
@WebSocketGateway({
  namespace: 'rooms',
})
export class RoomGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() io: Namespace;
  private readonly logger = new Logger(RoomGateway.name);

  constructor(private readonly roomService: RoomService) {}

  afterInit(): any {
    this.logger.log(`Websocket Gateway initialized`);
  }

  async handleConnection(client: SocketWithAuth) {
    this.logger.debug(`handleConnection => ${JSON.stringify(client.rooms)}`);
    const sockets = this.io.sockets;

    /*this.logger.debug(
      `Socket connected with userId: ${client.userId}, roomId: ${client.roomId} and name: ${client.name}`,
    );*/
    this.logger.debug(`Socket connected`);
    this.logger.log(`WS Client with id: ${client.id} connected!`);
    this.logger.debug(`Number of connected sockets: ${sockets.size}`);

    /* const roomName = client.roomId;
    await client.join(roomName);

    const connectedClients = this.io.adapter.rooms?.get(roomName)?.size ?? 0;

    this.logger.debug(
      `userID: ${client.userId} joined room with name: ${roomName}`,
    );
    this.logger.debug(
      `Total clients connected to room '${roomName}': ${connectedClients}`,
    );

    const updatedPoll = await this.roomService.addParticipant({
      roomId: client.roomId,
      userId: client.userId,
      name: client.name,
    });
*/
    this.io.to('/rooms').emit('rtc', { name: 'Herrold Real' });
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

  @SubscribeMessage('to')
  async messageTo(
    @MessageBody() data: MessageTo,
    @ConnectedSocket() socket: SocketWithAuth,
  ) {
    this.logger.log(`Message to: ${JSON.stringify(data, null, 2)}`);
    socket.emit('to', data);
  }
}
