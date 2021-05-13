var express = require('express');
var router = express.Router();

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
  let newusername = inform.newusername
  let newpassword = inform.newpassword
  let result = {
    state:'success',
    message:"这里是post请求，你的用户名:"+newusername + "\n" + "你的密码是:" + newpassword
  }
  res.send(result);  
});

module.exports = router;
