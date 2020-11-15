var assert = require('assert');
var htmlCharter = require('../src/html_charter');

describe('HTML charter', function () {

    it('should chart and save a html page', function () {
        htmlCharter.chartPage("https://en.wikipedia.org/wiki/Women%27s_high_jump_world_record_progression");
    })
});