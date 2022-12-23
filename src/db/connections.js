// const mongoose = require("mongoose");

// const connectionObj = mongoose.connect("mongodb+srv://reporting:reporting@cluster0.u6nrmx5.mongodb.net/test", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// module.exports = { connectionObj };

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'reporting',
  host: 'dpg-cei7d1da499fabh7k22g-a.oregon-postgres.render.com',
  database: 'reporting_8u10',
  password: 'a8rcKuyf9FTYl8Q0bkFJcvtQSoA3bdUq',
  port: 5432,
  ssl: true
})

module.exports = { pool };