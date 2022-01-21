* = new

As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
//Objects: airport, plane
//Airport Properties:
airportID, landedPlanes
//Airport Methods() = outputs:

//Plane Properties:
planeID,

//Plane Methods() = outputs:
land(Airport) = +1 plane to airport.landedPlanes array



As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
//Objects: airport, plane
//Airpot Properties:
airportID, landedPlanes, maxPlaneCapacity*
//Airport Methods() = outputs:

//Plane Properties:
planeID,

//Plane Methods() = outputs:
land(Airport) = +1 plane to airport.landedPlanes array


As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
//Objects: airport, plane
//Airpot Properties:
airportID, landedPlanes, maxPlaneCapacity
//Airport Methods() = outputs:

//Plane Properties:
planeID,

//Plane Methods() = outputs:
land(Airport) = +1 plane to airport.landedPlanes array, unless full*

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
//Objects: airport, plane
//Airpot Properties:
airportID, landedPlanes, maxPlaneCapacity
//Airport Methods() = outputs:
land(Plane) = +1 plane to airport.landedPlanes array, unless full
takeoff(Plane) = -1 plane to airport.landedPlanes array

//Plane Properties:
planeID,

//Plane Methods() = outputs:

As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

/// Extended

As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy
//Objects: airport, plane
//Airpot Properties:
airportID, landedPlanes, maxPlaneCapacity, weather
//Airport Methods() = outputs:
land(Plane) = +1 plane to airport.landedPlanes array, unless full
takeoff(Plane) = -1 plane to airport.landedPlanes array, unless weather is stormy

//Plane Properties:
planeID,

//Plane Methods() = outputs:


As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy
//Objects: airport, plane
//Airpot Properties:
airportID, landedPlanes, maxPlaneCapacity, weather
//Airport Methods() = outputs:
land(Plane) = +1 plane to airport.landedPlanes array, unless full or weather is stormy
takeoff(Plane) = -1 plane to airport.landedPlanes array, unless weather is stormy

//Plane Properties:
planeID,

//Plane Methods() = outputs:

As an air traffic controller
To count planes easily
Planes that have landed must be at an airport

- Project can be installed by running `npm install` while in root folder of project
- Tests can be run using `npm test`

I approached this challenge by mapping out user stories into domain models, and further producing (initially failing) tests for every aspect of the domain models. Once I had a failing test, I would begin writing production code until the test passed, and start again.
Initially, my classes were tightly coupled, and so were my tests. I refactored to reduce this however. I also initially used my own test framework, however upgraded to jasmine and refactored all existing tests to work with the new format.
