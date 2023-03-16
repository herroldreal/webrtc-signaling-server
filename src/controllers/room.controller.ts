import { UsePipes, ValidationPipe } from '@nestjs/common';
import { Body, Controller, Post } from '@nestjs/common';
import { RoomService } from 'src/services/room/room.service';

@UsePipes(new ValidationPipe())
@Controller('rooms')
export class RoomController {
  constructor(private roomService: RoomService) {}

  @Post()
  async create(@Body() dto: any) {
    return await this.roomService.createRoom(dto);
  }
}
