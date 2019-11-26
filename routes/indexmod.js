var express = require('express');
var router = express.Router();
var JumbotronGallery=require("../models/jumbotronGallery");
var Employee= require("../models/employee");
var FrontGallery=require("../models/frontGallery");
const upload = require('../uploadMiddleware');
const Resize = require('../Resize');
var path = require('path');
/* GET home page. */

router.get('/',function(req,res,next){
    var jumboStuff=[];
    var frontStuff=[];
    var hairCutstuff=[];
    var beardStuff=[];
    var productStuff=[];
    var employeeStuff=[];
    var scheduleStuff=[];


    JumbotronGallery.find(function(err,docs){
    var jumbotronGalleryChunks=[];
    var jumbotronGalleryChunkSize=1;
    console.log(docs.slice(0,1)+"poo");
    for (var i=0; i<docs.length; i+=jumbotronGalleryChunkSize)
    {
     //jumbotronGalleryChunks.push(docs.slice(i,i+jumbotronGalleryChunkSize));
     jumbostuff[i]=docs.slice(i,i+jumbotronGalleryChunkSize);
    }
//      res.render('index',{title:'Express', jumbotronGalleries:jumbotronGalleryChunks});
  });
  FrontGallery.find(function(err,docs){
    var frontGalleryChunks=[];
    var frontGalleryChunkSize=2;
    console.log(docs.slice(0,1)+"poo");
    for (var i=0; i<docs.length; i+=frontGalleryChunkSize)
    {
      frontStuff[i]=docs.slice(i,i+frontGalleryChunkSize);
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
      res.render('indexModyfier1',{title:'Express',frontGalleries:frontStuff,jumbotronGalleries:jumboStuff,employees:employeeStuff});
  });
});

module.exports = router;

/*FrontGallery.find(function(err,docs){
 var galleryComponents=[];
  var gallerySize=2;
  for (var i=0;i<docs.length;i+=gallerySize)
  {
    galleryComponents.push(docs.slice(i,i+gallerySize));
  }
    res.render('layout', { title: 'Express',frontGalleries:galleryComponents });
});*/
