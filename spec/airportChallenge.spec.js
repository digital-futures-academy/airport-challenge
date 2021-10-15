const test = require('../test-framework');
const Airport = require('../src/Airport');
const Airplane = require('../src/Airplane');

test.it('Check if airport can land plane', () => {

  let expectedOutput;
  let result;

  let jfk = new Airport();
  let spitFire1 = new Airplane('spitFire1');
  jfk.landPlane(spitFire1)


  expectedOutput = 'landed';
  result = spitFire1.status
  test.assertEquals(expectedOutput, result);
})

// test.it('Check if airport planes array increases by one after landing a plane', () => {

//   let expectedOutput;
//   let result;

//   let jfk = new Airport();
//   let spitFire1 = new Airplane('spitFire1');
//   jfk.landPlane(spitFire1)


//   expectedOutput = 1;
//   result = jfk.currentPlanes.length;
//   test.assertEquals(expectedOutput, result);
// })