const Airport = require("./Airport");

const airport1 = new Airport();
const airport2 = new Airport();

airport1.addItem(`new in airport 1`);
airport1.addItem(`2nd new in airport1`);
airport2.addItem(`new in airport 2`);

console.log(airport1.airportPlanes);
console.log(airport2.airportPlanes);
