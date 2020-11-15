var assert = require('assert');
var fs = require('fs');

var chartGenerator = require('../src/chart_generator');

describe('Chart generator', function () {

    let filename = './chart.png';

    afterEach(function () {
        fs.unlink(filename, (err) => {
            if (err) throw err;
            console.log(`Deleted ${filename}`);
        });
    });

    it('should generate chart as image file', function (done) {
         chartGenerator.generateChart([1.5,1.52,1.63,1.74, 1.80, 1.88, 1.9, 1.95, 2.01, 2.12], filename, () => {
             console.log('Image created');
             done();
        });

    });
});