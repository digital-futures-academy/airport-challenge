const Airport = require("./Airport.js");

const airport1 = new Airport();
const airport2 = new Airport();

airport1.landPlane(`new in airport 1`);
airport1.landPlane(`2nd new in airport 1`);
airport2.landPlane(`new in airport 2`);

console.log(airport1.airportPlanes);
console.log(airport2.airportPlanes);