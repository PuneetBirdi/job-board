const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");
const db = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

db.Company.sync();
//Add a a company
router.post(
  "/",
  auth,
  [
    check("name", "Name is required.").not().isEmpty(),
    check("email", "Email is required.").not().isEmpty(),
    check("photo", "Photo is required.").not().isEmpty(),
    check("tags", "Please include some tags to describe your company.")
      .not()
      .isEmpty(),
    check("description", "Please enter a breif description for your company.")
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
    const { name, email, photo, tags, description } = req.body

    // Insert into the table
    db.Company.create({
      name,
      photo,
      tags,
      email,
      isHiring: true,
      UserId: req.user.id,
      description,
    })
      .then((company) => {
        res.json(company);
      })
      .catch((error) => {
        console.log(error.errors[0].message);
      });
  }
);

//Get all companies
router.get("/", async (req, res) => {
  db.Company.findAll()
    .then((companies) => {
      res.json(companies);
    })
    .catch((error) => {
      console.log(error);
    });
});

//get current users profile
router.get("/me", auth, async (req, res) => {
  db.Company.findOne({where: {UserId: req.user.id}})
    .then((company) => {
      res.json(company);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
