
Acceptance Criteria
--------------------------------------
**User Story 1**
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

**User Story 2**
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

**User Story 3**
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

**User Story 4**
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

**User Story 5**
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

**Extended Criteria**

**User Story 6**
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

**User Story 7**
As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

**User Story 8**
As an air traffic controller
To count planes easily
Planes that have landed must be at an airport

Domain Model - first pass

| Objects     | Properties          | Messages      | Output                            |
| ----------- | ------------------- | ------------- | --------------------------------- |
| Destination |                     |               |                                   |
| Airport     | capacity@Int        | landPlane()   | "Please land plane X"@String      |
|             | parkingLot@Array    | isFull()      | "Unable to land"@String           |
|             |                     | takeOff()     | "Please take off, plane X"@String |
|             |                     | isAtAirport() | @Boolean                          |
| Plane       | isAtAirport@Boolean |               |                                   |
| Weather     | weather@String      | isStormy()    | @String                           |