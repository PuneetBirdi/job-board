const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Company = require("../models/Company");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

Company.sync();
//Add a a company
router.post("/", (req, res) => {
  let { name, photo, tags, description, is_hiring, email, user_id } = req.body;
  const errors = [];

  console.log(user_id)
  //Validate fields
  if (!name) {
    errors.push({ text: "Please add a name." });
  }
  if (!photo) {
    errors.push({ text: "Please add a photo." });
  }
  if (!tags) {
    errors.push({ text: "Please specify tags." });
  }
  if (!description) {
    errors.push({ text: "Please add a description." });
  }
  if (!email) {
    errors.push({ text: "Please add an email." });
  }
  if (!user_id) {
    errors.push({ text: "Please add user id." });
  }
  // Insert into the table
  Company.create({
    name,
    photo,
    tags,
    email,
    is_hiring,
    userId: user_id,
    description
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
