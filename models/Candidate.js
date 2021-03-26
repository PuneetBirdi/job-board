const Sequelize = require("sequelize");
const User = require("./User");
const db = require("../config/database");

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
      type: Sequelize.STRING(600),
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
  }
);

Candidate.belongsTo(User);
