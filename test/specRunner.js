console.log("---Running all tests---");

require("./canLandPlane.spec.js");
require("./canSetCapacity.spec.js");
require("./checkCanLand.spec.js");

/* 
Component / Integration tests for the future:
canLand with landPlane
e.g.
airport.planesOnGround = [{id: "plane1"}, {id: "plane2"}]
airport.capacity = 3;
test(airport.landPlane({id: "plane3"})).isUndefined();
test(airport.landPlane).with({id: "plane4"}).throws(Error);

*/