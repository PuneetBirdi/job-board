const Sequelize = require("sequelize");
const Company = require("./Company");
const db = require("../config/database");

const Posting = db.define(
  "posting",
  {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    tags: {
      type: Sequelize.STRING(500),
      allowNull: false
    },
    remote: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      default: false
    },
    city: {
      type: Sequelize.STRING,
    },
    active: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      default: true,
    },
    salary_estimate:{
        type: Sequelize.INTEGER,
        allowNull: true
    },
    open_until:{
        type: Sequelize.DATE,
        allowNull: false
    }
  },
  {
    timestamps: true,
    underscored: true
  }
);

Posting.belongsTo(Company, {foreignKey: {allowNull: false}});

module.exports = Posting;
