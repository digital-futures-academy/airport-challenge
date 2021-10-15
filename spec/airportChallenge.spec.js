const test = require('../test-framework');
const Airport = require('../src/Airport');
const Airplane = require('../src/Airplane');

test.it('1 - Check if airport can land plane', () => {

  let expectedOutput;
  let result;

  let heathrow = new Airport();
  let spitFire1 = new Airplane('spitFire1');
  heathrow.landPlane(spitFire1);


  expectedOutput = 'landed';
  result = spitFire1.status;
  test.assertEquals(expectedOutput, result);
});

test.it('2 - Check if airport planes array increases by one after landing a plane', () => {

  let expectedOutput;
  let result;

  let heathrow = new Airport();
  let boeing1 = new Airplane('boeing747-1');
  heathrow.landPlane(boeing1);

  expectedOutput = 1;
  result = heathrow.currentPlanes.length;
  test.assertEquals(expectedOutput, result);
});

test.it('3 - Check if airport adds specific plane to its array after landing plane', () => {

  let expectedOutput;
  let result;

  let heathrow = new Airport();
  let boeing1 = new Airplane('boeing747-1');
  heathrow.landPlane(boeing1);

  input = boeing1;
  expectedOutput = true;
  result = heathrow.currentPlanes.includes(input);
  console.log(result);
  test.assertEquals(expectedOutput, result);
});

test.it('4 - Check if airport capacity can be modified', () => {

  let expectedOutput;
  let result;
  let input;

  let heathrow = new Airport();

  input = 50;
  expectedOutput = 50;
  heathrow.capacity = input;
  result = heathrow.capacity;

  console.log(result);
  test.assertEquals(expectedOutput, result);
});

test.it('5 - Check if airport capacity is full when planes array equals capacity', () => {

  let expectedOutput;
  let result;

  let heathrow = new Airport(undefined, 50);
  heathrow.currentPlanes.length = 50;

  expectedOutput = true;
  result = heathrow.checkIfFull();
  console.log(result);
  test.assertEquals(expectedOutput, result);
});

test.it('6 - Check if airport plane array does not increase by 1 when airport is full', () => {

  let expectedOutput;
  let result;

  let heathrow = new Airport(undefined, 50);
  heathrow.currentPlanes.length = 50;
  let boeing1 = new Airplane('boeing747-1');
  heathrow.landPlane(boeing1);

  expectedOutput = 50;
  result = heathrow.currentPlanes.length
  console.log(result);
  test.assertEquals(expectedOutput, result);
});


test.it('7 - Check if airport plane array does increase by 1 when airport is NOT full', () => {

  let expectedOutput;
  let result;

  let heathrow = new Airport(undefined, 50);
  heathrow.currentPlanes.length = 49;
  let boeing1 = new Airplane('boeing747-1');
  heathrow.landPlane(boeing1);

  expectedOutput = 50;
  result = heathrow.currentPlanes.length
  console.log(result);
  test.assertEquals(expectedOutput, result);
});
