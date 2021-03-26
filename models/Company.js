const Sequelize = require("sequelize");
const User = require('./User');
const db = require("../config/database");

const Company = db.define("company", {
  name: {
    type: Sequelize.STRING,
  },
  photo: {
    type: Sequelize.STRING,
  },
  tags:{
      type: Sequelize.STRING(500)
  },
  description:{
      type: Sequelize.STRING(2000)
  },
  is_hiring:{
      type: Sequelize.BOOLEAN,
      default: false
  }
},{
    timestamps: true
});

Company.belongsTo(User);