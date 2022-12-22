const { connectionObj } = require("./db/connections");
const { taskModal, taskConnection } = require("./db/modals/tasks");
const mongoose = require("mongoose");

//const taskConnection = mongoose.model(taskModal.name, taskModal.data);

const tasksData = new taskConnection(
  {
    Description: "Had Lunch                ",
  }
);

tasksData.save()
.then((result) => {
  console.log(tasksData);
})
.catch((error) => {
  console.log("Error :: " + error);
});
