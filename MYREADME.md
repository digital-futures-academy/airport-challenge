# Approach
1. Create domain models for each user story
2. Use the domain models to plan each test for each user story
3. Write a test framework
4. Build each test until I get a failing test
5. Write the function to pass the test

# Domain Models

## USER STORY 1
---------------
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

### Domain Model for User Story 1
| Objects    | Properties                   | Messages             | Outputs    |
| -------    | -------------------------    | -----------------    | -------    |
| Airport    | airportPlanes @Array[@plane] | addPlane(@plane)     | @Void      |
|            |                              |                      |            |
| Plane      | flightNumber @string         |                      | @string    | 

### Test Task List For User Story 1
1. There is an airport
2. There's a plane with a flight number so that the correct plane lands
3. The airport needs to receive the plane
4. The number of planes in the airport needs to increase by 1 when the plane lands

### Tests For User Story 1
1. `airportPlanes` length increases to when `addPlane` is called with an instance of `plane` |DONE|
2. Check that the `planeToLand`has the correct `flightNumber` |DONE|

---------------


## USER STORY 2
---------------
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

## Domain Model for User Story 2
| Objects     | Properties                   | Messages                 | Outputs    |
| -------     | -------------------------    | -----------------        | -------    |
| Airport     | airportPlanes @Array[@plane] | getCapacity()            | @integer   |
|             | defaultCapacity @integer     | changeCapacity()         |            |
|             |                              |                          |            |
| Plane       | flightNumber @string         |                          | @string    | 

### Test Task List For User Story 2
1. Airport needs a default capacity (max number of planes) input by a user
2. Need to find the default capacity of that airport
3. Need to change the default capacity of the airport by a given number of planes

### Tests For User Story 2
3. The maximum length of `airportPlanes` is output as `defaultCapacity` |DONE|
4. The `defaultCapacity` of the airport increases or decreases when `changeCapacity()` is called |DONE|

---------------


## USER STORY 3
---------------
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

## Domain Model for User Story 3
| Objects     | Properties                   | Messages                 | Outputs    |
| -------     | -------------------------    | -----------------        | -------    |
| Airport     | airportPlanes @Array[@plane] | atDefaultCapacity()      | @boolean   |
|             | defaultCapacity @integer     |                          |            |
|             |                              |                          |            |
|             | airportPlanes @Array[@plane] | preventAirportPush()     | @boolean   | 
|             | airportFull @ boolean        |                          |            |

### Test Task List For User Story 3
1. Need the defaultCapacity of the airport
2. Need to check if the airport has reached it's default capacity
3. If the airport is at capacity then prevent the plane from landing
4. If the airport has not reached it's capacity then it can land

### Tests For User Story 3
5. `atDefaultCapacity()` returns true if `airportPlanes` has reached it's `defaultCapacity` |DONE|
6. `preventAirportPush()` should return true if `atDefaultCapacity()` returns true |DONE|
---------------


## USER STORY 4
---------------
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

## Domain Model for User Story 4
| Objects     | Properties                   | Messages                 | Outputs    |
| -------     | -------------------------    | -----------------        | -------    |
| Airport     | airportPlanes @Array[@plane] |  takeOffPlane()          | @void      |
|             | airportName @string          |                          |            |

| Plane       | flightNumber @string         |  notInAirport(@plane)    | @boolean   | 
|             | takenOff @boolean             |

### Test Task List For User Story 4
1. Need a plane
2. Check to see if the plane has taken off
3. Confirm that the plane is no longer in that airport

### Tests For User Story 4
7. Remove a plane from airportPlanes resulting in `takenOff` |DONE|
8. If `takenOff` is true then `notInAirport()` should return true |DONE|
9. Edge Case - the plane should not be at the airport that it took off from if `notInAirport()` returns true |NOT DONE|
---------------  


## USER STORY 5
---------------
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

## Domain Model for User Story 5
| Objects     | Properties                   | Messages                 | Outputs    |
| -------     | -------------------------    | -----------------        | -------    |
| Airport     | airportPlanes @Array[@plane] |                          | @void      |
|             | airportName @string          |                          |            |
|             |                              |                          |            |
| Plane       | flightNumber @string         |   notInAirport(@plane)   | @boolean   |
|             | takeOff @boolean             |                          |            | 
|             |                              |   noTakeOff(@plane)      | @boolean   |
|             |                              |   noLanding(@plane)      | @boolean   |

### Test Task List For User Story 5
1. Check to see if the plane is in the airport
2. If the plane is in that airport then then we should not be able to land it
3. If the plane is not in that airport then we should not be able to let it take off
   
### Tests For User Story 5
10. If the plane is not in `airportPlanes` then it cannot takeoff. |DONE|
11. If the plane is already in `airportPlanes` then it cannot land. |DONE|


# NOTES/LEARNINGS
- Some edge cases are incorporated into the tests above but there maybe should have been more considered.
- There are functions within the classes which includes defined variables to make the test pass but this may not be the best way of doing this. Could have created instances and then run the tests on those.



