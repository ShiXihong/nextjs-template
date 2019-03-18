const Koa = require('koa')
const next = require('next')
const Router = require('koa-router')

const port = parseInt(String(process.env.PORT), 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = new Koa()
    const router = new Router()

    router.get('/about', async (ctx: any) => {
        await app.render(ctx.req, ctx.res, '/about', ctx.query)
        ctx.respond = false
    })

    router.get('*', async (ctx: any) => {
        await handle(ctx.req, ctx.res)
        ctx.respond = false
    })

    server.use(async (ctx: any, next: any) => {
        ctx.res.statusCode = 200
        await next()
    })

    server.use(router.routes())
    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`)
    })
})