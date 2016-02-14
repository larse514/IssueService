/**
 * Created by andrew.larsen on 2/13/2016.
 */
var Issue = require('../../model/issue.js');
var test = require('unit.js');
var aggregation = 0;
var totalTests = 1;

new Issue().findAll(function(issues){
    test.assert(issues.length >0)
    aggregation++;
    console.log(aggregation + " passed out of " + totalTests);
});