const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Application = require("../models/Application");
const Candidate = require("../models/Candidate");
const Posting = require("../models/Posting");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

Application.sync();
//Add a a user
router.post("/", async (req, res) => {
  let { message, postingId, candidateId } = req.body;
  const errors = [];
  
  const candidate = await Candidate.findByPk(candidateId)
  const posting = await Posting.findByPk(postingId)
  console.log(candidate)
  
  candidate.addApplication(Application, {through: {message: message}})
  posting.addApplication(Application, {through: {message: message}})
  // Insert into the table
//   Application.create({
//     message,
//     postingId,
//     candidateId
//   })
//     .then((application) => {
//       res.json(application);
//     })
//     .catch((error) => {
//       res.json(error.errors)
//     });
});


module.exports = router;