const test = require('../test-framework');

test.it('Check if airport planes array increases by one after landing a plane', () => {

  let expectedOutput;
  let result;

  let luton = new Airport();
  let spitFire1 = new Airplane('spitFire1');
  luton.landPlane(spitFire1)


  expectedOutput = 1;
  result = luton.currentPlanes.length;
  test.assertEquals(expectedOutput, result);
})