const assert = require('assert');
const sum = require('../sketch');

describe('sketch', function(){
    it('add 1 + 2 equals 3', function(){
        assert.equal(sum(1, 2), 3);
    })
})