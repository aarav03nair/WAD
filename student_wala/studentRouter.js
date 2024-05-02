const express = require("express");
const router = express.Router();
const {
  dsbdagt25,
  getmarksgt20mathscience,
  updateMarks,
  getAll,
  addStudent,
} = require("./studentController");

router.get("/", getAll);
router.get("/dsbdagt20", dsbdagt25);
router.get("/marksgtmathscience", getmarksgt20mathscience);
router.post("/add", addStudent);
router.put("/update", updateMarks);

module.exports = router;
