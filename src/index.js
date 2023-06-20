
import Plane from './Plane.js';
import Airport from './Airport.js';
import Weather from './Weather.js';

let airport, plane1, plane2, plane3, weather, currentWeather;


console.log('\n1. Make an airport with name LHR, with no initial planes and report:');
airport = new Airport('LHR');
console.log(airport.getLandedPlanes());

console.log('\n2. Make an airport with id LHR, land a plane with id G-XLEE and a status of departed in the airport and report:');
airport = new Airport('LHR');
plane1 = new Plane('G-XLEE', 'departed');
airport.landPlane(plane1);
console.log(`Number of planes in the airport: ${airport.landedPlanes.length}; The airport id for the plane ${plane1.aircraftId} is ${airport.airportId}.`);

console.log('\n3. Make an airport with id LHR, land a plane with id G-XLEE and a status of landed in the airport and report:');
airport = new Airport('LHR');
plane1 = new Plane('G-XLEE', 'landed');
try {
  airport.landPlane(plane1);
} catch (error) {
  console.log(error.message);
}

console.log('\n4. Make an airport with id OTP, land three planes in the airport and report:');
airport = new Airport('OTP');
plane1 = new Plane('G-XLEE', 'departed');
plane2 = new Plane('YR-ATC', 'departed');
plane3 = new Plane('YR-LCB', 'departed');
airport.landPlane(plane1);
airport.landPlane(plane2);
airport.landPlane(plane3);
console.log(`${airport.landedPlanes.length} planes have landed at the ${airport.airportId} airport.`);


console.log('\n5. Check if airport is at maximum capacity.');
airport = new Airport('LHR');
plane1 = new Plane('G-XLEE', 'departed');
plane2 = new Plane('YR-ATC', 'departed');
airport.landPlane(plane1);
console.log(`At the moment, maximum airport capacity is ${airport.maxAirportCapacity} and there are ${airport.landedPlanes.length} planes at the airport. Is airport full?`, airport.isAirportFull());
airport.overrideAirportCapacityBy(-9);
console.log(`We override maximum airport capacity to be ${airport.maxAirportCapacity}.`);
console.log(`At the moment, maximum airport capacity is ${airport.maxAirportCapacity} and there are ${airport.landedPlanes.length} planes at the airport. Is airport full?`, airport.isAirportFull());


console.log('\n6. Prevent landing when airport is full.');
airport = new Airport('LHR');
plane1 = new Plane('G-XLEE', 'departed');
plane2 = new Plane('YR-ATC', 'departed');
airport.overrideAirportCapacityBy(-9);
airport.landPlane(plane1);
airport.landPlane(plane2);
console.log(`Is ${plane2.aircraftId} at the airport? ${airport.isAirportFull()? `No, the airport is full so ${plane2.aircraftId} did not land` : `Yes, the airport is not full so ${plane2.aircraftId} landed`}.`);

console.log('\n7. Make an airport with name LHR, land a plane with id G-XLEE if weather is clear and report');
airport = new Airport('LHR');
plane1 = new Plane('G-XLEE', 'departed');
weather = new Weather();
currentWeather = weather.getCurrentWeather();
console.log(`At present the weather is ${currentWeather}, therefore plane ${plane1.aircraftId} ${currentWeather === 'clear' ? 'can land' : 'cannot land'}`);
try {
  airport.landPlane(plane1, currentWeather);
} catch (error) {
  console.log(error.message);
}

console.log('\n8. Plane takes off if weather is clear');
airport = new Airport('LHR');
plane1 = new Plane('G-XLEE', 'departed');
plane2 = new Plane('YR-ATC', 'departed');
airport.landPlane(plane1);
airport.landPlane(plane2);
weather = new Weather();
currentWeather = weather.getCurrentWeather();
console.log(`At present the weather is ${currentWeather}, therefore plane ${plane1.aircraftId} ${currentWeather === 'clear' ? 'can take off' : 'cannot take off'}`);
airport.planeTakeOff('YR-ATC', currentWeather);

console.log('\n9. Plane takes off if weather is clear');
airport = new Airport('LHR');
plane1 = new Plane('G-XLEE', 'departed');
plane2 = new Plane('YR-ATC', 'departed');
airport.landPlane(plane1);
airport.landPlane(plane2);
weather = new Weather();
currentWeather = weather.getCurrentWeather();
console.log(`At present the weather is ${currentWeather}, therefore plane ${plane1.aircraftId} ${currentWeather === 'clear' ? 'can take off' : 'cannot take off'}`);
try {
  airport.planeTakeOff('YR-ATC', currentWeather);
} catch (error) {
  console.log(error.message);
}