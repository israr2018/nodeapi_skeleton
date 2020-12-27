const express=require('express');
const mongoose=require('mongoose');
const app=express();
const apiErrorHanlder=require('./error/api-error-handler');
const UserRouter=require('./routes/user')
const FeedbackRouter=require('./routes/feedback')
app.use(express.json());
// app.use('/cms',cmsRouter);
app.use('/user',UserRouter);
app.use('/feedback',FeedbackRouter);
app.use(apiErrorHanlder);
var db=mongoose.connect("mongodb://localhost:27017/plastk").then(()=>{
    console.log("Successfully connected to the database.")
    },(error)=>{
    console.log(`Could not connect to database something goes wrong:${error}`);
    });
app.listen(8000,()=>{console.log("server is running on portq 8000")})