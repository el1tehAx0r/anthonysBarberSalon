var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var schema = new Schema({
    name:{type:String,required:true},
    jobTitle:{type:String,required:true},
    link:{type:String,required:true},
    instaLink:{type:String,required:true},
    faceBookLink:{type:String,required:true},
    twitterLink:{type:String,required:true},
    galleryType:{type:Number,required:true}
});
module.exports=mongoose.model('employee',schema);
