
var SlideShow= require('../models/slideshow');
var mongoose=require('mongoose');
mongoose.connect('mongodb+srv://a:abcdefg@cluster0-jmip8.mongodb.net/anthonies?retryWrites=true',{useNewUrlParser:true});
var product= [new SlideShow({
    link: "Boo",
    isFirst:1,
 })];
 done=0;
 for (var i=0; i<product.length;i++){
   product[i].save(function(err,result)
 {
   done++;
   if (done==product.length){
     exit();
   }
 });
 }
 function exit(){
   mongoose.disconnect();
 }
