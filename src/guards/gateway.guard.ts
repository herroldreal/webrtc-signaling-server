import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { WsUnauthorizedException } from '../exceptions/ws-exceptions';
import { RoomService } from '../services/room/room.service';
import { AuthPayload, SocketWithAuth } from '../websocket/rooms/types';

@Injectable()
export class GatewayGuard implements CanActivate {
  private readonly logger = new Logger(GatewayGuard.name);

  constructor(
    private readonly roomService: RoomService,
    private readonly jwtService: JwtService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const socket: SocketWithAuth = context.switchToWs().getClient();

    const token =
      socket.handshake.auth.token || socket.handshake.headers['token'];

    if (!token) {
      this.logger.log('No authorization token provided');
      throw new WsUnauthorizedException('No token provided');
    }

    try {
      const payload = this.jwtService.verify<AuthPayload & { sub: string }>(
        token,
      );
      const { sub, roomId } = payload;
      const room = await this.roomService.getRoom(roomId);

      if (sub !== room.adminID) {
        throw new WsUnauthorizedException('Admin privileges required');
      }

      return true;
    } catch {
      throw new WsUnauthorizedException('Admin privileges required');
    }
  }
}
