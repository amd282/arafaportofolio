/*Name: Ahmed Saeed
Student No: 301180773*/

let mongoose = require("mongoose");

// create a model class
let bookModel = mongoose.Schema(
  {
    name: String,
    number: Number,
    email: String
  },
  {
    collection: "contacts",
  }
);

module.exports = mongoose.model("Contacts", bookModel);
