const fs = require('fs');

const Koa = require('Koa');
const router = require('./routes');

const config = require('./config');
const query = require('./utils/mysql-async');


const app = new Koa();

// 记载mysql连接池
app.use(async(ctx, next) => {
    ctx.execSql = query;
    ctx.set('Access-Control-Allow-Origin', config.accessControlAllowOrigin);
    await next();
});

app.use(router.routes())

module.exports = app;