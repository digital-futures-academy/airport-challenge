const test = require('../test-framework');
const Airport = require('../src/Airport');
const Airplane = require('../src/Airplane');
const Weather = require('../src/Weather');
test.it('1 - Check if airport can set plane status to landed', () => {

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
  let input;

  let heathrow = new Airport();
  let boeing1 = new Airplane('boeing747-1');
  heathrow.landPlane(boeing1);

  input = boeing1;
  expectedOutput = true;
  result = heathrow.currentPlanes.includes(input);
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

  test.assertEquals(expectedOutput, result);
});

test.it('5 - Check if airport capacity is full when airport planes array length equals capacity', () => {

  let expectedOutput;
  let result;

  let heathrow = new Airport(undefined, 50);
  heathrow.currentPlanes.length = 50;

  expectedOutput = true;
  result = heathrow.checkIfFull();
  test.assertEquals(expectedOutput, result);
});

test.it('6 - Check if airport plane array does not increase when airport is full  and airport tries to land plane', () => {

  let expectedOutput;
  let result;

  let heathrow = new Airport(undefined, 50);
  heathrow.currentPlanes.length = 50;
  let boeing1 = new Airplane('boeing747-1');
  heathrow.landPlane(boeing1);

  expectedOutput = 50;
  result = heathrow.currentPlanes.length;
  test.assertEquals(expectedOutput, result);
});


test.it('7 - Check if airport plane array does increase by 1 when airport is NOT full and airport tries to land plane', () => {

  let expectedOutput;
  let result;

  let heathrow = new Airport(undefined, 50);
  let boeing1 = new Airplane('boeing747-1');
  heathrow.currentPlanes.length = 49;
  heathrow.landPlane(boeing1);

  expectedOutput = 50;
  result = heathrow.currentPlanes.length;
  test.assertEquals(expectedOutput, result);
});


test.it('8 - Check if airport plane array decreases by 1 when airport takes off plane', () => {

  let expectedOutput;
  let result;

  let heathrow = new Airport([], 50);
  let boeing1 = new Airplane('boeing747-1');
  let boeing2 = new Airplane('boeing747-2');
  let boeing3 = new Airplane('boeing747-3');
  heathrow.landPlane(boeing1);
  heathrow.landPlane(boeing2);
  heathrow.landPlane(boeing3);

  heathrow.setTakeOff(boeing2);


  expectedOutput = 2;
  result = heathrow.currentPlanes.length;
  test.assertEquals(expectedOutput, result);
});

test.it('9 - Check if airport removes specific plane from plane array when airport takes off plane', () => {

  let expectedOutput;
  let result;

  let heathrow = new Airport([], 50);
  let boeing1 = new Airplane('boeing747-1');
  let boeing2 = new Airplane('boeing747-2');
  let boeing3 = new Airplane('boeing747-3');
  heathrow.landPlane(boeing1);
  heathrow.landPlane(boeing2);
  heathrow.landPlane(boeing3);

  heathrow.setTakeOff(boeing2);


  expectedOutput = false;
  result = heathrow.currentPlanes.includes(boeing2);
  test.assertEquals(expectedOutput, result);
});

test.it('10 - Check if airplane status is set to flying when airport takes off plane', () => {

  let expectedOutput;
  let result;

  let heathrow = new Airport([], 50);
  let boeing1 = new Airplane('boeing747-1');
  let boeing2 = new Airplane('boeing747-2');
  let boeing3 = new Airplane('boeing747-3');
  heathrow.landPlane(boeing1);
  heathrow.landPlane(boeing2);
  heathrow.landPlane(boeing3);

  heathrow.setTakeOff(boeing2);


  expectedOutput = 'flying';
  result = boeing2.status
  test.assertEquals(expectedOutput, result);
});


test.it('10 - Check if airplane status is set to flying when airport takes off plane', () => {

  let expectedOutput;
  let result;

  let heathrow = new Airport([], 50);
  let boeing1 = new Airplane('boeing747-1');
  let boeing2 = new Airplane('boeing747-2');
  let boeing3 = new Airplane('boeing747-3');
  heathrow.landPlane(boeing1);
  heathrow.landPlane(boeing2);
  heathrow.landPlane(boeing3);

  heathrow.setTakeOff(boeing2);


  expectedOutput = 'flying';
  result = boeing2.status
  test.assertEquals(expectedOutput, result);
});

test.it('11 - Check if airplane array does not decrease if plane that is not in airport is set to take off by airport', () => {

  let expectedOutput;
  let result;

  let heathrow = new Airport([], 50);
  let boeing1 = new Airplane('boeing747-1');
  let boeing2 = new Airplane('boeing747-2');
  let boeing3 = new Airplane('boeing747-3');
  let boeing4 = new Airplane('boeing747-4');

  heathrow.landPlane(boeing1);
  heathrow.landPlane(boeing2);
  heathrow.landPlane(boeing3);

  heathrow.setTakeOff(boeing4);


  expectedOutput = 3;
  result = heathrow.currentPlanes.length = 3
  test.assertEquals(expectedOutput, result);
});

test.it('12 - Check if airplane array does not increase if plane that is already in airport is set to land', () => {

  let expectedOutput;
  let result;

  let heathrow = new Airport([], 50);
  let boeing1 = new Airplane('boeing747-1');
  let boeing2 = new Airplane('boeing747-2');
  let boeing3 = new Airplane('boeing747-3');
  let boeing4 = new Airplane('boeing747-4');

  heathrow.landPlane(boeing1);
  heathrow.landPlane(boeing2);
  heathrow.landPlane(boeing3);
  heathrow.landPlane(boeing4);

  heathrow.landPlane(boeing2);

  expectedOutput = 4;
  result = heathrow.currentPlanes.length
  test.assertEquals(expectedOutput, result);
});


test.it('13 - With 2 airports, if plane that is in airport-1 is set to take off by airport-2, airport-1s array length is not changed', () => {

  let expectedOutput;
  let result;

  let heathrow = new Airport([], 50);
  let jfk = new Airport([], 40);
  let boeing1 = new Airplane('boeing747-1');
  let boeing2 = new Airplane('boeing747-2');
  let airbus1 = new Airplane('airbus-1');
  let airbus2 = new Airplane('airbus-2');

  heathrow.landPlane(boeing1);
  heathrow.landPlane(boeing2);
  jfk.landPlane(airbus1);
  jfk.landPlane(airbus2);

  heathrow.setTakeOff(airbus1);

  expectedOutput = 2;
  result = jfk.currentPlanes.length
  test.assertEquals(expectedOutput, result);
});


test.it('14 - With 2 airports, if plane that is in airport-1 is set to take off by airport-2, airport-2s array length is not changed', () => {

  let expectedOutput;
  let result;

  let heathrow = new Airport([], 50);
  let jfk = new Airport([], 40);
  let boeing1 = new Airplane('boeing747-1');
  let boeing2 = new Airplane('boeing747-2');
  let airbus1 = new Airplane('airbus-1');
  let airbus2 = new Airplane('airbus-2');

  heathrow.landPlane(boeing1);
  heathrow.landPlane(boeing2);
  jfk.landPlane(airbus1);
  jfk.landPlane(airbus2);

  heathrow.setTakeOff(airbus1);

  expectedOutput = 2;
  result = heathrow.currentPlanes.length
  test.assertEquals(expectedOutput, result);
});

test.it('15 - With 2 airports, if plane that is in airport-1 is set to land by airport-2, airport-1s array length is not changed', () => {

  let expectedOutput;
  let result;

  let heathrow = new Airport([], 50);
  let jfk = new Airport([], 40);
  let boeing1 = new Airplane('boeing747-1');
  let boeing2 = new Airplane('boeing747-2');
  let airbus1 = new Airplane('airbus-1');
  let airbus2 = new Airplane('airbus-2');

  heathrow.landPlane(boeing1);
  heathrow.landPlane(boeing2);
  jfk.landPlane(airbus1);
  jfk.landPlane(airbus2);

  heathrow.landPlane(airbus1);

  expectedOutput = 2;
  result = jfk.currentPlanes.length
  test.assertEquals(expectedOutput, result);
});

test.it('16 - With 2 airports, if plane that is in airport-1 is set to land by airport-2, airport-2s array length is not changed', () => {

  let expectedOutput;
  let result;

  let heathrow = new Airport([], 50);
  let jfk = new Airport([], 40);
  let boeing1 = new Airplane('boeing747-1');
  let boeing2 = new Airplane('boeing747-2');
  let airbus1 = new Airplane('airbus-1');
  let airbus2 = new Airplane('airbus-2');

  heathrow.landPlane(boeing1);
  heathrow.landPlane(boeing2);
  jfk.landPlane(airbus1);
  jfk.landPlane(airbus2);

  heathrow.landPlane(airbus1);

  expectedOutput = 2;
  result = heathrow.currentPlanes.length
  console.log(heathrow);
  test.assertEquals(expectedOutput, result);
});

test.it('17 - Weather class has weather status property', () => {
  let expectedOutput;
  let result;
  expectedOutput = 'sunny';
  result = Weather.status;
  console.log(result);
  test.assertEquals(expectedOutput, result);
});

test.it('18 - If stormy, airport plane array does not change if attempting to land a plane', () => {
  let expectedOutput;
  let result;

  let heathrow = new Airport([], 50);
  Weather.status = 'sunny';
  let airbus1 = new Airplane('airbus-1');
  heathrow.landPlane(airbus1, Weather.status);

  let boeing1 = new Airplane('boeing747-1');
  Weather.status = 'stormy'
  heathrow.landPlane(boeing1, Weather.status);

  expectedOutput = 1;
  result = heathrow.currentPlanes.length;

  test.assertEquals(expectedOutput, result);

});

test.it('19 - If weather is stormy, length of airport airplane array does not decrease if plane is set to take off', () => {
  let expectedOutput;
  let result;

  let heathrow = new Airport([], 50);
  let boeing1 = new Airplane('boeing747-1');
  let boeing2 = new Airplane('boeing747-2');
  heathrow.landPlane(boeing1);
  heathrow.landPlane(boeing2);

  Weather.status = 'stormy';
  heathrow.setTakeOff(boeing1, Weather.status);

  expectedOutput = 2;
  result = heathrow.currentPlanes.length;
  console.log();
  test.assertEquals(expectedOutput, result);
});

test.it('20 - Weather setStatus function is returning stormy roughly 30% of the time', () => {
  let expectedOutput;
  let result;

  function stormyCounter() { // counter to test random function is working as expected
    let counter = 0;
    for (let i = 0; i < 10000; i++) {
      if (Weather.setStatus() === 'stormy') {
        counter++
      }
    }
    return counter
  }

  expectedOutput = true;
  result = false;
  let counter = stormyCounter();
  console.log(counter);
  if (counter >= 2900 && counter <= 3100) {
    result = true;
  }
  test.assertEquals(expectedOutput, result);
});

