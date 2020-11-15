var ImageCharts = require('image-charts');

var generateChart = function (data, outputFilename, callback) {

    ImageCharts()
        .cht('bvg') // vertical bar chart
        .chs('800x600')
        .chd(`a:${data.join(',')}`)
        .toFile(outputFilename)
        .then(callback)

    }

module.exports = {generateChart}