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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
var RoomGateway_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomGateway = void 0;
const common_1 = require("@nestjs/common");
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const ws_catch_all_filter_1 = require("../../exceptions/ws-catch-all-filter");
const room_service_1 = require("../../services/room/room.service");
let RoomGateway = RoomGateway_1 = class RoomGateway {
    constructor(roomService) {
        this.roomService = roomService;
        this.logger = new common_1.Logger(RoomGateway_1.name);
    }
    afterInit() {
        this.logger.log(`Websocket Gateway initialized`);
    }
    handleConnection(client) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.debug(`handleConnection => ${JSON.stringify(client.rooms)}`);
            const sockets = this.io.sockets;
            this.logger.debug(`Socket connected`);
            this.logger.log(`WS Client with id: ${client.id} connected!`);
            this.logger.debug(`Number of connected sockets: ${sockets.size}`);
            this.io.to('/rooms').emit('rtc', { name: 'Herrold Real' });
        });
    }
    handleDisconnect(client) {
        return __awaiter(this, void 0, void 0, function* () {
            const sockets = this.io.sockets;
            this.logger.log(`Disconnected socket id: ${client.id}`);
            this.logger.debug(`Number of connected sockets: ${sockets.size}`);
            this.logger.debug(`Total clients connected to room '${sockets.size}': ${sockets.keys()}`);
        });
    }
    messageTo(data, socket) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log(`Message to: ${JSON.stringify(data, null, 2)}`);
            socket.emit('to', data);
        });
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Namespace)
], RoomGateway.prototype, "io", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('to'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RoomGateway.prototype, "messageTo", null);
RoomGateway = RoomGateway_1 = __decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.UseFilters)(new ws_catch_all_filter_1.WsCatchAllFilter()),
    (0, websockets_1.WebSocketGateway)({
        namespace: 'rooms',
    }),
    __metadata("design:paramtypes", [room_service_1.RoomService])
], RoomGateway);
exports.RoomGateway = RoomGateway;
//# sourceMappingURL=room.gateway.js.map