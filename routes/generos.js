var express = require('express');
var router = express.Router();
var generosController= reuire('../controllers/generosController')


router.get('/', generosController.genre) 

module.exports= router;