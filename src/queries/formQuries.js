const { pool } = require("../db/connections");

const createUser = (request, response) => {
  const {
    id,
    name_of_sales_manager,
    customer_name,
    customer_number,
    customer_requirement,
    requirement,
    callback_date,
    upload_date,
    remarks,
  } = request.body;

  pool.query(
    'INSERT INTO "UploadFormTb" (id, name_of_sales_manager, customer_name, customer_number, customer_requirement, requirement, callback_date, upload_date, remarks ) VALUES ($1, $2,$3, $4,$5, $6,$7, $8,$9) RETURNING *',
    [
      id,
      name_of_sales_manager,
      customer_name,
      customer_number,
      customer_requirement,
      requirement,
      callback_date,
      upload_date,
      remarks,
    ],
    (error, results) => {
      if (error) {
        console.log(error);
        response.status(403).send(`User added failed ${error}`);
        //throw error;
      }
      console.log(results);
      response.status(201).send({data:`User added with ID: ${results?.rows[0]?.id}`});
    }
  );
};

module.exports = { createUser };
