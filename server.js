const Koa = require('Koa');
const Router = require('koa-router')
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handler = app.getRequestHandler();

// next编译完页面再初始化Koa
app.prepare().then(() => {
    const server = new Koa();

    server.use(async (ctx, next) => {
        await handler(ctx.req, ctx.res)
        ctx.respond = false
    })

    server.listen(3000, () => {
        console.log('koa server listening on 3000')
    })

})