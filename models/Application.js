const Sequelize = require("sequelize");
const Candidate = require("./Candidate");
const Posting = require("./Posting");
const db = require("../config/database");

const Application = db.define(
  "application",
  {
    message:{
        type: Sequelize.STRING(3000)
    },
  },
  {
    timestamps: true,
    underscored: true,
  }
);

Candidate.belongsToMany(
  Posting, 
  { through: Application },
  { foreignKey: { allowNull: false } }
  )
Posting.belongsToMany(
  Candidate,
  { through: Application },
  { foreignKey: { allowNull: false } }
);

module.exports = Candidate;
