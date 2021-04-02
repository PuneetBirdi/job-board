const express = require("express");
const router = express.Router();
const db = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

//Add a a company
router.post("/", (req, res) => {
  let { name, photo, tags, description, isHiring, email, userId } = req.body;
  const errors = [];
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
  if (!userId) {
    errors.push({ text: "Please add user id." });
  }
  // Insert into the table
  db.Company.create({
    name,
    photo,
    tags,
    email,
    isHiring,
    userId,
    description
  })
    .then((company) => {
      res.json(company);
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
