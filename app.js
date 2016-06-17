var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require("http");
var request = require('request');

var users = require('./routes/users');

var app = express();


var compress = require('compression');

app.use(compress());
// expose node_modules to client app
app.use(express.static("./node_modules/", { maxage: '7d', } ));
app.use(express.static("./app/"));
app.use(express.static(__dirname + '/public/', { maxage: '7d' }));



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var router = express.Router();

router.get('/instagram-recents', function(req, res) {
    console.log(req.query);
    var username = req.query.username;
    request("http://instagram.com/best_blee_it/media", function(error, response, body) {
        res.json(JSON.parse(body));
    });
    // request("http://instagram.com/" + username + "/media", function(error, response, body) {
    //     res.json(JSON.parse(body));
    // });
});

router.get('/facebook-recents', function(req, res) {
    var access_token = "EAACEdEose0cBAGSXNBdQGZCPeiZB0IDfGfZB4RqH8ZAuevYtOeIV91KuMcIgZBnq20f2bSjLYSwEng2GOSEiF1FcfaJDMdVANUWKuWaPU1ZBxW2IZCmsZBnyYUjBUqpEi7Rre5v8ONwjvzY4fKne3s2nwOaudhMBHAlsx2qdiN9O0QZDZD";

    request("https://graph.facebook.com/me/feed?access_token=" + access_token, function(error, response, body) {
        res.json(JSON.parse(body));
    });
});

router.get('/projects', function(req, res) {
    res.json([
            {
                title : 'Photo Wall',
                url : 'http://brians-photo-wall.herokuapp.com',
                image : 'images/photo-wall.png'
            },
            {
                title : 'About Brian Lee',
                url : 'http://about-brian-lee.herokuapp.com',
                image : 'images/about-brian-lee.png'
            }
    ]);
});

app.use('/api', router);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});



module.exports = app;
