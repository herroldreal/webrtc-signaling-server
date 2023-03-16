import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Logger,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RequestWithAuth } from '../websocket/rooms/types';

@Injectable()
export class AuthGuard implements CanActivate {
  private readonly logger = new Logger(AuthGuard.name);

  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request: RequestWithAuth = context.switchToHttp().getRequest();
    this.logger.debug(`Checking for auth on request body => ${request.body}`);

    const { accessToken } = request.body;

    try {
      const payload = this.jwtService.verify(accessToken);
      request.userId = payload.sub;
      request.roomId = payload.roomId;
      request.name = payload.name;
      return true;
    } catch {
      throw new ForbiddenException('Invalid authorization token');
    }
  }
}
