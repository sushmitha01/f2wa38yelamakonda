var express = require('express');
var router = express.Router();

/* GET aboutme page */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'SUSHMITHA YELAMAKONDA'});
});

module.exports = router;