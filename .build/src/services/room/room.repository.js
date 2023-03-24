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
var RoomsRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomsRepository = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const ioredis_1 = require("ioredis");
const redis_module_1 = require("../../modules/redis.module");
let RoomsRepository = RoomsRepository_1 = class RoomsRepository {
    constructor(configService, redisClient) {
        this.redisClient = redisClient;
        this.logger = new common_1.Logger(RoomsRepository_1.name);
        this.ttl = configService.get('POLL_DURATION');
    }
    createRoom(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                adminID: '12313',
                hasStarted: false,
                id: '1asd123',
                participants: {
                    name: 'Herrold',
                },
                topic: 'Sex',
            };
        });
    }
    addParticipant(participant) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    getRoom(roomId) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    removeParticipant(roomId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Remove participants');
        });
    }
};
RoomsRepository = RoomsRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(redis_module_1.IORedisKey)),
    __metadata("design:paramtypes", [config_1.ConfigService,
        ioredis_1.Redis])
], RoomsRepository);
exports.RoomsRepository = RoomsRepository;
//# sourceMappingURL=room.repository.js.map