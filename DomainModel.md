1) 
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

OBJECTS |PROPERTIES             |MESSAGES         |OUTPUT
Plane   |name@string            |getName()        |string
Airport |planesInAirport[@plane]|landPlane(@plane)|string

2)
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate


OBJECTS |PROPERTIES             |MESSAGES         |OUTPUT
Plane   |name@string            |getName()        |string
Airport |planesInAirport[@plane]|landPlane(@plane)|string

3)
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

OBJECTS |PROPERTIES             |MESSAGES         |OUTPUT
Plane   |name@string            |getName()        |string
Airport |planesInAirport[@plane]|landPlane(@plane)|string


4)
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

OBJECTS |PROPERTIES             |MESSAGES         |OUTPUT
Plane   |name@string            |getName()        |string
Airport |planesInAirport[@plane]|landPlane(@plane)|string


5)
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

OBJECTS |PROPERTIES             |MESSAGES         |OUTPUT
Plane   |name@string            |getName()        |string
Airport |planesInAirport[@plane]|landPlane(@plane)|string
