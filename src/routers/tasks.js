const express = require("express");
const { taskConnection } = require("../db/modals/formdata");

const taskRouter = new express.Router();

taskRouter.get("/tasktest",(req,res)=>{
    res.send("New Api Check");
});
taskRouter.post("/tasks", async (req,res)=>{
    const newTask = new taskConnection(req.body);
    try{
      const resObj = await newTask.save();
      res.status(200).send(resObj);
    }catch(e){
      res.status(400).send(e);
    }
  })
  
  taskRouter.get("/tasks",(req,res)=>{
      taskConnection.find().then(result=>{
          res.send(result);
      }).catch(err=>{
          res.status(500).send(err);
      })
  })
  
  taskRouter.get("/tasks/:id",(req,res)=>{
      taskConnection.findById(req.params.id).then(result=>{
          console.log(result);
          res.send(result);
      }).catch(err=>{
          res.status(500).send(err);
      })
  })
module.exports = {taskRouter};