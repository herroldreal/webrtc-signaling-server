import 'reflect-metadata';
import { container, Lifecycle } from 'tsyringe';
import { SessionRepository } from '../repository/session.repository';
import { SessionService } from '../services/database/session.service';
import { MongoDbStore } from '../database/mongostore';

container.registerSingleton('IMongoDbStore', MongoDbStore);

container.register('ISessionRepository', SessionRepository);
container.register('ISessionService', SessionService);

export const diContainer = container;
