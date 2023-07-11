const db = require('../db/mysql.js')


exports.login = function (req, res) {
  let sqlStr = 'select * from ev_users where uname=?'
  const userInfo = req.query
  db.query(sqlStr, userInfo.uname, (err, ret) => {
    if (ret.length > 0) {
      return res.send({
        status: 400,
        message: '该账号已经存在'
      })
    }
    // 插入
    sqlStr = 'insert into ev_users set ?'
    db.query(sqlStr, { uname: userInfo.uname, upwd: userInfo.upwd }, (err, ret) => {
      if (err) return res.handler(err)
      if (ret.affectedRows === 1) {
        res.send('注册成功', 200)
      } else {
        res.send('注册失败')
      }
    })
  })
}


