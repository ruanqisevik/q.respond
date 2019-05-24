const Koa = require('koa')
const http = require('http')

const responseHandler = require('../index')
const router = require('./routes')

const createServer = async () => {
	const app = new Koa()
	app.use(
		responseHandler({
			successMessage: 'operate successfully',
			errorMessage: 'operate failure'
		})
	)
	app.use(router.routes()).use(router.allowedMethods())

	return app
}

const listenServer = async () => {
	try {
		const app = await createServer()
		const server = app.listen(3000, () =>
			console.log('listening on port 3000...')
		)
		return server
	} catch (err) {
		console.log('server err...', err)
	}
}

module.exports = listenServer()
