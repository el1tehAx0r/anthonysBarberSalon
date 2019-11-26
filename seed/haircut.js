
var Haircut= require('../models/haircut');
var mongoose=require('mongoose');
mongoose.connect('mongodb+srv://a:abcdefg@cluster0-jmip8.mongodb.net/anthonies?retryWrites=true',{useNewUrlParser:true});
var product= [new Haircut({
    type: "Boo",
    order:1,
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
