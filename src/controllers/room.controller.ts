import { Get, HttpStatus, Res } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { RoomService } from '../services/room/room.service';
import { Response } from 'express';

//@UsePipes(new ValidationPipe())
@Controller('rtc')
export class RoomController {
  constructor(private roomService: RoomService) {}

  @Get('/')
  async create(@Res({ passthrough: true }) res: Response) {
    res.status(HttpStatus.SWITCHING_PROTOCOLS).json({
      status: 'OK',
      message: 'Switching Protocols',
    });
  }
}
