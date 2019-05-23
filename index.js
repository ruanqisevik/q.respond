const statusCodes = require("./statusCodes");

function qrespond() {
  return async (ctx, next) => {
    ctx.res.ok = ({ data = null, code = null, message = null }) => {
      ctx.status = statusCodes.OK;
      ctx.body = {
        data: data,
        message: message,
        code: code
      };
    };

    await next();
  };
}

module.exports = qrespond;
