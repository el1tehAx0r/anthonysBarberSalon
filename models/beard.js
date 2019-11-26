var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var schema = new Schema({
    type:{type:String,required:true},
    price:{type:Number,required:true},
    order:{type:Number, required:true}
});
module.exports=mongoose.model('beard',schema);
