var htmlParser = require('./html_parser');


var getFirstNumericalData = function (data) {
    let tableData = htmlParser.getFirstHtmlTable(data);
    // TODO iterate columns to find first numerical
    return htmlParser.getColumnData(tableData, 0).map(value => {
        return parseFloat(value.match("[0-9]+.[0-9]+").toString());
    });
};
module.exports = {getFirstNumericalData}