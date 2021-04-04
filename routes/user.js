const express = require("express");
const router = express.Router();
const db = require("../models");
const Sequelize = require("sequelize");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Op = Sequelize.Op;

//Add a a user
router.post(
  "/",
  [
    check("email", "Email is required.").not().isEmpty().isEmail(),
    check("password", "Password is required.").not().isEmpty(),
    check("userType", "User type must be selected.").not().isEmpty(),
  ],
  async (req, res) => {
    // if there's an errors return from validation, return 400 code and the errors array
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //destructure the body
    let { email, password, userType } = req.body;

    //Check if the user already exists and if so return an error
    const existingUser = await db.User.findOne({where: {email: email}})
    console.log(existingUser)
    if(existingUser){
        return res.status(400).json({ message: 'This email is already in use.' });
    }

    //hash the password
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);

    // Insert into the table
    db.User.create({
      email,
      password,
      userType,
    })
      .then((response) => {
        //return json webtoken
        const payload = {
            user: {
            id: response.userId,
            email: response.email,
            userType: response.userType,
            },
        };

      jwt.sign(
        payload,
        "jwtSecret",
        { expiresIn: 36000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
      })
      .catch((error) => {
        console.log(error.errors[0].message);
      });
  }
);


module.exports = router;
