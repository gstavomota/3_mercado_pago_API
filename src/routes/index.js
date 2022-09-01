//import {Router} from "express"
//import { criarOrdem } from "../controllers/mercaControllers.js"
//import { notificacaoOrdem } from "../controllers/mercaControllers.js"

const express = require("express");
const criarOrdem = require("../controllers/mercaControllers.js");
const notificacaoOrdem = require("../controllers/mercaControllers.js");

const router = express.Router()

router.post('/criar-ordem', criarOrdem)
router.post('/notificacao', notificacaoOrdem)

module.exports = router;
//export default