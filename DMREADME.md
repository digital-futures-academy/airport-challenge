**User Story 1**
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

## Domain Model 1

| Objects | Properties                    | Messages          | Outputs |
| ------- | ----------------------------- | ----------------- | ------- |
| Airport |planesAtAirport @Array[@Plane] | planeLands(@Plane)| @Void   |
| Plane   |planeID @String                |                   |         |

## Tests
*Test 1* - Check that only Plane types are able to land at the Airport when planeLands
*Test 2* - Length of planesAtAirport array at the Airport increases by 1 when planeLands
*Test 3* - Check that edge cases such as 'null' as a type are unable to land at the airport and length of planesAtAirport remains at 0
*Test 4* - Check that when something that isn't a plane attempts to land at the airport, a message is returned
*Test 5* - When a new plane instance is created from the plane class, it contains a planeID property

**User Story 2**
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

## Domain Model 2

| Objects | Properties                   | Messages          | Outputs |
| ------- | -------------------------    | ----------------- | ------- |
| Airport |planesAtAirport @Array[@Plane]| planeLands(@Plane)| @Void   |
|         |airportCapacity @Integer      |                   | @String |
| Plane   |planeID @String               |                   |         |

## Tests

*Test 1* - Check the value returned for default airport capacity
*Test 2* - Check the value returned when capacity changed with positive integer
*Test 3* - Return an error message when capacity is inputted as below 0
*Test 4* - Return an error message when capacity is inputted as null
*Test 5* - Return an error message when capacity is inputted as a non-numerical string

To note: For tests 2.3 - 2.5, I wanted to throw an error rather than set the capacity as a string, however I then couldn't run the tests.

**User Story 3**
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

## Domain Model 3

| Objects | Properties                   | Messages          | Outputs |
| ------- | -------------------------    | ----------------- | ------- |
| Airport |planesAtAirport @Array[@Plane]| planeLands(@Plane)| @Void   |
|         |airportCapacity @Integer      | atCapacity()      |@Boolean |
| Plane   |plane id @String              |                   |         |

## Tests

*Test 1* - When the length of planesAtAirport and airportCapacity are the same, the test returns true
*Test 2* - When the length of planesAtAirport and airportCapacity are the same (1), atCapacity returns true
*Test 3* - When the length of planesAtAirport and airportCapacity are different, atCapacity returns false
*Test 2* - When planeLands and length of planesAtAirport is the same as airportCapacity, planeLands returns preventLanding
*Test 3* - When planeLands and length of planesAtAirport is smaller than airportCapacity, planeLands is successful and length of planesAtAirport increases by 1

**User Story 4**
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

## Domain Model 4

| Objects | Properties                   | Messages                          | Outputs |
| ------- | -------------------------    | -----------------------------     | ------- |
| Airport |planesAtAirport @Array[@Plane]| planeLands(@Plane)                | @Void   |
|         |airportCapacity @Integer      | atCapacity()                      |@Boolean |
|         |                              | planeTakesOff()                   | @Void   |
|         |                              | planeIsAtAirport(@planesAtAirport)| @Boolean|
| Plane   |planeID @String               | getId()                           | @String |

## Tests

*Test 1* - Length of planesAtAirport array at the Airport decreases by 1 when planeTakesOff
*Test 2* - Confirm if planeID is in planesAtAirport using planeIsAtAirport before planeTakesOff returns true
*Test 3* - Confirm if planeID is in planesAtAirport using planeIsAtAirport after planeTakesOff returns false

**User Story 5**
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

## Domain Model 5

| Objects | Properties                    | Messages                          | Outputs |
| ------- | ----------------------------  | ----------------------------      | ------- |
| Airport |planesAtAirport @Array[@Plane] | planeLands(@Plane)                | @Void   |
|         |airportCapacity @Integer       | atCapacity()                      |@Boolean |
|         |                               | planeTakesOff()                   | @Void   |
|         |                               | preventTakeOff()                  | @String |
|         |                               | planeIsAtAirport(@planesAtAirport)| @Boolean|
| Plane   |planeID  @String               | getId()                           | @String |

## Tests

*Test 1* - Confirm if planeID is in planesAtAirport using planeisAtAirport after planeLands returns true
*Test 2* - Confirm if planeID is in planesAtAirport using planeisAtAirport before planeLands returns false
*Test 3* - Confirm if planeID is at Airport, preventLanding returns @string message and plane doesn't land
*Test 4* - Confirm if planeID is not at Airport, preventTakeOff returns @string message and doesn't take off
