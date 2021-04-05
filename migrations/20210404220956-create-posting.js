'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Postings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      tags: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      remote: {
        allowNull: false,
        default: false,
        type: Sequelize.BOOLEAN,
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      active: {
        allowNull: false,
        default: true,
        type: Sequelize.BOOLEAN,
      },
      salaryEstimate: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      openUntil: {
        allowNull: false,
        type: Sequelize.DATE,
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
    await queryInterface.dropTable('Postings');
  }
};