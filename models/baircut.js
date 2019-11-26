var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var schema = new Schema({
    type:{type:String,required:true},
    price:{type:Number,required:true},
    order1:{type:Number, required:true}
});
module.exports=mongoose.model('baircut',schema);
