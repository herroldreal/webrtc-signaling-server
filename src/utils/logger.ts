export class Logger {
  private readonly loggerTag: string = 'WebRTC';

  constructor(tag: string) {
    this.loggerTag = tag;
  }

  log(message: string) {
    console.log(this.loggerTag, message);
  }

  info(message: string) {
    console.info(this.loggerTag, message);
  }

  error(message: string) {
    console.error(this.loggerTag, message);
  }
}
