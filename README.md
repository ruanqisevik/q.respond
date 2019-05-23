## koa-q-respond

<!-- [![Coverage Status](https://coveralls.io/repos/github/DhyanaChina/koa-custom-response/badge.svg?branch=master)](https://coveralls.io/github/DhyanaChina/koa-custom-response?branch=master) -->

![MIT](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)

该仓库是 Koa response 处理的标准中间件，但该仓库的 response 类型仅仅是符合个人风格的统一格式，不适用于所有业务。

<br>

#### Usage

- install: `npm i --save q-respond`

- import and load:

  ```

  ```

<br>

### API

| Method (ctx.res.{method_name}) | params                 | action                                              |
| ------------------------------ | ---------------------- | --------------------------------------------------- |
| ok                             | data: object or string | set http status to 200, return json (default: `{}`) |

<br>
<!-- 
### Examples

[example](https://github.com/DhyanaChina/koa-custom-response/tree/master/examples)

<br> -->

## LICENSE

[MIT](LICENSE)
