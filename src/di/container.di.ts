import 'reflect-metadata';
import { container, Lifecycle } from 'tsyringe';
import { DynamoStore } from '../utils/dynamostore';
import { SessionRepository } from '../repository/session.repository';
import { SessionService } from '../services/database/session.service';

container.registerSingleton('IDynamoStore', DynamoStore);

container.register('ISessionRepository', SessionRepository);
container.register('ISessionService', SessionService);

export const diContainer = container;
