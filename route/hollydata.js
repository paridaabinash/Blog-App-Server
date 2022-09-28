const express = require('express');
const hollyController = require('../details/hollywoodData');

const hollyRouter = express.Router();

hollyRouter.route("/holly").get(hollyController.apiController);

module.exports = hollyRouter;