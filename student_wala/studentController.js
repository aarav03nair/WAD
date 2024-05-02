const express = require("express");
const student = require("./StudentModel");

const addStudent = async (req, res) => {
  try {
    const data = await student.create({ ...req.body });
    res.status(200).json({
      message: "succesful",
      data: data,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "nahi hi=u",
      err: err,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const data = await student.find();
    res.status(200).json({
      message: "succesful",
      data: data,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "nahi hi=u",
      err: err,
    });
  }
};

const dsbdagt25 = async (req, res) => {
  try {
    const data = await student.find({ DSBDA: { $gt: 25 } });
    res.status(200).json({
      message: "succesful",
      data: data,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "nahi hi=u",
      err: err,
    });
  }
};

const updateMarks = async (req, res) => {
  try {
    const name = req.body.name;
    const data = await student.updateOne({ Name: name }, { $inc: 10 });
    res.status(200).json({
      message: "succesful",
      data: data,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "nahi hi=u",
      err: err,
    });
  }
};

const getmarksgt20mathscience = async (req, res) => {
  try {
    const data = await student.find({
      $or: [{ DSBDA: { $gt: 20 } }, { AIL: { $gt: 20 } }],
    });
    res.status(200).json({
      message: "succesful",
      data: data,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "nahi hui",
      err: err,
    });
  }
};

module.exports = {
  dsbdagt25,
  getmarksgt20mathscience,
  updateMarks,
  getAll,
  addStudent,
};
