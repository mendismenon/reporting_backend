 const express = require("express");
 const { default: mongoose } = require("mongoose");
const { formDataRouter } = require("./src/routers/formData");
const { connectionObj } = require("./src/db/connections");
var cors = require('cors')
// const { taskModal, taskConnection } = require("./db/modals/formdata");
// const { formDataRouter } = require("./routers/formData");
// const { taskRouter } = require("./routers/tasks");
// const { userRouter } = require("./routers/users");

const app = express();

const port = process.env.PORT || 3500;

app.use(express.json());
app.use(cors());
//app.use(taskRouter);
//app.use(userRouter);

app.use(formDataRouter);





app.listen(port, () => {
  console.log("Server is up on port :: " + port);
});
