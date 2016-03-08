var express = require('express');
var path = require('path');
var logger = require('morgan');
var router = require('./routes/router');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var lyrics = require('./modules/lyrics');
var mongoose = require('mongoose');
var app = express();

lyrics(); // random line from my favorite song!!!

// view engine setup
app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Router Setup
app.use('/', router); // Handles all of the front end
app.use('/api', router); // Handles all of the API calls

// DB Setup
// Enter your MongoDB URI
mongoose.connect('mongodb://<user>:<password>@<example>.mlab.com:<example>/<example>');

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stack traces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;

//# sourceMappingURL=app-compiled.js.map