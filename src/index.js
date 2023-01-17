const Airport = require("./Airport");
const Plane = require("./Plane");

const port = new Airport();

console.log(`Planes at airport initially: ${port.planeList.length}`);

const plane1 = new Plane();
port.land(plane1);
console.log(`Planes at airport after trying to land the plane with the id ${plane1.id}: ${port.planeList.length}`);  // can't add unidentified planes

const plane2 = new Plane(2);
port.land(plane2);
console.log(`Planes at airport after trying to land the plane with the id ${plane2.id}: ${port.planeList.length}`);

port.land(plane2);  // shouldn't be able to land this plane again
console.log(`Planes at airport after trying to re-land the plane with the id ${plane2.id}: ${port.planeList.length}`);

const plane3 = new Plane(3);
const plane4 = new Plane(4);

port.land(plane3);

console.log(`Planes at airport after trying to land the plane with the id ${plane3.id}: ${port.planeList.length}`);

port.takeOff(plane4);

console.log(`Planes at airport after trying to remove the plane with the id ${plane4.id}: ${port.planeList.length}`);

port.takeOff(plane2);
console.log(`Planes at airport after trying to remove the plane with the id ${plane2.id}: ${port.planeList.length}`);