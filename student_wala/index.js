const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const router = require("./studentRouter");
const app = express();

mongoose
  .connect("mongodb+srv://aarav:BjxwFwobyRHdtEVs@cluster0.7gmszdg.mongodb.net/")
  .then(() => {
    console.log("mongo connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());

const port = 8000;
app.use("/student", router);

app.listen(port, () => {
  console.log("conected to port 8000");
});
