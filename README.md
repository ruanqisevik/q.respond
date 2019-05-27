## koa-q-respond

<!-- [![Coverage Status](https://coveralls.io/repos/github/DhyanaChina/koa-custom-response/badge.svg?branch=master)](https://coveralls.io/github/DhyanaChina/koa-custom-response?branch=master) -->

![MIT](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)

该仓库是 Koa response 处理的标准中间件，但该仓库的 response 类型仅仅是符合个人风格的统一格式，不适用于所有业务。

#### Usage

- install: `npm i --save q-respond`

- import and load:

```
const Koa = require('koa')
const responseHandler = require('q-respond')
const router = require('./routes')

// ...other imports

const app = new Koa()

// you can set default options for responses
const defaultOptions = {
  merge: true
  successMessage: 'operate successfully',
  errorMessage: 'operate failure'
}

app.use(responseHandler(defaultOptions))
app.use(router.routes()).use(router.allowedMethods())

// in your controllers
const routes = router.get('/ok', ctx => {
  ctx.res.ok({
    data: 'ok data',
    code: 200
  })
})
```

### API

| Method (ctx.res.{method_name}) | params       | action                                              |
| ------------------------------ | ------------ | --------------------------------------------------- |
| ok                             | data: object | set http status to 200, return json (default: `{}`) |
| error                          | data: object | set http status to 200, return json (default: `{}`) |

### Options

| key            | type    | action                                              |
| -------------- | ------- | --------------------------------------------------- |
| merge          | boolean | set should merge default options to customized body |
| successMessage | string  | set default body.message using for ctx.res.ok       |
| failureMessage | string  | set default body.message using for ctx.res.error    |

<br>
<!-- 
### Examples

[example](https://github.com/DhyanaChina/koa-custom-response/tree/master/examples)

<br> -->

## LICENSE

[MIT](LICENSE)
