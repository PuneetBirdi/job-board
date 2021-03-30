const Sequelize = require("sequelize");
const User = require('./User');
const db = require("../config/database");

const Candidate = db.define(
  "candidate",
  {
    first_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    last_name: {
      type: Sequelize.STRING,
      allowNull: false
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
      default: true,
      allowNull: false
    },
  },
  {
    timestamps: true,
    underscored: true
  }
);

Candidate.belongsTo(User, { foreignKey: { allowNull: false, unique: true } });


module.exports = Candidate;