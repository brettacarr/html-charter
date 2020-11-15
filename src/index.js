#!/usr/bin/env node

var htmlCharter = require('../src/html_charter');

var validateInput = function () {
    // console.log('Args[' +  process.argv[2] + ']');
    if (!process.argv[2]) {
        console.log('Usage: node . << https url >>')
        process.exit(1)
    }
}



validateInput();
htmlCharter.chartPage(process.argv[2]);