//import express from "express"
//import morgan from "morgan"
//import router from "./routes/index.js"

const express = require("express");
const morgan = require("morgan")
const router = require("./routes/index.js");

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(router)
app.listen(3000)

console.log("Rodando servidor na porta", 3000)