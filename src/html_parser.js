var HTMLParser = require('node-html-parser');


var getFirstHtmlTable = function (data) {
    const root = HTMLParser.parse(data);
    return root.querySelector("table").toString();
}

var hasTableDataElements = function (row) {
    return row.querySelectorAll("td").length > 0;
}

var getColumnData = function (tableData, columnIndex) {
    const table = HTMLParser.parse(tableData);
    const rows = table.querySelectorAll("tr");
    let columnData = [];
    for (let row of rows) {
        if (!hasTableDataElements(row)) {
            continue;
        }
        columnData.push(row.querySelectorAll("td")[columnIndex].rawText);
    }

    return columnData;
}

module.exports = {getFirstHtmlTable, getColumnData}