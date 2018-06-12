var express = require("express");
var app     = express();
var path    = require("path");
var templateController = require('../controllers/templateController.js')


app.get('/', templateController.home);

