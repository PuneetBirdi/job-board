const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");
const db = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;


db.Posting.sync();
//Add a a posting
router.post(
  "/",
  auth,
  [
    check("title", "Title is required.").not().isEmpty(),
    check("description", "Description is required.").not().isEmpty(),
    check("tags", "Tags are required.").not().isEmpty(),
    check("remote", "Please indicate whether this position is remote.")
      .not()
      .isEmpty(),
    check("city", "Please specify the city this position is based in.")
      .not()
      .isEmpty(),
  ],
  async (req, res) => {
    // if there's an errors return from validation, return 400 code and the errors array
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //destructure the body
    const {
        title,
        description,
        tags,
        remote,
        city,
        active,
        salaryEstimate,
        openUntil,
    } = req.body;

    //get the company ID for the user making this posting.
    const company = await db.Company.findOne({ 
        raw: true,
        where:{ UserId: req.user.id } })
    console.log(company)

    // Insert into the table
    db.Posting.create({
      title,
      description,
      tags,
      remote,
      city,
      active,
      salaryEstimate,
      openUntil,
    })
      .then((posting) => {
        posting.setCompany(company.id);
        res.json(posting);
      })
      .catch((error) => {
        res.error(error)
      });
  }
);


//Get all postings
router.get("/", async (req, res) => {
  db.Posting.findAll({
    attributes:['title', 'tags', 'remote', 'createdAt'],
    where: { active: true },
    include: [{
      model: db.Company,
      attributes: ['name', 'photo'],
      as: 'company'
    }]
  })
    .then((postings) => {
      res.json(postings);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;