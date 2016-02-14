/**
 * Created by andrew.larsen on 2/13/2016.
 */
var express = require('express');
var router = express.Router();
var issues = require('../service/issues.js');


router.get('/issues', issues.getAll);

module.exports = router;