
var Employee= require('../models/employee');
var mongoose=require('mongoose');
mongoose.connect('mongodb+srv://a:abcdefg@cluster0-jmip8.mongodb.net/anthonies?retryWrites=true',{useNewUrlParser:true});
var employee= [new Employee({
    name: "Anthony",
    jobTitle:"Owner",
    link:"abc",
    instaLink:"abc",
    faceBookLink:"abc",
    twitterLink:"abc",
 })];
 done=0;
 for (var i=0; i<employee.length;i++){
   employee[i].save(function(err,result)
 {
   done++;
   if (done==employee.length){
     exit();
   }
 });
 }
 function exit(){
   mongoose.disconnect();
 }
