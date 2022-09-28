const express = require('express');
const fitnessController = require('../details/fitnessData');

const fitnessRouter = express.Router();

fitnessRouter.route("/fitness").get(fitnessController.apiController);


module.exports = fitnessRouter;



