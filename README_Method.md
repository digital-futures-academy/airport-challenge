Airport Challenge Method
=================

Test 1
-----------

Domain Modelling

| Object | Properties | Messages | Output
| ----------| ----------- | -- | --
| Plane | - | id@String | -
| Airport | add(@plane) | airportPlanes@Array[@planes] | @void

The testing framework consists of three constants and a function. the const assertEquals asserts that two variables (actualResult and expectedResult) should be compared. It is determined that should actualResult === expectedResult, assertEquals will be true. If actualResult !=== expectedResult, assertEquals will be false.

Test 1 introduces a new object class (airport) and object (plane). The test expects 1 plane to be added to the airportHangar array when a plane is commanded to 'land'. When 1 plane is added to the airportHangar, the array length (airport.airportHangar.length) is expected to be 1.

In airport.js, the object class Airport is defined. It consists of an array called airportHangar and a single command line. The function of the command is to add a plane object to a specified airportHangar (this.airportHangar) using a .push() command.

In airport.spec.js, the result of the test is determined by the assertEquals constant, which compares the actual and expected values determined by the test. As actual === result, the value returns True.

