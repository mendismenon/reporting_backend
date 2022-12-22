const mongoose = require("mongoose");

const connectionObj = mongoose.connect("mongodb+srv://reporting:reporting@cluster0.u6nrmx5.mongodb.net/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
module.exports = { connectionObj };

