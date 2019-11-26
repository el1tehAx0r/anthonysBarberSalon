var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var schema = new Schema({
  type:{type:String, required:false},
    price:{type:String, required:false},

    link:{type:String,required:true},
    isFirst:{type:Number,required:true},
    section:{type:Number,required:true},
});
module.exports=mongoose.model('slideshow',schema);
