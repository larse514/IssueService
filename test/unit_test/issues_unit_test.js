/**
 * Created by andrew.larsen on 2/13/2016.
 */
//users service tests
var test = require('unit.js');
var IssueService = require('../../service/issues.js');
var aggregation = 0;
var totalTests = 1;
//set dummy req/res objects TODO FIND AN ACTUAL MOCKING FRAMEWORK
var req = {};
//mock up the res object's json method
var res = {json : function(data){
    res.test = JSON.stringify(data)
}};
console.log("why")

//first test getAll
console.log(IssueService)
IssueService.getAll(req, res, function(){
    test.assert(res.test !== '' && res.test !== null && res.test !== '[]')
    aggregation++;
    console.log(aggregation + " passed out of " + totalTests);
});