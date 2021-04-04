'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Profiles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      resume: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      profile: {
        allowNull: false,
        type: Sequelize.TEXT(1000),
      },
      skills: {
        allowNull: true,
        type: Sequelize.STRING(400),
      },
      photo: {
        allowNull: true,
        type: Sequelize.STRING(300),
      },
      public: {
        default: true,
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Profiles');
  }
};