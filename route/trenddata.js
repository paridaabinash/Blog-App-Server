const express = require('express');
const trendController = require('../details/trendData');

const trendRouter = express.Router();
trendRouter.route("/trend").get(trendController.apiController);

module.exports = trendRouter;