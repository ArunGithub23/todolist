const  Task  = require('../model/taskmodel');
const { param } = require('../routes/userroute');



const taskController={

async createtask(req,res){
    const {taskdescription,duedate,status}=req.body;
    console.log("body is ",req.body)

    const  task=await Task.create({
        "taskdescription":taskdescription,
        "duedate":duedate,
        "status":status,
    })

    res.status(200).json(task);
},

async updatetask(req,res){

    console.log("param is",req.param.id)

const {taskdescription,status,duedate}=req.body;
    // Change everyone without a last name to "Doe"
await Task.update({ taskdescription,status,duedate}, {
    where: {
        "id":"1",
    }
  });
},

async deletetask(req,res){
    await Task.destroy({
        where:{"status":"True"}
    })
    
},




}

module.exports=taskController;