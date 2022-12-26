const express = require("express");
const { uploadFormConnection } = require("../db/modals/formdata");
const { createUser, fetchCallRecords } = require("../queries/formQuries");
const formDataRouter = new express.Router();

formDataRouter.post("/saveUser", createUser);
formDataRouter.get("/fetchCallRecords", fetchCallRecords);

module.exports = { formDataRouter };
