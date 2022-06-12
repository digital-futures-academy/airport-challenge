// File to actually run my program

const { AIRPORT } = require("./Airport");

const { PLANE } = require("./Plane");


let airport = new AIRPORT;
let plane = new PLANE;
airport.listOfLandedPlanes = ["PLANE1", "PLANE2", "PLANE3", "PLANE4", "PLANE5", "PLANE6", "PLANE7", "PLANE8", "PLANE9", "PLANE10",];


console.log(airport.takeOffPlane("PLANE1"));
