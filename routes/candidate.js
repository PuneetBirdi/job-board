const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Candidate = require("../models/Candidate");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

Candidate.sync();
//Add a gig
router.post("/", (req, res) => {
  let { email, password, user_type } = req.body;
  const errors = [];
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

module.exports = router;
