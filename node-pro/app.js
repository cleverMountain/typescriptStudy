// @ts-ignore
const express = require('express')
const app = express()
const mysql = require('./db/mysql.js')

// @ts-ignore
app.get('/', (req, res) => {
  res.send('hello')
})

// @ts-ignore
app.listen(8080, () => {
  console.log('服务在http://localhost:8080')
})

console.log(mysql)