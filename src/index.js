import Plane from "./plane.js";
import Airport from "./airport.js";
import weatherStatus from "./weatherStatus.js";

const airport1 = new Airport();
const plane1 = new Plane(1);
const plane2 = new Plane(2);
const plane3 = new Plane(3);
const plane4 = new Plane(4);
const plane5 = new Plane(5);

airport1.land(plane1);
airport1.land(plane2);

console.log(airport1.getPlanesList()); // Works as expected

const newCapacity = 1;
try {
    airport1.setCapacity(newCapacity);
} catch { Error } {
    console.log('An error occurred: ', 'This capacity is not valid. Airport capacity cannot be smaller than the number of landed planes in this airport.');
} // Works as expected


const newCapacity1 = 3;
airport1.setCapacity(newCapacity1);
console.log(airport1.getCapacity()); // Works as expected

airport1.land(plane3);
airport1.land(plane4);
console.log(airport1.getPlanesList()); // Works as expected

airport1.takeOff(plane2);
console.log(airport1.getPlanesList()); // Works as expected

airport1.setWeather('Bad');
try {
    airport1.land(plane2);
} catch { Error } {
    console.log('An error occurred: ', "You cannot land a plane when the weather is stormy.");
} // Works as expected
try {
    airport1.takeOff(plane1);
} catch { Error } {
    console.log('An error occurred: ', "You cannot take off a plane when the weather is stormy.");
} // Works as expected

try {
    airport1.takeOff(plane2);
} catch { Error } {
    console.log('An error occurred: ', "You cannot take off a plane that's not in the airport any longer");
}







