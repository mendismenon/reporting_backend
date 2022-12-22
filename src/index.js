const express = require("express");
const { default: mongoose } = require("mongoose");
const { connectionObj } = require("./db/connections");
const { taskModal, taskConnection } = require("./db/modals/formdata");
const { formDataRouter } = require("./routers/formData");
const { taskRouter } = require("./routers/tasks");
const { userRouter } = require("./routers/users");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
//app.use(taskRouter);
//app.use(userRouter);

app.use(formDataRouter);





app.listen(port, () => {
  console.log("Server is up on port :: " + port);
});
