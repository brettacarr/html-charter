// var fs = require('fs');
var assert = require('assert');
var htmlParser = require('../src/html_parser');

describe('Parse html', function () {
    // let htmlData = fs.readFileSync('./test/wikipedia_women_high_jump.html').toString();
    let tableData = `<table>
                    <tr>
                        <th>Text Column</th>
                        <th>Number Column</th>
                    </tr>
                    <tr>
                        <td>data1</td>
                        <td>1.75m</td>
                    </tr>
                    <tr>
                        <td>data2</td>
                        <td>1.92m</td>
                    </tr>
                    </table>`;
    let htmlData = `<html>
                    <body>
                        <h1>Table 1</h1>
                        ${tableData}
                        <h1>Table 2</h1>
                        ${tableData}
                    </body>
                    </html>`

    it('should retrieve first html table', function () {
        assert.equal(htmlParser.getFirstHtmlTable(htmlData), tableData);
    })

    it('should retrieve column values', function () {
        assert.deepEqual(htmlParser.getColumnData(tableData, 0), ['data1', 'data2']);
        assert.deepEqual(htmlParser.getColumnData(tableData, 1), ['1.75m', '1.92m']);
    });
});