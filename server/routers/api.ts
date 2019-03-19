import * as Router from 'koa-router'
import { configure, getLogger } from 'log4js'

configure('./log4.config.json')
const logger = getLogger()
logger.level = 'debug'
const router = new Router()

router.post('/api/logger', async (ctx: any) => {
  console.log(ctx)
})

export default router