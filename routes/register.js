var express = require('express');
var router = express.Router();
var db = require('../model/db')

/* GET register listing. */
//req request 请求 问
//res result
router.get('/', function(req, res, next) {
  let inform = req.query
  let newusername = inform.newusername
  let newpassword = inform.newpassword
  let result = {
    state:'success',
    message:"注册成功，你的用户名:"+newusername + "\n" + "你的密码是:" + newpassword
  }
  res.send(result)  
});

// router.post('/', function(req, res, next) {
//     res.send('这是注册界面post');
//   });
router.post('/', function(req, res, next) {
  let inform = req.body.params;
  let username = inform.newusername;
  let password = inform.newpassword;
  let newUserSQL = 'INSERT INTO USERS (user_id,user_name,user_password,user_create_time) VALUES(1002,' +'"'+ username+'"' + ',' +'"'+ password +'"' +',' +'"' + new Date().format('yyyy-MM-dd hh:mm:ss') + '"' + ')' 
  let conn = db.connection()
  // let result = {}
  db.insert(conn,newUserSQL,'',function(res){
    let result = res;
    console.log(res)
  })
  db.close(conn)
  res.send("注册完成")
});


module.exports = router;
