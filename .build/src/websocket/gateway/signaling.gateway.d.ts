import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
import { SocketWithAuth } from '../rooms/types';
import { Namespace } from 'socket.io';
export declare class SignalingGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    io: Namespace;
    private readonly logger;
    afterInit(): any;
    handleConnection(client: SocketWithAuth): Promise<void>;
    handleDisconnect(client: SocketWithAuth): Promise<any>;
}
