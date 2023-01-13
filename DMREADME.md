**User Story 1**
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

## Domain Model 1

| Objects | Properties                 | Messages          | Outputs |
| ------- | -------------------------  | ----------------- | ------- |
| Airport |listOfPlanes @Array[@Plane] | planeLands(@Plane)| @Void   |
| Plane   |planeID @String             |                   |         |

## Tests

*Test 1* - Length of listOfPlanes array at the Airport increases by 1 when planeLands
*Test 2* - Check that only Plane types are able to land at the Airport when planeLands
*Test 3* - Check for edge cases

**User Story 2**
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

## Domain Model 2

| Objects | Properties                 | Messages          | Outputs |
| ------- | -------------------------  | ----------------- | ------- |
| Airport |listOfPlanes @Array[@Plane] | planeLands(@Plane)| @Void   |
|         |airportCapacity @Integer    | changeCapacity()  | @String |
| Plane   | plane id @String           |                   |         |

## Tests

*Test 1* - Check the value returned for default airport capacity
*Test 2* - Check the value returned when changeCapacity() is used and capacity increased
*Test 3* - Check the value returned when changeCapacity() is used and capacity decreased
*Test 4* - Check the value returned when changeCapacity() is used and capacity stays the same
*Test 5* - Return an error message when changeCapacity() is used and capacity is below 0


**User Story 3**
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

## Domain Model 3

| Objects | Properties                 | Messages          | Outputs |
| ------- | -------------------------  | ----------------- | ------- |
| Airport |listOfPlanes @Array[@Plane] | planeLands(@Plane)| @Void   |
|         |airportCapacity @Integer    | changeCapacity()  |@Void    |
|         |                            | preventLanding()  |@String  |
| Plane   |plane id @String            |                   |         |

## Tests

*Test 1* - When the length of listOfPlanes and airportCapacity are the same, the test returns true
*Test 2* - When planeLands and length of listOfPlanes is smaller than airportCapacity, planeLands is successful and length of listOfPlanes increases by 1
*Test 3* - When planeLands and length of listOfPlanes is greater than airportCapacity, planeLands returns preventLanding
*Test 4* - When planeLands and length of listOfPlanes is the same as airportCapacity, planeLands returns preventLanding

**User Story 4**
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

## Domain Model 4

| Objects | Properties                 | Messages                     | Outputs |
| ------- | -------------------------  | --------------------------   | ------- |
| Airport |listOfPlanes @Array[@Plane] | planeLands(@Plane)           | @Void   |
|         |airportCapacity @Integer    | changeCapacity()             | @Void   |
|         |                            | preventLanding()             | @String |
|         |                            | planeTakesOff()              | @Void   |
|         |                            | planeAtAirport(@listOfPlanes)| @Boolean|
| Plane   |planeID @String             | getId()                      | @String |

## Tests

*Test 1* - Length of listOfPlanes array at the Airport decreases by 1 when planeTakesOff
*Test 2* - Confirm if planeID is in listOfPlanes using planeAtAirport before planeTakesOff returns true
*Test 3* - Confirm if planeID is in listOfPlanes using planeAtAirport after planeTakesOff returns false

**User Story 5**
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

## Domain Model 5

| Objects | Properties                 | Messages                     | Outputs |
| ------- | -------------------------  | --------------------------   | ------- |
| Airport |listOfPlanes @Array[@Plane] | planeLands(@Plane)           | @Void   |
|         |airportCapacity @Integer    | changeCapacity()             | @Void   |
|         |                            | preventLanding()             | @String |
|         |                            | planeTakesOff()              | @Void   |
|         |                            | preventTakeOff()             | @String |
|         |                            | planeAtAirport(@listofPlanes)| @Boolean|
| Plane   |planeID  @String            | getId()                      | @String |

## Tests

*Test 1* - Confirm if planeID is in listOfPlanes using planeAtAirport after planeLands returns true
*Test 2* - Confirm if planeID is in listOfPlanes using planeAtAirport before planeLands returns false
*Test 3* - Confirm if planeID is at Airport, preventLanding returns @string message and plane doesn't land
*Test 4* - Confirm if planeID is not at Airport, preventTakeOff returns @string message and doesn't take off
