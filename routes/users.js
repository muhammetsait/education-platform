var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('usersIndex', { title: 'index' });
});

router.get('/create', function(req, res, next) {
  res.render('usersIndex', { title: 'add new user' });
});

module.exports = router;
