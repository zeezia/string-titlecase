'use strict';

var expect = require('chai').expect;
var titlecase = require('../index');

describe('#titlecase', function() {
    it('should convert to titlecase properly', function() {
        var testString = 'shouLd converT to TITle CasE';
        var expectedOutput = 'Should Convert To Title Case';
        var result = titlecase(testString);
        expect(result).to.equal(expectedOutput);
    });
    it('should return null for non-string input values', function() {
        var testString = 1234;
        var expectedOutput = null;
        var result = titlecase(testString);
        expect(result).to.equal(expectedOutput);
    });
});