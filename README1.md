Airport Challenge
----------

Task
-----

We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off.  Here are the user stories that we worked out in collaboration with the client:

---------
**User Story 1**
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

*Domain Modelling*
| Objects | Properties                | Messages         | Outputs |
| ------- | ------------------------- | -----------------| ------- |
|Airport  | airportPlanes[@plane]     |landPlane(@plane) | @Void   |
| Plane   | id @String                | getId()          | @String |

TESTS
1a) The number of planes at the airport(airportPlanes.length) should increase when landPlane is called on a plane.
1b)  addPlane should only allow planes that are instances to land

**User Story 2**
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

*Domain Modelling*
| Objects | Properties                | Messages            | Outputs |
| ------- | ------------------------- | -----------------   | ------- |
|Airport  | airportCapacity @integer  |getAirportCapacity() | @Void  
| Plane   | id @String                | getId()             | @String |

*Tests*
2a) The airport must have a default air capacity which is assigned when a new instance of the airport is created.
2b) Assigning a different airport capacity should override the default capacity.

**User Story 3**
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

*Domain Modelling*
| Objects | Properties                | Messages             | Outputs |
| ------- | ------------------------- | -----------------    | ------- |
|Airport  | airportPlanes[@plane]     |isAirportFull()       | @boolean|
| Plane   | id @String                | getId()              | @String |

TESTS
3a) isAirportFull() returns 'true' when airportCapacity is exceeded.
3b) landPlane does not add plane to airportPlane[] when isAirportFull() returns 'true'.

**User Story 4**
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

*Domain Modelling*
| Objects | Properties                | Messages         | Outputs |
| ------- | ------------------------- | -----------------| ------- |
|Airport  | airportPlanes[@plane]     |takeOffPlane(@plane) | @String |
| Plane   | id @String                | getId()          | @String |

TESTS
4a)airportPlanes length decreases by 1 when plane takes off
4b) A string is returned to confirm removal when takeOff is called on instance of plane

**User Story 5**
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

*Domain Modelling*
| Objects | Properties                | Messages            | Outputs |
| ------- | ------------------------- | -----------------   | ------- |
|Airport  | airportPlanes[@plane]     |planeAtAirport()        | @boolean|
| Plane   | id @String                | getId()             | @String |

TESTS
5a) planeAtAirport returns true if plane is at airport
5b) Length of airportPlane does not change when landPlane() is called on a plane that is already at the airport.
5c) Length of airportPlane does not change when landPlane() is called on a plane that is already at the airport
