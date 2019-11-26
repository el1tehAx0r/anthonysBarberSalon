
var JumbotronGallery= require('../models/jumbotronGallery');
var mongoose=require('mongoose');
mongoose.connect('mongodb+srv://a:abcdefg@cluster0-jmip8.mongodb.net/anthonies?retryWrites=true',{useNewUrlParser:true});
var jumbotronGalleries= [new JumbotronGallery({
    link: "../public/img/jumbotronGalleries/seedJumbo.jpg",
    order:0,
 })];
 done=0;
 for (var i=0; i<jumbotronGalleries.length;i++){
   jumbotronGalleries[i].save(function(err,result)
 {
   done++;
   if (done==jumbotronGalleries.length){
     exit();
   }
 });
 }
 function exit(){
   mongoose.disconnect();
 }
