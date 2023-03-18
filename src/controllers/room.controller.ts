import { Get, UsePipes, ValidationPipe } from '@nestjs/common';
import { Body, Controller, Post } from '@nestjs/common';
import { RoomService } from '../services/room/room.service';

//@UsePipes(new ValidationPipe())
@Controller('rtc')
export class RoomController {
  constructor(private roomService: RoomService) {}

  @Get('/')
  async create(@Body() dto: any) {
    // return await this.roomService.createRoom(dto);
  }
}
