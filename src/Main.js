const Airport = require('./Airport');
const Plane = require('./Plane');
const Weather = require('./Weather');

function main() {

  gatwickAirport = new Airport('Gatwick', 5, 0, false);
  plane1 = new Plane('001');
  plane2 = new Plane('002');
  plane3 = new Plane('003');
  plane4 = new Plane('004');
  plane5 = new Plane('005');
  plane6 = new Plane('006');

  console.log('');
  console.log('Welcome to Control Your Air (TM).');
  console.log('The complete air traffic control system,');
  console.log('for comprehensive control!');
  console.log('');

  console.log('To manage your planes, type the plane ID, followed by the action you\'d like it to take');
  console.log('For example: "001 Land"');
}

main();
