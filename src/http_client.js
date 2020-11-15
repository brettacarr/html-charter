var https = require('https');

var getHttpContent = function (url, callback) {

    let request = https.request(url, response => {
        let rawData = '';
        response.on('data', part => { rawData += part; });
        response.on('end', () => {
            callback(rawData.toString())
        });
    });
    request.end();
};
module.exports = {getHttpContent}