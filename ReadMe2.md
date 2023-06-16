============================================================================================================

****************************************User Stories Domain Modeling****************************************

============================================================================================================
User Story 1
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

| Object    | Properties                    | Messages                 | Outputs
| Airport   | listOfPlanes @Array[@Plane]   | landPlane(@Plane)        | @Void
| Plane     |                               |                          |

Tests

- landPlane increases the size of listOfPlanes
- landPlane adds the specified plane to listOfPlanes
- //landPlane only adds planes to the list (inputs without a planeId are not added to the list)
- landPlane only adds planes to the list (Throws and error otherwise)

============================================================================================================
User Story 2
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

| Object    | Properties                    | Messages                        | Outputs
| Airport   | airportCapacity @Integer      | changeAirportCapacity(@Integer) | @Void

Tests

- changeAirportCapacity changes airportCapacity to the input value
- changeAirportCapacity only changes airportCapacity to a number 
- (Otherwise throws and error)
- changeAirportCapacity only changes airportCapacity to an integer
- (Otherwise throws an error)

============================================================================================================
User Story 3
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

| Object            | Properties                    | Messages                 | Outputs
| Airport           | listOfPlanes @Array[@Plane]   | isAirportFull()          | @Boolean
|                   | airportCapacity @Integer      | landPlane(@Plane)        | @Void

Tests

- isAirportFull returns a boolean value
- isAirportFull returns true if the size of listOfPlanes is equal to airportCapacity
- isAirportFull returns false if the size of listOfPlanes is less than airportCapacity
- isAirportFull returns true if the size of listOfPlanes is over airportCapacity
- //if the airport is full then landPlane won't change listOfPlanes
- if the airport is full then landPlane will throw an error
- if the airport is not full planes can still land
- //if the airport is over capacity landPlane won't change listOfPlanes
- if the airport is over capacity landPlane will throw an error

============================================================================================================
User Story 4
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

=====> Split into 2 different user stories

User Story 4.1
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off

| Object            | Properties                    | Messages                 | Outputs
| Airport           | listOfPlanes @Array[@Plane]   | takeOff(@Plane)          | @Void
| Plane             | planeId @String               | getPlaneId()             | @String

Tests

- takeOff reduces the size of listOfPlanes
- takeOff removes its input plane from the list
- //takeOff doesn't reduce the size of listOfPlanes if the input plane isn't in the list
- takeOff throws an error if the input plane isn't in the list
- //takeOff doesn't reduce the size of listOfPlanes if the input isn't a plane
- takeOff throws an error if the input isn't a plane

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

User Story 4.2
As an air traffic controller
So I can get passengers on the way to their destination
I want to confirm that after a plane takes off it is no longer in the airport

| Object            | Properties                    | Messages                 | Outputs
| Airport           | listOfPlanes @Array[@Plane]   | isPlaneInAirport(@Plane) | @Boolean

Tests

- isPlaneInAirport returns a boolean
- isPlaneInAirport returns true if the input plane is in listOfPlanes
- isPlaneInAirport returns false if the input plane is not in listOfPlanes
- //isPlaneInAirport returns false if the input is not a plane
- isPlaneInAirport throws an error if the input is not a plane
- After a plane takes off it is no longer in listOfPlanes

============================================================================================================
User Story 5
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

=====> Split into 2 different user stories

User Story 5.1
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport

| Object            | Properties                    | Messages                 | Outputs
| Airport           | listOfPlanes @Array[@Plane]   | isPlaneInAirport(@Plane) | @Boolean
|                   |                               | takeOff(@Plane)          | @Void

Tests

- //takeOff doesn't alter listOfPlanes if the input plane is not there
- takeOff throws an error if the input plane is not in listOfPlanes

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
User Story 5.2
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to land a plane that's already landed

| Object            | Properties                    | Messages                 | Outputs
| Airport           | listOfPlanes @Array[@Plane]   | isPlaneInAirport(@Plane) | @Boolean
|                   |                               | landPlane(@Plane)          | @Void

Tests

- //landPlane doesn't change listOfPlanes if the input plane is already there
- landPlane throws an error if the input plane is already there

============================================================================================================
User Story 6
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

| Object            | Properties                    | Messages                 | Outputs
| Airport           | currentWeather @String        | isItStormy()             | @Boolean
|                   | listOfPlanes @Array[@Plane]   | takeOff(@Plane)          | @Void

Tests

- isItStormy returns a boolean
- isItStormy returns true if currentWeather is "Stormy"
- isItStormy returns false if currentWeather isn't "Stormy"
- //takeOff doesn't alter listOfPlanes if currentWeather is "Stormy"
- takeOff throws an error if currentWeather is stormy
- takeOff does alter listOfPlanes if currentWeather isn't stormy and the plane would otherwise take off

============================================================================================================
User Story 7
As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

| Object            | Properties                    | Messages                 | Outputs
| Airport           | currentWeather @String        | isItStormy()             | @Boolean
|                   | listOfPlanes @Array[@Plane]   | landPlane(@Plane)        | @Void

Testing

- //landPlane doesn't alter listOfPlanes if currentWeather is "Stormy"
- landPlane throws an error if currentWeather is stormy
- landPlane does alter listOfPlanes if currentWeather isn't stormy and the input plane would otherwise land

============================================================================================================
User Story 8
As an air traffic controller
To count planes easily
Planes that have landed must be at an airport

| Object            | Properties                    | Messages                 | Outputs
| Airport           | listOfPlanes @Array[@Plane]   | isPlaneInAirport(@Plane) | @Boolean
|                   | currentWeather @String        | landPlane(@Plane)        | @Void
| Plane             | planeId @String               | getPlaneId()             | @String

Tests

- landPlane will add its input plane to listOfPlanes if it lands successfully

============================================================================================================
============================================================================================================
============================================================================================================