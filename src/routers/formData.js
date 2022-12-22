const express = require("express");
const { uploadFormConnection } = require("../db/modals/formdata");
const formDataRouter = new express.Router();

formDataRouter.post("/tasks", async (req, res) => {
  const newTask = new uploadFormConnection(req.body);
  try {
    const resObj = await newTask.save();
    res.status(200).send(resObj);
  } catch (e) {
    console.log(e);
    res.status(400).send({ data: e, object: resObj, newTask:newTask });
  }
});

module.exports = { formDataRouter };
