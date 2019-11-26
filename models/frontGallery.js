var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var schema = new Schema({
    category:{type:String,required:true},
    link:{type:String,required:true},
    title:{type:String,required:true}
});
module.exports=mongoose.model('frontgallery',schema);
