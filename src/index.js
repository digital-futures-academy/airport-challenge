const Airport = require(`./Airport`);

const airport1 = new Airport('Spaceport', ['Voyager', 'Enterprise'], 5);
console.log(airport1.getPlanesInPort());
console.log(airport1.getMaxCapacity());
console.log(airport1.getPlaneNum());
airport1.landNewPlane('Millenium Falcon');
console.log(airport1.getPlanesInPort());
console.log(airport1.getPlaneNum());
console.log(airport1.isAirportFull());

const airport2 = new Airport('Seaport', ['Narwhal'], 1);
console.log(airport2.getPlanesInPort());
airport2.landNewPlane('Kraken');
console.log(airport2.getPlanesInPort());