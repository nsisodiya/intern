var add = require('../add');

var assert = require('assert');
describe('Add Test', function() {
  it('should add integer', function() {
    assert.equal(add(3, 4), 7);
  });
  it('should add strings too', function() {
    assert.equal(add('3', '4'), 7);
  });
});
