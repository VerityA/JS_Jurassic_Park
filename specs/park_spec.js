const assert = require('assert');
const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur;

  beforeEach( function() {
    park = new Park('Jurassic Park');
    dinosaur1 = new Dinosaur('Tyrannosaurus-Rex', 1);
    dinosaur2 = new Dinosaur('Tyrannosaurus-Rex', 2);
    dinosaur3 = new Dinosaur('Triceratops', 3);
  })

  it('should have a name', function() {
    const name = park.name;
    assert.strictEqual('Jurassic Park', name);
  })

  it('should start empty', function() {
    assert.deepStrictEqual([], park.enclosure);
  })

  it('should be able to add dinosaur', function() {
    park.addDinosaur(dinosaur1);
    const enclosure = park.enclosure;
    assert.deepStrictEqual([dinosaur1], enclosure);
  })

  it('should be able to count all dinosaurs of type X', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur2);
    const tRex = park.countDinosaursByType('Tyrannosaurus-Rex');
    assert.strictEqual(3, tRex);
    const triTops = park.countDinosaursByType('Triceratops');
    assert.strictEqual(1, triTops);
  })

  it('should be able to remove all dinosaurs of type X', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur2);
    park.removeDinosaursByType('Tyrannosaurus-Rex');
    const enclosure = park.enclosure;
    assert.deepStrictEqual([dinosaur3], enclosure);
  })

  it('should be able to get all dinosaurs with offspring higher than X', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur3);
    const dinos = park.dinosWithOffSpringHigherThanX(2);
    assert.deepStrictEqual([dinosaur3, dinosaur3], dinos);
  })

  it('should be able to count all dinosaurs with offspring = X', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur3);
    const dinos = park.countDinosWithOffSpringOfX(2);
    assert.deepStrictEqual(1, dinos);
  })

  it('should be able to calculate number of dinosaurs after year one, starting with 1 dinosaur', function(){
    park.addDinosaur(dinosaur3);
    const dinos = park.noOfDinosAfterNoOYears(1);
    assert.strictEqual(4, dinos);
  })

  it('should be able to calculate number of dinosaurs after year two, starting with 1 dinosaur', function(){
    park.addDinosaur(dinosaur3);
    const dinos = park.noOfDinosAfterNoOYears(2);
    assert.strictEqual(16, dinos);
  })

  it('should be able to calculate number of dinosaurs after year two, starting with 2 dinosaurs', function(){
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur2);
    const dinos = park.noOfDinosAfterNoOYears(2);
    assert.strictEqual(25, dinos);
  })

  it('should be able to calculate number of dinosaurs after year three, starting with 3 dinosaurs', function(){
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur1);
    const dinos = park.noOfDinosAfterNoOYears(3);
    assert.strictEqual(99, dinos);
  })

})
