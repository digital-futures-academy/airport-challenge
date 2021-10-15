# Domain model for Airport - Regular Acceptance Criteria

| Objects | Properties         | Message                              | Context                       | Output        |
| ------- | ------------------ | ------------------------------------ | ----------------------------- | ------------- |
| Plane   | planeName(@String) | getName()                            | returns the name of the plane | @String       |
| Airport | listPlanes(@Array) | landPlane(@Plane. @isAirportFull())  | adds a plane to the airport   | @Array[@Item] |
| ''      | ''                 | sendPlane(@Plane, findPlane(@Plane)) | lets the plane take off       | @Array[@Item] |
| ''      | ''                 | findPlane(@listPlanes[@Plane])       | is plane in airport           | @Boolean      |
| ''      | maxSize(@Integer)  | setMaxSize(@Integer)                 | set the max capacity          | @Integer      |
| ''      | ''                 | getMaxSize()                         | returns max capacity          | @Integer      |
| ''      | ''                 | isAirportFull(@listPlanes, @maxSize) | checks if airport is full     | @Boolean      |

```
```
# Domain model for Airport - Extended Acceptance Criteria

| Objects | Properties         | Message                                        | Context                       | Output        |
| ------- | ------------------ | ---------------------------------------------- | ----------------------------- | ------------- |
| Plane   | planeName(@String) | getName()                                      | returns the name of the plane | @String       |
| Airport | listPlanes(@Array) | landPlane(@Plane. @isAirportFull(), @Weather)  | adds a plane to the airport   | @Array[@Item] |
| ''      | ''                 | sendPlane(@Plane, findPlane(@Plane), @Weather) | lets the plane take off       | @Array[@Item] |
| ''      | ''                 | findPlane(@listPlanes[@Plane])                 | is plane in airport           | @Boolean      |
| ''      | ''                 | getNumPlanes()                                 | returns the # of planes       | @Integer      |
| ''      | maxSize(@Integer)  | setMaxSize(@Integer)                           | set the max capacity          | @Integer      |
| ''      | ''                 | getMaxSize()                                   | returns max capacity          | @Integer      |
| ''      | ''                 | isAirportFull(@listPlanes, @maxSize)           | checks if airport is full     | @Boolean      |
| Weather | weather(@String)   | generateWeather()                              | generates a random weather    | @String       |
| ''      | ''                 | getWeather()                                   | returns the weather           | @String       |

