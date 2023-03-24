"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var RoomService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const ids_1 = require("../../utils/ids");
const room_repository_1 = require("./room.repository");
let RoomService = RoomService_1 = class RoomService {
    constructor(repository, jwtService) {
        this.repository = repository;
        this.jwtService = jwtService;
        this.logger = new common_1.Logger(RoomService_1.name);
    }
    createRoom(fields) {
        return __awaiter(this, void 0, void 0, function* () {
            const roomId = (0, ids_1.createRoomID)();
            const userId = (0, ids_1.createUserID)();
            const createdRoom = yield this.repository.createRoom(Object.assign(Object.assign({}, fields), { roomId,
                userId }));
            this.logger.debug(`Creating token string for RoomID: ${createdRoom.id} and User ID: ${userId}`);
            const signedString = this.jwtService.sign({
                roomId: createdRoom.id,
                name: fields.name,
            }, {
                subject: userId,
            });
            return {
                room: createdRoom,
                accessToken: signedString,
            };
        });
    }
    joinToRoom(fields) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = (0, ids_1.createUserID)();
            this.logger.debug(`Fetching room with ID: ${fields.roomId} for user with ID: ${userId}`);
            const joinedRoom = yield this.repository.getRoom(fields.roomId);
            this.logger.debug(`Creating token string for Room ID: ${joinedRoom.id} and User ID: ${userId}`);
            const signedString = this.jwtService.sign({
                roomId: joinedRoom.id,
                name: fields.name,
            }, {
                subject: userId,
            });
            return {
                room: joinedRoom,
                accessToken: signedString,
            };
        });
    }
    rejoinPoll(fields) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.debug(`Rejoining poll with ID: ${fields.roomId} for user with ID: ${fields.userId} with name: ${fields.name}`);
            return yield this.repository.addParticipant(fields);
        });
    }
    addParticipant(addParticipant) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.addParticipant(addParticipant);
        });
    }
    removeParticipant(pollID, userID) {
        return __awaiter(this, void 0, void 0, function* () {
            const poll = yield this.repository.getRoom(pollID);
            if (!poll.hasStarted) {
                return yield this.repository.removeParticipant(pollID, userID);
            }
        });
    }
    getRoom(roomId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.getRoom(roomId);
        });
    }
};
RoomService = RoomService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [room_repository_1.RoomsRepository,
        jwt_1.JwtService])
], RoomService);
exports.RoomService = RoomService;
//# sourceMappingURL=room.service.js.map