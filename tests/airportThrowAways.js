const Airport = require("../src/airport");



const airport1 = new Airport();
airport1.landPlane(null)
airport1.landPlane('notnull');
airport1.landPlane(true);
console.log(airport1.planesArray);

item = [];
console.log(item[0]);
console.log(item[0] === null);



