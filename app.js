var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRoute = require('./routes/api')

var app = express();
app.listen( process.env.PORT || 3000, () => {
    console.log('Server started on port 3000');
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/API', apiRoute); //api para usar el dialogflow, por el momento basico


//module.exports = app;
