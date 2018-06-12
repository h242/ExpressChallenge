var express = require('express');
var router = express.Router();
var discosController= require('../controllers/discosController');

router.get('/', discosController.seleccion);

router.get('/:seleccionado', discosController.recorro)

module.exports = router;

