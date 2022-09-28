const express = require('express');
const techController = require('../details/techData');

const techRouter = express.Router();

techRouter.route("/tech").get(techController.apiController);



module.exports = techRouter;