const Airport = require(`./Airport`);

const airport1 = new Airport('Spaceport', ['Voyager', 'Enterprise'], 5);
console.log(airport1.getPlanesInPort());
console.log(airport1.getMaxCapacity());
console.log(airport1.getPlaneNum());
airport1.landNewPlane('Millenium Falcon');
console.log(airport1.getPlanesInPort());
console.log(airport1.getPlaneNum());
console.log(airport1.isAirportFull());