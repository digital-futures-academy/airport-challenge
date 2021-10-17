# Domain model for Airport - Regular Acceptance Criteria

## Acceptance Criteria
```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```
## Domain Model
| Objects | Properties          | Message                              | Context                    | Output        |
| ------- | ------------------- | ------------------------------------ | -------------------------- | ------------- |
| Plane   | planeName(@String)  | getName()                            | get name of plane          | @String       |
| ''      | ''                  | setName()                            | set name of plane          | @String       |
| ''      | atAirport(@Boolean) | getStatus()                          | At Airport ? (T/F) status  | @Boolean      |
| ''      | ''                  | setStatus()                          | sets 'At Airport ?' status | @Boolean      |
| Airport | listPlanes(@Array)  | landPlane(@Plane, @isAirportFull())  | adds plane to airport      | @Array[@Item] |
| ''      | ''                  | sendPlane(@Plane, findPlane(@Plane)) | removes plane from airport | @Array[@Item] |
| ''      | ''                  | findPlane(@listPlanes[@Plane])       | is plane in airport        | @Boolean      |
| ''      | maxSize(@Integer)   | setMaxSize(@Integer)                 | sets max capacity          | @Integer      |
| ''      | ''                  | getMaxSize()                         | returns max capacity       | @Integer      |
| ''      | ''                  | isAirportFull(@listPlanes, @maxSize) | checks if airport is full  | @Boolean      |

```
```
# Domain model for Airport - Extended Acceptance Criteria

## Extended Acceptance Criteria
```
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

As an air traffic controller
To count planes easily
Planes that have landed must be at an airport
```
## Domain Model
| Objects | Properties          | Message                                        | Context                    | Output        |
| ------- | ------------------- | ---------------------------------------------- | -------------------------- | ------------- |
| Plane   | planeName(@String)  | getName()                                      | get name of plane          | @String       |
| ''      | ''                  | setName()                                      | set name of plane          | @String       |
| ''      | atAirport(@Boolean) | getStatus()                                    | At Airport ? (T/F) status  | @Boolean      |
| ''      | ''                  | setStatus()                                    | sets 'At Airport ?' status | @Boolean      |
| Airport | listPlanes(@Array)  | landPlane(@Plane, @isAirportFull(), @Weather)  | adds plane to airport      | @Array[@Item] |
| ''      | ''                  | sendPlane(@Plane, findPlane(@Plane), @Weather) | removes plane from airport | @Array[@Item] |
| ''      | ''                  | findPlane(@listPlanes[@Plane])                 | is plane in airport        | @Boolean      |
| ''      | ''                  | getNumPlanes()                                 | returns the # of planes    | @Integer      |
| ''      | maxSize(@Integer)   | setMaxSize(@Integer)                           | set the max capacity       | @Integer      |
| ''      | ''                  | getMaxSize()                                   | returns max capacity       | @Integer      |
| ''      | ''                  | isAirportFull(@listPlanes, @maxSize)           | checks if airport is full  | @Boolean      |
| ''      | weather(@String)    | generateWeather()                              | generates a random weather | @String       |
| ''      | ''                  | getWeather()                                   | returns the weather        | @String       |

