var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var schema = new Schema({
    address:{type:String,required:true},
phone:{type:String,required:true},
email:{type:String,required:true},
monThruFri:
{type:String,required:true},
weekends:
{type:String,required:true},
specialHours:
{type:String,required:true},
instaLink:
{type:String,required:true},
fbLink:
{type:String,required:true},
twitterLink:
{type:String,required:true},
});
module.exports=mongoose.model('contact',schema);
