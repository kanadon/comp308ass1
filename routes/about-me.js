/**
 * Created by DENIS on 09/02/2017.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/about-me', { title: 'About Me' });
});

module.exports = router;
