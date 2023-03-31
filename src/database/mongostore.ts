import { IMongoDbStore } from './imongostore';

export class MongoDbStore implements IMongoDbStore {
  create(data: any): Promise<boolean> {
    return Promise.resolve(false);
  }
}
