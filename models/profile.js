'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profile.belongsTo(models.User)
      Profile.hasMany(models.Application)
    }
  };
  Profile.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    resume: DataTypes.STRING,
    profile: DataTypes.TEXT,
    skills: DataTypes.STRING,
    photo: DataTypes.STRING,
    public: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};