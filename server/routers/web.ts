import * as Router from 'koa-router'
import * as next from 'next'

const router = new Router()
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()


router.get('/about', async (ctx: any) => {
  await app.render(ctx.req, ctx.res, '/about', ctx.query)
  ctx.respond = false
})

router.get('*', async (ctx: any) => {
  await handle(ctx.req, ctx.res)
  ctx.respond = false
})

export default router