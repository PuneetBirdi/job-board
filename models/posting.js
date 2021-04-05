'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Posting.belongsTo(models.Company)
      Posting.hasMany(models.Application)
    }
  };
  Posting.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    tags: DataTypes.STRING,
    remote: DataTypes.BOOLEAN,
    city: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    salaryEstimate: DataTypes.INTEGER,
    openUntil: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Posting',
  });
  return Posting;
};