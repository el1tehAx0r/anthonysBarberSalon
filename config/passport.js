var passport=require('passport');
var Admin=require('../models/admin');
var LocalStrategy=require('passport-local').Strategy;
passport.serializeUser(function(admin,done){
  done(null,admin.id);
});
passport.deserializeUser(function(id,done){Admin.findById(id,function(err,admin){done(err,admin);});});

passport.use('local.signup',new LocalStrategy({usernameField:'email',passwordField:'password',passReqToCallback:true}, function(req,email,password,done){
req.checkBody('email','Invalid email').isEmail();
req.checkBody('password','Invalid password').notEmpty().isLength({min:5});
var errors =req.validationErrors();
if(errors){
  var messages=[];
  errors.forEach(function(error){
    messages.push(error.msg);
  })
  return done(null,false,req.flash('error',messages));
}
Admin.count({},function(err,count){if(err){return done(err);}
if(count>0){
  return done(null,false,{message:'admin account already created'});
}
var newAdmin=new Admin();
newAdmin.email=email;
newAdmin.password=newAdmin.encryptPassword(password);
newAdmin.save(function(err,result){
  if(err) return done(err);
  return done(null,newAdmin);
});})
/*Admin.dataSize({'email':email},function(err,admin){if(err){return done(err);}
if(admin){
  return done(null,false,{message:'email already in use'});
}
var newAdmin=new Admin();
newAdmin.email=email;
newAdmin.password=newAdmin.encryptPassword(password);
newAdmin.save(function(err,result){
  if(err) return done(err);
  return done(null,newAdmin);
});})*/
}));

passport.use('local.signin',new LocalStrategy({usernameField:'email',passwordField:'password',passReqToCallback:true}, function(req,email,password,done){
req.checkBody('email','Invalid email').isEmail();
req.checkBody('password','Invalid password').notEmpty();
var errors =req.validationErrors();
if(errors){
  var messages=[];
  errors.forEach(function(error){
    messages.push(error.msg);
  })
  return done(null,false,req.flash('error',messages));
}
Admin.findOne({'email':email},function(err,admin){if(err){return done(err);}
if(!admin){
  return done(null,false,{message:'YOU ARE NOT THE ADMIN'});
}
if(!admin.validPassword(password)){
    return done(null, false, {message:'WRONG PASSWORD'});
}
return done(null, admin);
})
/*Admin.dataSize({'email':email},function(err,admin){if(err){return done(err);}
if(admin){
  return done(null,false,{message:'email already in use'});
}
var newAdmin=new Admin();
newAdmin.email=email;
newAdmin.password=newAdmin.encryptPassword(password);
newAdmin.save(function(err,result){
  if(err) return done(err);
  return done(null,newAdmin);
});})*/
}));
