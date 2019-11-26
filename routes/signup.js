var express = require('express');
var router = express.Router();
var csrf=require('csurf');
var csrfProtection=csrf();
var passport=require('passport');

router.use(csrfProtection);
/* GET home page. */
router.use('/',notLoggedIn,function(req,res,next)
{
  next();
});

router.get('/', function(req, res, next) {
  var messages=req.flash('error');
      res.render('signup',{csurfToken:req.csrfToken(),messages:messages,haserrors:messages.length>0});
});
router.post('/', passport.authenticate('local.signup',{
successRedirect:'/indexModyfier',
failureRedirect:'/signup',
failureFlash:true}));

module.exports = router;
function notLoggedIn(req,res, next){
  if(!req.isAuthenticated()){
    return next();
  }
  res.redirect('/');
}
/*FrontGallery.find(function(err,docs){
 var galleryComponents=[];
  var gallerySize=2;
  for (var i=0;i<docs.length;i+=gallerySize)
  {
    galleryComponents.push(docs.slice(i,i+gallerySize));
  }
    res.render('layout', { title: 'Express',frontGalleries:galleryComponents });
});*/
