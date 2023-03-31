import { createServer } from 'http';
import { Server } from 'ws';
import { WebsocketService } from './services/websocket.service';

const wss = new Server({ port: 8000 });
const wsService = new WebsocketService();

console.log(
  `WebSocket Address => ${JSON.stringify(wss.address(), undefined, 2)}`,
);

wss.on('connection', (ws) => {
  console.log('WS Connection');
  wsService.register(ws);
});
