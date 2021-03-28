const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Company = require("../models/Company");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

Company.sync();
//Add a a company
router.post("/", (req, res) => {
  let { email, password, user_type } = req.body;
  const errors = [];

  //Validate fields
  if (!email) {
    errors.push({ text: "Please add an email." });
  }
  if (!password) {
    errors.push({ text: "Please add a password." });
  }
  if (!user_type) {
    errors.push({ text: "Please specify account type." });
  }
  // Insert into the table
  User.create({
    email,
    password,
    user_type,
  })
    .then(() => {
      res.json({
        msg: "Operation complete.",
      });
    })
    .catch((error) => {
      console.log(error.errors[0].message);
    });
});

//Get all companies
router.get("/", async (req, res) => {

  Company.findAll({ raw: true })
    .then((companies) => {
      res.json(companies);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
