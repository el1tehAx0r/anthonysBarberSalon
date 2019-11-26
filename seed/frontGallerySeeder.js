var FrontGallery= require('../models/frontGallery');
var mongoose=require('mongoose');
mongoose.connect('mongodb+srv://a:abcdefg@cluster0-jmip8.mongodb.net/anthonies?retryWrites=true',{useNewUrlParser:true});
//mongoose.connect('mongodb://localhost:27017/anthonies',{useNewUrlParser:true});
var frontGallerys= [new FrontGallery({
category:"beards",
    link: "../public/img/anthonies5.jpg",
    title:"Fade",
 })
,];
 done=0;
 for (var i=0; i<frontGallerys.length;i++){
   frontGallerys[i].save(function(err,result)
 {
   done++;
   if (done==frontGallerys.length){
     exit();
   }
 });
 }
 function exit(){
   mongoose.disconnect();
 }
