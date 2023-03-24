import { OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Namespace } from 'socket.io';
import { RoomService } from '../../services/room/room.service';
import { SocketWithAuth } from '../rooms/types';
import { MessageTo } from '../models/message.to.model';
export declare class RoomGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private readonly roomService;
    io: Namespace;
    private readonly logger;
    constructor(roomService: RoomService);
    afterInit(): any;
    handleConnection(client: SocketWithAuth): Promise<void>;
    handleDisconnect(client: SocketWithAuth): Promise<any>;
    messageTo(data: MessageTo, socket: SocketWithAuth): Promise<void>;
}
