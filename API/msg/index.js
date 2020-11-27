const koa = require('koa')
const koaBodyParser = require('koa-bodyparser')
const app = new koa()
const core = require('koa2-cors')
const router = require('koa-router')()
const fs = require('fs')
const path = require('path')
app.use(core())
app.use(koaBodyParser())
app.use(router.routes())
router.post('/registered', async (ctx, next) => {
  const body = ctx.request.body
  let promise = new Promise((res, rej) => {
    fs.readFile(path.join(__dirname, './DB/DB.json'), (err, data) => {
      let num = 0
      let arr = JSON.parse(data.toString())
      arr.forEach(value => {
        if (value.tel == body.tel) {
          num++
        }
      })
      if (num < 1) {
        arr.push(body)
        fs.writeFile(path.join(__dirname, './DB/DB.json'), JSON.stringify(arr), (err) => { })
        res({ status: 200 })
      } else {
        res({ status: 201 })//账号已存在
      }
    })
  })
  ctx.response.body = await promise
})
router.post('/login', async (ctx, next) => {
  const body = ctx.request.body
  const promise = new Promise((res, rej) => {
    fs.readFile(path.join(__dirname, './DB/DB.json'), (err, data) => {
      if (err) {
        res({ status: 201 })
      } else {
        const arr = JSON.parse(data.toString())
        const obj = arr.filter((item) => {
          return item.tel == body.tel && item.pwd === body.pwd
        })
        if (obj.length === 0) {
          res({ status: 201 })
        }else{
          res({status: 200, msg: obj[0]})
        }
      }
    })
  })
  ctx.response.body = JSON.stringify(await promise)
})
app.listen('3001', () => {
  console.log('server running @ http://localhost:3001')
})