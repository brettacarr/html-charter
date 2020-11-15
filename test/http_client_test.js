var assert = require('assert');
var httpClient = require('../src/http_client');

describe('HTTP client', function () {

    it('should retrieve url content', function (done) {
         httpClient.getHttpContent("https://www.google.com", content => {
             assert.equal(content.includes("<html"), true);
             assert.equal(content.includes("</html>"), true);
             done();
         });

    })
});