const Airport = require(`./Airport`);
const Plane = require(`./Plane`);

const Voyager = new Plane('Voyager');
const Enterprise = new Plane('Enterprise');
const Milano = new Plane('Milano');

const airport1 = new Airport([Voyager, Enterprise], 5);
console.log(airport1.getMaxCapacity());
console.log(airport1.getPlaneNum());
airport1.landNewPlane(Milano);
console.log(airport1.getPlaneNum());
console.log(airport1.isAirportFull());

const airport2 = new Airport([Voyager], 1);
airport2.landNewPlane(Enterprise);

const airport3 = new Airport([Voyager, Milano], 7);
console.log(airport3.hangar);
airport3.departPlane(Milano);
console.log(airport3.hangar);
airport3.departPlane(Enterprise);

const airport4 = new Airport([Voyager]);
airport4.landNewPlane(Voyager);
console.log(airport4.hangar);


