var express = require('express');
var router = express.Router();

/* GET register listing. */
router.get('/', function(req, res, next) {
  res.send('这是注册界面get');
});

router.post('/', function(req, res, next) {
    res.send('这是注册界面post');
  });

module.exports = router;
