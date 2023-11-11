const express=require('express')
const bodyParser=require('body-parser')
const cors =require('cors')
const {body }=require('express-validator')
const bcrypt=require('bcrypt')
const userroute=require('./routes/userroute')
const taskroute=require('./routes/taskroute')



const app=express();

app.use(cors())

//parse request
app.use(bodyParser.urlencoded({
    extended: false
  }));                                      
  app.use(bodyParser.json())

  
app.use('/api/user',userroute);
app.use("/api/task",taskroute);

app.get("/",(req,res)=>{
    res.send("hello")
});

app.listen(4000,function(err){
if(err){
    console.log("error while listening",err)
}
})