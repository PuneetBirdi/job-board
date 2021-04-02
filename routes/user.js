const express = require("express");
const router = express.Router();
const db = require('../models')
const Sequelize = require("sequelize");
const Op = Sequelize.Op;


//Add a a user
router.post("/", (req, res) => {
    let { email, password, userType } = req.body; 
    const errors = [];

    //Validate fields
    if (!email) {
        errors.push({ text: "Please add an email." });
    }
    if (!password) {
        errors.push({ text: "Please add a password." });
    }
    if (!userType) {
        errors.push({ text: "Please specify account type." });
    }
    // Insert into the table
    db.User.create({
        email,
        password,
        userType
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
