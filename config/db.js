const Sequelize = require("sequelize");
const sequelize = new Sequelize("database", "username", "password", {
  // sqlite! now!
  dialect: "sqlite",

  // the storage engine for sqlite
  // - default ':memory:'
  storage: "./database.sqlite3",
});

module.exports = sequelize;
