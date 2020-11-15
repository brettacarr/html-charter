var fs = require('fs');
var assert = require('assert');
var htmlProcessor = require('../src/html_processor');

describe('Process html', function () {
    let htmlData = fs.readFileSync('./test/wikipedia_women_high_jump.html').toString();
    let expectedValues = [1.46, 1.485, 1.485, 1.524, 1.552, 1.58, 1.58, 1.595, 1.605, 1.62, 1.65, 1.65, 1.66, 1.66,
        1.66, 1.71, 1.72, 1.73, 1.74, 1.75, 1.76, 1.76, 1.77, 1.78, 1.8, 1.81, 1.82, 1.83, 1.84, 1.85, 1.86, 1.87,
        1.88, 1.90, 1.91, 1.92, 1.92, 1.94, 1.94, 1.95, 1.96, 1.96, 1.97, 1.97, 2.00, 2.01, 2.01, 2.02, 2.03, 2.03,
        2.04, 2.05, 2.07, 2.07, 2.08, 2.09]
    it('should retrieve first column of numerical data', function () {
        assert.deepEqual(htmlProcessor.getFirstNumericalData(htmlData), expectedValues);
    })
});