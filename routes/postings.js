const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Posting = require("../models/Posting");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

Posting.sync();
//Add a a Posting
router.post("/", (req, res) => {
  let { title, description, tags, remote, active, salary_estimate, open_until, companyId, city } = req.body;
  const errors = [];

  // Insert into the table
  Posting.create({
    title,
    description,
    tags,
    remote,
    city,
    active,
    salary_estimate,
    open_until,
    companyId
  })
    .then((posting) => {
      res.json(posting);
    })
    .catch((error) => {
      res.json(error.errors)
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
