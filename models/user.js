const DB = require("../config/database");
const Sequelize = require("sequelize");

const User = DB.define("user", {
  uid: Sequelize.STRING,
  fortniteUsername: Sequelize.STRING,
  displayName: Sequelize.STRING
});

module.exports = User;
