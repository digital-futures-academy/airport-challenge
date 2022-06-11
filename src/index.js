const Airport = require("./airport");
const Plane = require("./plane");
const { landAPlan } = require("./airport");



const airport1 = new Airport();

const plane1 = new Plane(`pl001`);
const plane2 = new Plane(`pl002`);
const plane3 = new Plane(`pl003`);
planeCanLand = true;
// const plane4 = new Plane(`pl004`);
// const plane5 = new Plane(`pl005`);
// const plane6 = new Plane(`pl006`);
// const plane7 = new Plane(`pl007`);
// const plane8 = new Plane(`pl008`);
// const plane9 = new Plane(`pl009`);
// const plan10 = new Plane(`pl010`);
console.log(airport1.landAPlan(planeCanLand, plane1));
console.log(airport1.planesInAirport.join());

