var json2xls = require('../lib/json2xls');
var data = require('../spec/arrayData.json');
var fs = require('fs');

// Single Sheet
var xls = json2xls(data, {});
fs.writeFileSync('output.xlsx', xls, 'binary');

// Multi Sheet
var interviewData = require('../spec/interview.json');
var interviewXls = json2xls(interviewData, {});
fs.writeFileSync('interview.xlsx', interviewXls, 'binary');