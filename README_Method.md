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

Test 2 introduces a new property for the airport (hangarCapacity). This should determine a maximum capacity for the airport. The value needs to Tbe increased by the system designer as per demand, therefore the test is to determine whether the capacity can be increased. The initial capacity is set as 2.

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
| Airport Hangar | add(@plane) | airportHangar@Array[@string] | @void/@string

Test 3 amends the add function defined in the Airport class. An if statement is introduced with the parameter set so that if length of the array "airportHangar" (airportHangar.length) is less than hangarCapacity, planes will be added to the array. If airportHangar.length is equal to the hangarCapacity, then a string should be returned saying that the capacity is full and a plane will not be added to the array.

Test 4
---

```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```

Domain Modelling
| Object | Messages | Properties | Output
| ----------| ----------- | -- | --
| Plane | - | id@String | -
| Airport Hangar | remove(@plane) | airportHangar@Array[@string] | @void/@string

A function called remove is introduced to the airport class. An let statement is introduced, which first determines the index position of a plane object in the airportHangar array. Once the index position has been determined, a .splice function is used to remove the plane object determined at the index position. A return function then declares the string: `'${plane} has departed airport.'`

Test 5
---

```
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```

Domain Modelling
| Object | Messages | Properties | Output
| ----------| ----------- | -- | --
| Plane | - | id@String | -
| Airport Hangar | add(@plane)/remove(@plane) | airportHangar@Array[@string] | @void/@string

An if statement is introduced in the remove fucntion, which first determines whether a specific plane is in the hangar. If true, then the plane can depart. If false, then the if else statement will return the string `"Plane is not in hangar."`