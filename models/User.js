const Sequelize = require('sequelize');
const db = require('../config/database');


const User = db.define("user", {
  email: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  user_type:{
    type: Sequelize.ENUM('company', 'candidate')
  },
},{
  timestamps: true
});

module.exports = User;