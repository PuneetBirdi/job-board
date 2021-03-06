const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const db = require("../models");
const Sequelize = require("sequelize");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Op = Sequelize.Op;


//@router      GET api/auth
//@desc        Get logged in user
//@access      Public
router.get('/', auth, async (req, res) => {
  try {
    const user = await db.User.findByPk(7);
    const response = {
        email: user.email,
        userType: user.userType,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
    }
    res.json(response)
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route    POST api/auth
//@desc     Auth user & get token
//@access   Public
router.post(
  '/',
  [
    check('email', 'Please include a valid email.').isEmail(),
    check('password', 'Password is required.').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ Errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await db.User.findOne({ where: { email: email } });

      //----------If user does not exist in database return 400 error
      if (!user) {
        return res.status(400).json({ msg: "Invalid Credentials" });
      }

      //----------If hashed password does not exist in database return 400 error
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid Credentials" });
      }

      //----------If the user exists and password matches, send payload which includes JWT token.
      //return json webtoken
      const payload = {
        user: {
          id: user.id,
          email: user.email,
          userType: user.userType,
        },
      };

      jwt.sign(payload, "jwtSecret", { expiresIn: 36000 }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;