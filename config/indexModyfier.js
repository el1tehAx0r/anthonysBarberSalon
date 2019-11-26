var express = require('express');
var router = express.Router();
var FrontGallery=require("../models/frontGallery");

/* GET home page. */
router.get('/', function(req, res, next) {

  FrontGallery.find(function(err,docs){
    var frontGalleryChunks=[];
    var frontGalleryChunkSize=2;
    console.log(docs.slice(0,1)+"poo");
    for (var i=0; i<docs.length; i+=frontGalleryChunkSize)
    {
     frontGalleryChunks.push(docs.slice(i,i+frontGalleryChunkSize));
    }
      res.render('index',{title:'Express',frontGalleries:frontGalleryChunks});
  });});
router.get('/admin/signin',function(req,res,next){
  res.render('admin/signin',{title:'Express'});
});
/*FrontGallery.find(function(err,docs){
 var galleryComponents=[];
  var gallerySize=2;
  for (var i=0;i<docs.length;i+=gallerySize)
  {
    galleryComponents.push(docs.slice(i,i+gallerySize));
  }
    res.render('layout', { title: 'Express',frontGalleries:galleryComponents });
});*/



module.exports = router;
