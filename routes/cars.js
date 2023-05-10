var express = require('express');
var router = express.Router();


const carsController = require('../controller/cars.controller')

router.get('/cars', carsController.getCars);

module.exports = router;
