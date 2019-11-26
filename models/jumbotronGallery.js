var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var schema = new Schema({
    link:{type:String,required:true},
    order:{type:Number, required:true}
});
module.exports=mongoose.model('jumbotrongallery',schema);
