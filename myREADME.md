## How to run the tests

Right click on the specRunner.js file in the Explorer pannel of VS Code and click Open in Integrated Terminal. In the the terminal type node specRunner.js and all tests will run.


## Domain Models and Tests

I treated each domain model seperately.

1.

```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```

| Objects | Properties                  | Messages          | Outputs  |
| ------  | --------------------------  | --------          | ------   |
| Airport | parkedPlanes @Array[@Plane] | landPlane(@Plane) | @string  |
| Plane   | planeId @number             | getId()           | @number  |

Reasoning: Two objects of Airport and Plane. `landPlane()` method proposed to add `Plane` objects to a `parkedPlanes` array (of Plane objects)
which signafies landed planes at an airport. Also gave `Plane` object a `planeId` property that returns a number that uniquely identifies a plane. `lanePlane()` method will use `getId()` method as string literal within a string return message that signifies which plane has landed. The `planeId` number will be set via a constructor.

### Tests

Test 1a - Validation - check if the length of an empty `parkedPlanes` array increases by 1 when `landPlane()` is called - returns true if so <br>
Test 1b - Verification - Check if a plane object is added to the `parkedPlanes` array when `landPlane()` is called - matches the return string from the `landPlane()` method call with the expected string for this method - returns true when matched <br>
Test 1c - Check if calling `getID()` returns the correct `planeID` value for a `Plane` object

2.

```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```

| Objects | Properties                 | Messages                    | Outputs|
| ------  | -------------------------- | --------                    | ------ |
| Airport | airportCapacity @number    | setAirportCapacity(@number) | @Void  |

Reasoning: Proposed an `airportCapacity` property for `Aiport` objects. This will have a default value set to it by the constructor for this class.
Proposed a `setAirportCapacity()` method that can allow the default value for the `airportCapacity` property to be overriden and assigned at the point of the method call on a given `Airport` object.

### Tests
Test 2a - Check if the `airportCapacity` property for an `Airport` object has been set with the `setAirportCapacity()` method - returns true if `airportCapacity`'s value matches the value used as a parameter for `setAirportCapacity()`. <br>
Test 2b - Check if the `airportCapacity` property for an `Airport` object has been set as the default value using the `Airport`class constructor - returns true if `airportCapacity`'s value matches the default value of the constructor.  

3.

```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```

| Objects | Properties                  | Messages                    | Outputs   |
| ------  | --------------------------  | --------                    | ------    |
| Airport | airportCapacity @number     | isAirportFull()             | @boolean  |
|         | parkedPlanes @Array[@Plane] | landPlane()                 | @string   | 
| Plane   |                             |                             |           |


Reasoning: Proposed an `isAirportFull()` method that returns a boolean value depending on if the length of the `parkedPlanes` array is equal to
the the value of `airportCapacity` for an instance of the `Aiport` class. Proposed a `landedPlane()` method that returns a string to 
signify that a plane can or cannot land depending on the result of the `isAirportFull()`.

### Tests
Test 3a - Verification - Check that `landPlane()` returns a string stating that a given plane can not land at the airport as it is full <br>
Test 3b - Validation - Check that `isAirportFull()` returns true when `parkedPlanes` array length property matches the `airportCapacity` property

4.

```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```

| Objects | Properties                  | Messages                         | Outputs   |
| ------  | --------------------------  | --------                         | ------    |
| Airport | parkedPlanes @Array[@Plane] | takeOffPlane(planeId @number)    | @string   | 
| Plane   | planeId @number             | getID()                          | @number   |

Reasoning: Proposed a `planeId` property and `getID()` method for a `Plane` object that returns a number which represents a unique id each `Plane` object has. Proposed a `takeOffPlane()` method that takes `planeId` as a paramater. It searches for a specific plane with a matching id in the
`parkedPlanes` array and then pops it from the array. The `takeOffPlane()` method also returns a string to signify the specific plane is no longer at
the airport by using the `getID()` method for the `Plane` object and using it for the message it returns via string. 

Test 4a - Verification - The return string from the `takeOffPlane()` method call shows the correct plane object by it's `planeID` value has been removed from the `parkedPlanes` array - matches the return string from the `takeOffPlane()` method call with the expected return string for this method - returns true when matched <br>
Test 4b - Validation - check if the length of an `parkedPlanes` array decreases by 1 when `takeOffPlane()` is called 

5.

```
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```

| Objects | Properties                  | Messages                         | Outputs   |
| ------  | --------------------------  | --------                         | ------    |
| Airport | parkedPlanes @Array[@Plane] | takeOffPlane(planeId @number)    | @string   | 
| Airport | parkedPlanes @Array[@Plane] | landPlane(@Plane)                | @string   |
| Airport | parkedPlanes @Array[@Plane] | isPlaneAtAirport(planeId @number)| @boolean  |
| Plane   | planeId @number            | getID()                           | @number   |

Reasoning: Proposed `isPlaneAtAirport()` method that checks if the specified plane given by it's `planeId` is at the airport or not by checking to see if a `Plane `object with a matching `planeId` value is within the `parkedPlanes` array, it will return a boolean value. The methods `takeOffPlane()` and `landPlane()` will have implementation to denote that someone has tried to let a plane take-off which is not at the airport or land a plane that's already landed. This will be returned by a string.

### Tests

Test 5a - `isPlaneAtAirport()` returns true if a matching plane object identified by it's id is in the `parkedPlanes` array <br>
Test 5b - `isPlaneAtAirport()` returns false if a plane object is not matched in the `parkedPlanes` array <br>
Test 5c - `takeOffPlane()` returns a string stating that a plane is not at the airport so it can not take off if it is not in the `parkedPlanes` array
<br>
Test 5d - `landPlane()` returns a string stating that a plane has already landed if it is in the parkedPlanes array