import { RoomService } from '../services/room/room.service';
import { Response } from 'express';
export declare class RoomController {
    private roomService;
    constructor(roomService: RoomService);
    create(res: Response): Promise<void>;
}
