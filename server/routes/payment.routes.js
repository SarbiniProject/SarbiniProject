const express = require("express");
const Router = express.Router();
const { intent,success } = require('../controllers/paymentcontroller');

Router.post("/pay", intent);
Router.post("/success/:userId",success)

module.exports = Router;