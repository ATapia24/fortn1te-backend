const Sequelize = require("sequelize");

var DB = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABSAE_DIALECT,
    port: process.env.DATABASE_PORT
  }
);

DB.sync({
  logging: console.log
});

module.exports = DB;
