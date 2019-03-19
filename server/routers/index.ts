import * as combineRouters from 'koa-combine-routers'
import * as webRouters from './web'
import * as apiRouters from './api'

const router = combineRouters(webRouters, apiRouters)

export default router