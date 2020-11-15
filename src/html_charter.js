var httpClient = require('./http_client');
var htmlProcessor = require('./html_processor');
var chartGenerator = require('./chart_generator');

var chartPage = function (url) {
    httpClient.getHttpContent(url, processHtmlPage)
};

var processHtmlPage = function (pageData) {
    let columnData = htmlProcessor.getFirstNumericalData(pageData);
    let outputFilename = './chart_output.png';
    chartGenerator.generateChart(columnData, outputFilename, () => {console.log(`File saved to: ${outputFilename}`)})
}

module.exports = {chartPage}