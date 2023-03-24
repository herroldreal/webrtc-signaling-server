"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
var RedisModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisModule = exports.IORedisKey = void 0;
const common_1 = require("@nestjs/common");
const ioredis_1 = require("ioredis");
exports.IORedisKey = 'IORedis';
let RedisModule = RedisModule_1 = class RedisModule {
    static registerAsync({ useFactory, imports, inject, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const redisProvider = {
                provide: exports.IORedisKey,
                useFactory: (...args) => __awaiter(this, void 0, void 0, function* () {
                    const { connectionOptions, onClientReady } = yield useFactory(...args);
                    const client = yield new ioredis_1.default(connectionOptions);
                    onClientReady(client);
                    return client;
                }),
                inject,
            };
            return {
                module: RedisModule_1,
                imports,
                providers: [redisProvider],
                exports: [redisProvider],
            };
        });
    }
};
RedisModule = RedisModule_1 = __decorate([
    (0, common_1.Module)({})
], RedisModule);
exports.RedisModule = RedisModule;
//# sourceMappingURL=redis.module.js.map