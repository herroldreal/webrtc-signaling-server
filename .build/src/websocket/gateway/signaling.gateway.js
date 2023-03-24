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
var SignalingGateway_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignalingGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const common_1 = require("@nestjs/common");
const webrtcsessionstate_enum_1 = require("../enums/webrtcsessionstate.enum");
let SignalingGateway = SignalingGateway_1 = class SignalingGateway {
    constructor() {
        this.logger = new common_1.Logger(SignalingGateway_1.name);
    }
    afterInit() {
        this.logger.log(`Websocket Signaling Gateway initialized`);
    }
    handleConnection(client) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.debug(`handleConnection (signaling) => ${JSON.stringify(client.rooms)}`);
            const sockets = this.io.sockets;
            this.logger.debug(`Socket connected`);
            this.logger.log(`WS Client with id: ${client.id} connected!`);
            this.logger.debug(`Number of connected sockets: ${sockets.size}`);
            client.send(webrtcsessionstate_enum_1.WebRTCSessionStateEnum.Ready);
        });
    }
    handleDisconnect(client) {
        return __awaiter(this, void 0, void 0, function* () {
            const sockets = this.io.sockets;
            this.logger.log(`Disconnected socket id: ${client.id}`);
            this.logger.debug(`Number of connected sockets: ${sockets.size}`);
            this.logger.debug(`Total clients connected to room '${sockets.size}': ${sockets.keys()}`);
            client.send(webrtcsessionstate_enum_1.WebRTCSessionStateEnum.Close);
        });
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Namespace)
], SignalingGateway.prototype, "io", void 0);
SignalingGateway = SignalingGateway_1 = __decorate([
    (0, websockets_1.WebSocketGateway)({
        namespace: 'rtc',
        transports: 'websocket',
        allowEIO3: true,
        cors: {
            origin: ['*'],
        },
    })
], SignalingGateway);
exports.SignalingGateway = SignalingGateway;
//# sourceMappingURL=signaling.gateway.js.map