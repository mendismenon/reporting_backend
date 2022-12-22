// const express = require("express");
// const { userConnection } = require("../db/modals/users");

// const userRouter = new express.Router();

// userRouter.post("/users", async (req,res)=>{
//     const newTask = new userConnection(req.body);
//     try{
//       const resObj = await newTask.save();
//       res.status(200).send(resObj);
//     }catch(e){
//       res.status(400).send(e);
//     }
//   });

//   userRouter.post("/users/login", async (req,res)=>{
//     try{
//         const user = await userConnection.findbycredentials(req.body);
//     }
//     catch(e){

//     }
//   })

// module.exports = {userRouter};