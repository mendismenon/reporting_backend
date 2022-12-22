const { connectionObj } = require("../src/db/connections");
const { taskConnection } = require("../src/db/modals/tasks");

//6322d41533ef6bd292a6f81f

taskConnection.findByIdAndUpdate("6322d41533ef6bd292a6f81f", {
  "Completed": true,
}).then(task=>{
    console.log(task);
    return taskConnection.countDocuments({Completed: true});
}).then(count=>{
    console.log(count);
}).catch(err=>{

});


taskConnection.deleteOne({
    _id: "6322d41533ef6bd292a6f81f"
}).then(res=>{
    console.log(res);
    return taskConnection.countDocuments({Completed: true})
}).then(resp=>{
    console.log(resp);
}).catch(err=>{
    console.log(err);
})
