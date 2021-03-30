const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Candidate = require("../models/Candidate");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

Candidate.sync();
//Add a gig
router.post("/", (req, res) => {
  let { first_name, last_name, resume, profile, skills, photo, public, userId } = req.body;
  const errors = [];
  // Insert into the table
  Candidate.create({
    first_name,
    last_name,
    resume,
    profile,
    skills,
    photo,
    public,
    userId
  })
    .then((candidate) => {
      res.json(candidate);
    })
    .catch((error) => {
      console.log(error.errors[0].message);
    });
});

module.exports = router;
