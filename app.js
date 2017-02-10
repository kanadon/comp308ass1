var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//override deprecated logging
var debug = require('debug');
var error = debug('app:error');
var log = debug('app:log');
log.log = console.log.bind(console);
debug.log = console.info.bind(console);


// var index = require('./routes/index');
// var users = require('./routes/users');
var home = require('./routes/home');
var aboutMe = require('./routes/about-me');
var contactMe = require('./routes/contact-me');
var projects = require ('./routes/projects');
var services = require('./routes/services');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', index);
// app.use('/users', users);
app.use('/', home);
app.use('/home', home);
app.use('/about-me', aboutMe);
app.use('/contact-me', contactMe);
app.use('/projects', projects);
app.use('/services', services);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
