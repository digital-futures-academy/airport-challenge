const airport = require("./airport");

const item1 = { id: `plane1` };
const item2 = { id: `plane2` };

airport.landPlane(item1);
airport.landPlane(item2);

console.log(airport.listOfPlanes);