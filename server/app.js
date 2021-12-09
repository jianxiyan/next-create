const app = require('./koa');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({dev});
const handler = nextApp.getRequestHandler();

// next编译完页面再初始化Koa
nextApp.prepare().then(() => {

    app.use(async (ctx, next) => {
        await handler(ctx.req, ctx.res)
        ctx.respond = false
    })

    app.listen(3000, () => {
        console.log('koa server listening on 3000')
    })

})