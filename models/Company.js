const Sequelize = require("sequelize");
const User = require('./User');
const db = require("../config/database");

const Company = db.define(
  "company",
  {
    name: {
      type: Sequelize.STRING,
    },
    photo: {
      type: Sequelize.STRING,
    },
    tags: {
      type: Sequelize.STRING(300),
    },
    email:{
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING(2000),
    },
    is_hiring: {
      type: Sequelize.BOOLEAN,
      default: false,
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

Company.belongsTo(User, { foreignKey: {allowNull: false, unique:true}});


module.exports = Company;

