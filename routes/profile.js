const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");
const db = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

db.Profile.sync()
//Add a a profile
router.post(
  "/",
  auth,
  [
    check("firstName", "First name is required.").not().isEmpty(),
    check("lastName", "Last name is required.").not().isEmpty(),
    check("photo", "Photo is required.").not().isEmpty(),
    check("resume", "Please include a link to your resume or portfolio.")
      .not()
      .isEmpty(),
    check("profile", "Please enter a breif description about yourself.")
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
    const { firstName, lastName, resume, profile, skills, photo, public } = req.body;

    // Insert into the table
    db.Profile.create({
      firstName,
      lastName,
      resume,
      profile,
      skills,
      photo,
      public,
    })
      .then((profile) => {
        profile.setUser(req.user.id)
        res.json(profile);
      })
      .catch((error) => {
        console.log(error.errors[0].message);
      });
  }
);

//Get all profiles
router.get("/", async (req, res) => {
  db.Profile.findAll()
    .then((profiles) => {
      res.json(profiles);
    })
    .catch((error) => {
      console.log(error);
    });
});

//get current users profile
router.get("/me", auth, async (req, res) => {
  db.Profile.findOne({where: {UserId: req.user.id}})
    .then((profile) => {
      res.json(profile);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
