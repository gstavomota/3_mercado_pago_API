//import Sequelize from "sequelize";
//import	dbConfig from "./config/database";

const Sequelize = require("sequelize");
const dbConfig = require("./config/database");

const Pagamentos = require("../models/Pagamentos");

const connection = new Sequelize(dbConfig);

Pagamentos.init(connection);

module.exports = connection; 
  