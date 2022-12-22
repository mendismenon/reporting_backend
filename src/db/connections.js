const mongoose = require("mongoose");

const connectionObj = mongoose.connect("mongodb+srv://reporting:reporting@cluster0.u6nrmx5.mongodb.net/reporting", {
  useNewUrlParser: true,
});
module.exports = { connectionObj };
