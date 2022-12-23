const express = require("express");
const { uploadFormConnection } = require("../db/modals/formdata");
const { createUser } = require("../queries/formQuries");
const formDataRouter = new express.Router();

formDataRouter.post("/tasks", async (req, res) => {
  const newTask = new uploadFormConnection(req.body);
  try {
    const resObj = await newTask.save();
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).send(resObj);
  } catch (e) {
    console.log(e);
    res.status(400).send({ data: e, object: resObj, newTask:newTask });
  }
});

formDataRouter.post("/saveUser", createUser);

module.exports = { formDataRouter };
