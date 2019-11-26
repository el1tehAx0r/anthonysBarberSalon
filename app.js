var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session=require('express-session');
var indexRouter = require('./routes/index');
var signupRouter=require('./routes/signup');
var signinRouter=require('./routes/signin');
//var indexmodRouter=require('./routes/indexmod');
//var indexModyfierRouter=require('./routes/indexModyfier');
var mongoose=require('mongoose');
var passport=require('passport');
var flash=require('connect-flash');
var validator=require('express-validator');
var MongoStore=require('connect-mongo')(session);
var app = express();
mongoose.connect('mongodb+srv://a:abcdefg@cluster0-jmip8.mongodb.net/anthonies?retryWrites=true',{useNewUrlParser:true});
//mongoose.connect('mongodb://localhost:27017/anthonies',{useNewUrlParser:true});
require('./config/passport');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
var hbs = require('hbs');
hbs.registerHelper('if_eq', function(a, b, opts) {
    if(a == b) // Or === depending on your needs
        return opts.fn(this);
    else
        return opts.inverse(this);
});
hbs.registerHelper('times', function(n, block) {
    var accum = '';
    for(var i = 0; i < n; ++i)
        accum += block.fn(i);
    return accum;
});
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(validator());
app.use(cookieParser());
app.use(session({secret:"secretkey",resave:false,saveUninitialized:false,
store:new MongoStore({mongooseConnection:mongoose.connection}),
cookie:{maxAge:180*60*1000}}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req,res,next)
{
res.locals.login=req.isAuthenticated();
res.locals.session=req.session;
next();
});
app.use("/signup",signupRouter);
//app.use("/indexmod",indexmodRouter);
app.use("/signin",signinRouter);
//app.use("/indexModyfier",indexModyfierRouter);
app.use('/', indexRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
