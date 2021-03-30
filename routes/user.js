const express = require("express");
const router = express.Router();
const db = require("../config/database");
const User = require("../models/User");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

User.sync()
//Add a a user
router.post("/", (req, res) => {
    let { email, password, user_type } = req.body;
    const errors = [];

    //Validate fields
    if (!email) {
        errors.push({ text: "Please add an email." });
    }
    if (!password) {
        errors.push({ text: "Please add a password." });
    }
    if (!user_type) {
        errors.push({ text: "Please specify account type." });
    }
    // Insert into the table
    User.create({
        email,
        password,
        user_type
    }).then((user)=>{
    res.json(user)
    })
    .catch((error) =>{
        console.log(error.errors[0].message)
    });
  }
);

//Get all users
router.get("/", async (req, res) =>{
    console.log('test')

    User.findAll({ raw: true})
    .then((users) =>{
        res.json(users)
    }).catch((error) =>{
        console.log(error)
    })
})

//Get one user
router.get("/:email", async (req, res) =>{
    const { email } = req.body

    User.findAll({ 
        raw: true,
        where:{
            email: email
        }
     })
    .then((users) =>{
        res.json(users)
    }).catch((error) =>{
        console.log(error)
    })
})

module.exports = router;
