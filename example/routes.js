const Router = require('koa-router')
const router = new Router()

const routes = router.get('/ok', ctx => {
	ctx.res.ok({
		data: 'ok data',
		code: 200
	})
})

module.exports = routes
