//import Sequelize from "sequelize";
//import	dbConfig from "./config/database";

const Sequelize = require("sequelize");
const dbConfig = require("./config/database");

const connection = new Sequelize(dbConfig);

module.exports = connection; 
  