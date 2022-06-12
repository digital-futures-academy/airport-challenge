// File to actually run my program

const { AIRPORT } = require("./Airport");

const { PLANE } = require("./Plane");


let airport = new AIRPORT;
let plane = new PLANE;

console.log(airport.landAPlane("plane1"));
