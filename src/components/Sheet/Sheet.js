import React, { PropTypes } from 'react';

// Example Two
var exampleTwo = {};
exampleTwo.initialData = {
    rows: [
        ['Name', 'Hole 1', 'Hole 2', 'Hole 3', 'Hole 4', 'Hole 5', 'Hole 6', 'Hole 7', 'Hole 8', 'Hole 9', 'Total'],
        ['', '', '', '', '', '', '', '', '', '','' ]
    ]
};

exampleTwo.cellClasses = {
    rows: [
        ['', '', '', '', '', '', '', ''],
        ['green', '', '', '', '', '', '', 'dollar'],
    ]
};

exampleTwo.config = {
    rows: 5,
    columns: 5,
    headColumn: true,
    headColumnIsString: true,
    headRow: true,
    headRowIsString: true,
    canAddRow: false,
    canAddColumn: false,
    emptyValueSymbol: '-',
    letterNumberHeads: false
};

var Dispatcher = require('../../../node_modules/react-spreadsheet-component/lib/dispatcher.js');

Dispatcher.subscribe('dataChanged', function (data) {
    // data: The entire new data state
    console.log(data);
    var row1 = data.rows[1];
    var sum = 0;
    for (var i = 1; i<10; i++) {
        sum += Number(data.rows[1][i]);
    }
    console.log(row1);
    //var sum = row1.reduce((a, b) => (Number(a)>0?Number(a):0) + (Number(b)>0?Number(b):0), 0);

    data.rows[1][10] = sum;
    console.log(sum);
}, 'mainSheet');