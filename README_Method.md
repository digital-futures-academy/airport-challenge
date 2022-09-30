Airport Challenge Method
=================

Test 1
-----------

```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```

Domain Modelling

| Object | Messages | Properties | Output
| ----------| ----------- | -- | --
| Plane | - | id@String | -
| Airport Hangar | add(@plane) | airportHangar@Array[@planes] | @void
| 

The testing framework consists of three constants and a function. the const assertEquals asserts that two variables (actualResult and expectedResult) should be compared. It is determined that should actualResult === expectedResult, assertEquals will be true. If actualResult !=== expectedResult, assertEquals will be false.

Test 1 introduces a new object class (airport) and object (plane). The test expects 1 plane to be added to the airportHangar array when a plane is commanded to 'land'. When 1 plane is added to the airportHangar, the array length (airport.airportHangar.length) is expected to be 1.

In airport.js, the object class Airport is defined. It consists of an array called airportHangar and a single command line. The function of the command is to add a plane object to a specified airportHangar (this.airportHangar) using a .push() command.

In airport.spec.js, the result of the test is determined by the assertEquals constant, which compares the actual and expected values determined by the test. As actual === result, the value returns True.

Test 2
-----------

```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```

Domain Modelling

| Object | Messages | Properties | Output
| ----------| ----------- | -- | --
| Plane | - | id@String | -
| Airport Hangar | increaseHangarCapacity(@int) | hangarCapacity.length@int | @void

Test 2 introduces a new property for the airport (hangarCapacity). This should determine a maximum capacity for the airport. The value needs to be increased by the system designer as per demand, therefore the test is to determine whether the capacity can be increased. The initial capacity is set as 2.

increaseHangarCapacity is a new function that should increase the capacity. A compound assignment (+=) is used to increase the capacity of this.airportHangar by a value determined as "xtracap".

Test 3
-------

```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```

Domain Modelling
| Object | Messages | Properties | Output
| ----------| ----------- | -- | --
| Plane | - | id@String | -
| Airport Hangar | increaseHangarCapacity(@int) | hangarCapacity.length@int | @void