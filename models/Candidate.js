const Sequelize = require("sequelize");
const User = require('./User');
const db = require("../config/database");

Candidate.sync();
const Candidate = db.define(
  "candidate",
  {
    first_name: {
      type: Sequelize.STRING,
    },
    last_name: {
      type: Sequelize.STRING,
    },
    resume: {
      type: Sequelize.STRING,
    },
    profile: {
      type: Sequelize.STRING(600),
    },
    skills: {
      type: Sequelize.STRING(300),
    },
    photo: {
      type: Sequelize.STRING,
    },
    public: {
      type: Sequelize.BOOLEAN,
      default: false,
    },
  },
  {
    timestamps: true,
    underscored: true
  }
);

Candidate.belongsTo(User);


module.exports = Candidate;