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

*The number of planes at the airport(airportlength) should increase when a plane lands

**User Story 2**
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

*Domain Modelling*
| Objects | Properties                | Messages            | Outputs |
| ------- | ------------------------- | -----------------   | ------- |
|Airport  | airportCapacity @integer  |getAirportCapacity() | @Void  
|||getconfirmation()|@string |
| Plane   | id @String                | getId()             | @String |

*Tests*
*The airport must have a default air capacity which is assigned to a new airport
*Assigning a different airport capacity should override the default capacity.

**User Story 3**
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

*Domain Modelling*
| Objects | Properties                | Messages             | Outputs |
| ------- | ------------------------- | -----------------    | ------- |
|Airport  | airportPlanes[@plane]     |isAirportFull()       | @boolean|
| Plane   | id @String                | getId()              | @String |

**User Story 4**
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

*Domain Modelling*
| Objects | Properties                | Messages         | Outputs |
| ------- | ------------------------- | -----------------| ------- |
|Airport  | airportPlanes[@plane]     |takeOffPlane(@plane) | @String |
| Plane   | id @String                | getId()          | @String |

**User Story 5**
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

*Domain Modelling*
| Objects | Properties                | Messages            | Outputs |
| ------- | ------------------------- | -----------------   | ------- |
|Airport  | airportPlanes[@plane]     |planeExists()        | @boolean|
| Plane   | id @String                | getId()             | @String |
