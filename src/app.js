import Koa from 'koa';
import { messages } from './Data.js';

const app = new Koa();

app.use(async ctx => {
  if (ctx.url === '/messages/unread') {
    ctx.response.body = {
      status: "ok",
      timestamp: Date.now(),
      messages: messages,
    }
  }
})


app.listen(8080);
