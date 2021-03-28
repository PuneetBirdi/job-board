const Sequelize = require('sequelize');
const db = require('../config/database');


const User = db.define(
  "user",
  {
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    user_type: {
      type: Sequelize.ENUM("company", "candidate"),
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
    },
    updated_at: {
      type: Sequelize.DATE,
    },
  },
  {
    timestamps: true,
    underscored: true,
  }
);

module.exports = User;