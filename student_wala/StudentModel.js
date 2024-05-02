const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
  Name: String,
  RollNo: String,
  WAD: Number,
  DSBDA: Number,
  CNS: Number,
  CC: Number,
  AI: Number,
});

module.exports = mongoose.model("Student", StudentSchema);
