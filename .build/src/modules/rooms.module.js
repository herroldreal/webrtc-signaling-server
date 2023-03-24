"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomsModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const module_config_1 = require("./module.config");
const room_service_1 = require("../services/room/room.service");
const room_repository_1 = require("../services/room/room.repository");
const room_gateway_1 = require("../websocket/gateway/room.gateway");
const room_controller_1 = require("../controllers/room.controller");
let RoomsModule = class RoomsModule {
};
RoomsModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule, module_config_1.redisModule, module_config_1.jwtModule],
        controllers: [room_controller_1.RoomController],
        providers: [room_service_1.RoomService, room_repository_1.RoomsRepository, room_gateway_1.RoomGateway],
    })
], RoomsModule);
exports.RoomsModule = RoomsModule;
//# sourceMappingURL=rooms.module.js.map