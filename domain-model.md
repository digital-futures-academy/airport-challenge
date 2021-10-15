#### Domain Modelling
```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

Objects: plane, airport
Properties: plane@string, airport@string
Messages: plane(), airport()
Output: number (plane added)
______________________________________________________________________________________________________
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

Objects: airport, capacity, plane
Properties: capacity@integer, airport@string, plane@string
Messages: capacity(), airport(), plane()
Output: number (capacity)
______________________________________________________________________________________________________
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

Objects: airport, capacity, planes
Properties: capacity@integer, airport@string, planes@integer
Message: isAirportFull(), plane()
Output: Boolean

______________________________________________________________________________________________________
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

Objects: plane, airport
Properties: plane@string, airport@string
Message: takenOff()
Output: Boolean

______________________________________________________________________________________________________
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

Objects: planeList, incoming, outgoing
Properties: planeList[@array], incoming@string, outgoing@string
Message: inPlaneList()
Output: Boolean
______________________________________________________________________________________________________
```


