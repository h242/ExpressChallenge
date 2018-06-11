var express = require('express');
var router = express.Router();


var imgEscuchados = [{src:"images/britpop.jpg"},
                     {src:"images/electropop.jpg"},
                     {src:"images/psychedelicRock.png"},
                     {src:"images/electronic.jpg"}]

/* GET home page. */

router.get('/', function(req, res, next) {

  res.render('index', { title: 'Bienvenido a PISK!', title2: 'Los más elegidos', generosMasEscuchados: imgEscuchados});
});

module.exports = router;



