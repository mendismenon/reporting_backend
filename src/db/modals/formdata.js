const mongoose = require("mongoose");
const formDataModal = {
  name: "Tasks",
  entity: {
    id: {
      type: String,
      required: true,
      trim: true,
    },
    name_of_sales_manager: {
      type: String,
      required: true,
      trim: true,
    },
    customer_name: {
      type: String,
      required: true,
      trim: true,
    },
    customer_number: {
      type: String,
      required: true,
      trim: true,
    },
    customer_requirement: {
      type: String,
      required: true,
      trim: true,
    },
    requirement: {
      type: String,
      required: true,
      trim: true,
    },
    callback_date: {
      type: String,
      required: true,
      trim: true,
    },
    upload_date: {
      type: String,
      required: true,
      trim: true,
    },
    remarks: {
      type: String,
      required: true,
      trim: true,
    },
  },
};

const uploadFormConnection = mongoose.model(formDataModal.name, formDataModal.entity);

module.exports = { uploadFormConnection };
