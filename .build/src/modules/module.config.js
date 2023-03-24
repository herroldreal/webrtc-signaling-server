"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtModule = exports.redisModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const redis_module_1 = require("./redis.module");
const jwt_1 = require("@nestjs/jwt");
exports.redisModule = redis_module_1.RedisModule.registerAsync({
    imports: [config_1.ConfigModule],
    useFactory: (configService) => __awaiter(void 0, void 0, void 0, function* () {
        const logger = new common_1.Logger('RedisModule');
        return {
            connectionOptions: {
                host: configService.get('redis.host'),
                port: configService.get('redis.port'),
                username: configService.get('redis.user'),
                password: configService.get('redis.password'),
            },
            onClientReady: (client) => {
                logger.log('Redis client ready');
                client.on('error', (err) => {
                    logger.error(`Redis client error => ${JSON.stringify(err)}`);
                });
                client.on('connect', () => {
                    logger.log(`Connected to Redis on ${client.options.host}:${client.options.port}`);
                });
            },
        };
    }),
    inject: [config_1.ConfigService],
});
exports.jwtModule = jwt_1.JwtModule.registerAsync({
    imports: [config_1.ConfigModule],
    useFactory: (configService) => __awaiter(void 0, void 0, void 0, function* () {
        return ({
            secret: configService.get('auth.secret'),
            signOptions: {
                expiresIn: parseInt(configService.get('rtc.ttl')),
            },
        });
    }),
    inject: [config_1.ConfigService],
});
//# sourceMappingURL=module.config.js.map