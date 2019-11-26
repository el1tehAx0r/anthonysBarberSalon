var express = require('express');
var router = express.Router();
var JumbotronGallery=require("../models/jumbotronGallery");
var FrontGallery=require("../models/frontGallery");
var Employee=require("../models/employee");
var Haircut=require("../models/haircut");
var Baircut=require("../models/baircut");
var Product=require("../models/product");
var Beard=require("../models/beard");
var Slideshow=require("../models/slideshow");
const upload = require('../uploadMiddleware');
const Resize = require('../Resize');
var path = require('path');
/* GET home page. */
router.get('/logout',isLoggedIn,function(req,res,next)
{
  req.logout();
  res.redirect('/');
});

/*
router.get('/', function(req, res, next) {

  JumbotronGallery.find(function(err,docs){
    var jumbotronGalleryChunks=[];
    var jumbotronGalleryChunkSize=1;
    console.log(docs.slice(0,1)+"poo");
    for (var i=0; i<docs.length; i+=jumbotronGalleryChunkSize)
    {
     jumbotronGalleryChunks.push(docs.slice(i,i+jumbotronGalleryChunkSize));
    }
      res.render('index',{title:'Express', jumbotronGalleries:jumbotronGalleryChunks});
  });});*/


router.get('/',function(req,res,next){
    var jumboStuff=[];
    var firstJumbo=[];
    var frontStuff=[];
    var hairCutStuff=[];
var slideShowStuff=[];
  var bairCutStuff=[];
    var beardStuff=[];
    var productStuff=[];
    var employeeStuff=[];
    var scheduleStuff=[];
    var jumbotronCount;


Slideshow.find(function(err,docs){
    var slideShowChunks=[];
    var slideShowChunkSize=1;
    console.log(docs.slice(0,1)+"poo");
    for (var i=0; i<docs.length; i+=slideShowChunkSize)
    {
      slideShowStuff[i]=docs.slice(i,i+slideShowChunkSize);
     //frontGalleryChunks.push(docs.slice(i,i+frontGalleryChunkSize));
    }
  });

Baircut.find(function(err,docs){
    var baircutChunks=[];
    var baircutChunkSize=1;
    console.log(docs.slice(0,1)+"poo");
    for (var i=0; i<docs.length; i+=baircutChunkSize)
    {
      bairCutStuff[i]=docs.slice(i,i+baircutChunkSize);
     //frontGalleryChunks.push(docs.slice(i,i+frontGalleryChunkSize));
    }
  });

Haircut.find(function(err,docs){
    var haircutChunks=[];
    var haircutChunkSize=1;
    console.log(docs.slice(0,1)+"poo");
    for (var i=0; i<docs.length; i+=haircutChunkSize)
    {
      hairCutStuff[i]=docs.slice(i,i+haircutChunkSize);
     //frontGalleryChunks.push(docs.slice(i,i+frontGalleryChunkSize));
    }
  });

Beard.find(function(err,docs){
    var beardChunks=[];
    var beardChunkSize=1;
    console.log(docs.slice(0,1)+"poo");
    for (var i=0; i<docs.length; i+=beardChunkSize)
    {
      beardStuff[i]=docs.slice(i,i+beardChunkSize);
     //frontGalleryChunks.push(docs.slice(i,i+frontGalleryChunkSize));
    }
  });

Product.find(function(err,docs){
    var productChunks=[];
    var productChunkSize=2;
    console.log(docs.slice(0,1)+"poo");
    for (var i=0; i<docs.length; i+=productChunkSize)
    {
      productStuff[i]=docs.slice(i,i+productChunkSize);
     //frontGalleryChunks.push(docs.slice(i,i+frontGalleryChunkSize));
    }
  });
Employee.find(function(err,docs){
    var employeeChunks=[];
    var employeeChunkSize=1;
    console.log(docs.slice(0,1)+"poo");
    for (var i=0; i<docs.length; i+=employeeChunkSize)
    {
      employeeStuff[i]=docs.slice(i,i+employeeChunkSize);
     //frontGalleryChunks.push(docs.slice(i,i+frontGalleryChunkSize));
    }
    console.log(employeeStuff +" bluesldjf");
      res.render('index',{title:'Express',slideShowStuff:slideShowStuff,bairCutStuff:bairCutStuff,hairCutStuff:hairCutStuff,beardStuff:beardStuff,productStuff:productStuff,jumbotronCount:jumbotronCount,frontGalleries:frontStuff,jumbotronGalleries:jumboStuff,firstJumbo:firstJumbo,employeeStuff:employeeStuff});
  });
});

router.use('/',isLoggedIn,function(req,res,next)
{
   next();
  });

router.post('/post', upload.single('image'), async function (req, res) {
console.log(__dirname);
  var lee=path.join(__dirname);
  console.log(lee);
  const imagePath = path.join('./public/img');
 const fileUpload = new Resize(imagePath);
  if (!req.file) {
    res.status(401).json({error: 'Please provide an image'});
  }
  const filename = await fileUpload.save(req.file.buffer);
//  return res.status(200).json({ name: filename });
 return res.redirect('/');
 res.redirect('/');
});

router.get('/indexModyfier',function(req,res,next){
  res.render('indexModyfier',{title:'Express'});
});

router.get('/admin/signin',function(req,res,next){
  res.render('admin/signin',{title:'Express'});
});
module.exports = router;
function isLoggedIn(req,res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect('/');
}

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
