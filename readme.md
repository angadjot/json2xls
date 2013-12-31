json2xls
========

[![Build Status](https://travis-ci.org/rikkertkoppes/json2xls.png?branch=master)](https://travis-ci.org/rikkertkoppes/json2xls)

utility to convert json to a excel file, based on [Node-Excel-Export](https://github.com/functionscope/Node-Excel-Export)

Installation
------------

    npm install json2xls

Usage
------

Use to save as file:

    var json2xls = require('json2xls');
    var json = {
        foo: 'bar',
        qux: 'moo',
        poo: 123,
        stux: new Date()
    }

    var xls = json2xls(json);

    fs.writeFileSync('data.xlsx',xls,'binary');

Or use as express middleware. It adds a convenience `xls` method to the response object to immediately output an excel as download.

    app.use(json2xls.middleware);

    app.get('/',function(res) {
        res.xls('data.xlsx',json);
    });