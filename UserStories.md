Airport Challenge

**User story 1**
--
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

--
Domain modelling:

| Objects   | Properties                | Messages          | Outputs |
| ----------| ------------------------- | ----------------- | ------- |
| plane     | id@string                 | getId()           | @string |
|           |                           |                   |         |
| airport   | Airport @plane[@Item]     |landPlane(@plane)  | @void   |


*Initial Thoughts*
Need airport
Need plane
Plane needs to land in the airport
The airport array should increase by 1 when the plane lands

Tests
1. landPlane should only add plane 'instances' to the airport array.
2. Airport array should increase by 1 when landPlane is called

----------------
**User story 2**
--
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
--
Domain modelling:
| Objects   | Properties                | Messages                | Outputs |
| ----------| ------------------------- | ----------------------- | ------- |
| airport   | capacity@integer          | changeCapacity@integer  |         |
|           |                           |                         |         |

*Initial thoughts*
Airport has a default capacity.
The capacity can be changed.
The capacity is a number.

Tests
3. Airport capacity can be changed.
-----------------
**User story 3**
--
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
--
Domain modelling:

| Objects   | Properties                | Messages          | Outputs |
| ----------| ------------------------- | ----------------- | ------- |
| plane     | id@string                 | getId()           | @string |
|           |                           |                   |         |
| airport   | Airport @plane[@Item]     | landPlane(@plane) | @void   |
|           | capacity@integer          | isAirportFull()   | @boolean|

*Initial Thoughts*

Need to check the airport capacity.
If the airport is full, plane should not land

Tests
4. Check if airport is full by calling the isAirportFull() function
5. If the airport is full, the airportArray should not increase.

------------------
**User story 4**
--
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
--
Domain modelling:
| Objects   | Properties                | Messages             | Outputs |
| ----------| ------------------------- | -----------------=---| ------- |
| plane     | id@string                 | getId()              | @string |
|           |                           |                      |         |
| airport   | Airport @plane[@Item]     | planeTakeOff(@plane) | @void   |
|           |                           | isPlaneInAirport()   | @boolean|

*Initial Thoughts*

Plane can takeoff from the airport.
Need to check if the plane is in the airport or not.

Tests
6. airportArray length decreases by 1 when planeTakeoff() is called with instance of 'planeID'
7. Check if 'planeID' is still in `Airport` by calling `isPlaneInAirport`
----------------
**User story 5**
--
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
--
Domain modelling:
| Objects   | Properties                | Messages             | Outputs |
| ----------| ------------------------- | -----------------=---| ------- |
| plane     | id@string                 | getId()              | @string |
|           |                           |                      |         |
| airport   | Airport @plane[@Item]     | planeTakeOff(@plane) | @void   |
|           |                           | isPlaneInAirport()   | @boolean|
|           |                           | landPlane()          | @void   |

*Initial Thoughts*

Plane cannot takeoff if the plane is not in the airport.
Plane cannot land if it is already landed.

Tests
8. If isPlaneInAirport is called and it is true, then landPlane is not called.
9. If isPlaneInAirport is called and it is false, then planeTakeoff is not called.