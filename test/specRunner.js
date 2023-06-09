console.log("---Running all tests---");

require("./canLandPlane.spec.js");
require("./canSetCapacity.spec.js");
require("./checkCanLand.spec.js");
require("./letTakeOffAndConfirm.spec.js");

/* 
Component / Integration tests for the future:
canLand with landPlane
e.g.
airport.planesOnGround = [{id: "plane1"}, {id: "plane2"}]
airport.capacity = 3;
test(airport.landPlane({id: "plane3"})).isUndefined();
test(airport.landPlane).with({id: "plane4"}).throws(Error);


### title
```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```

*/