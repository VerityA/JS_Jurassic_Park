const assert = require('assert');
const Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function() {

  let dinosaur;

  beforeEach(function() {
    dinosaur = new Dinosaur('Tyrannosaurus-Rex', 1);
  });

  it('has a type', function() {
    const type = dinosaur.type;
    assert.strictEqual('Tyrannosaurus-Rex', type);
  });

  it('has an offspring per year', function() {
    const offspring = dinosaur.offspring;
    assert.strictEqual(1, offspring);
  });

});
