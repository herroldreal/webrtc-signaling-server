export interface IMongoDbStore {
  create(data: any): Promise<boolean>;
}
