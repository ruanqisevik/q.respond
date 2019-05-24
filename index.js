const statusCodes = require('./statusCodes')
const _ = require('lodash')

function qrespond(options) {
	const { merge = true, successMessage = null, failureMessage = null } = options

	return async (ctx, next) => {
		ctx.res.ok = params => {
			const defaultParams = {
				data: null,
				status: 'success',
				code: statusCodes.OK,
				message: successMessage
			}

			ctx.status = statusCodes.OK
			ctx.body = genBody(defaultParams, params, merge)
		}

		ctx.res.error = params => {
			const defaultParams = {
				data: null,
				status: 'failure',
				message: failureMessage
			}
			ctx.status = statusCodes.OK
			ctx.body = genBody(defaultParams, params, merge)
		}

		await next()
	}
}

function genBody(defaultParams, params, merge) {
	return merge ? _.extend(defaultParams, params) : params || {}
}

module.exports = qrespond
