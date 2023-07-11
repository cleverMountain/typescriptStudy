// @ts-ignore
// @ts-ignore
const express = require('express')
const app = express()
const userRouter = require('./router/user.js')
const cors = require('cors')

// @ts-ignore
app.use(cors())
// @ts-ignore
const bodyParser = require('body-parser')

// @ts-ignore
app.use(bodyParser.urlencoded({ extended: false })) 
// @ts-ignore
app.use('/user',userRouter)
// @ts-ignore
app.listen(8080, () => {
  console.log('服务在http://127.0.0.1:8080')
})

