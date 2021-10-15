# Domain model for Airport

| Objects | Properties               | Message                              | Context                       | Output        |
| ------- | ------------------------ | ------------------------------------ | ----------------------------- | ------------- |
| Plane   | planeName(@string)       | getName()                            | returns the name of the plane | @String       |
| Airport | listPlanes(@Array)       | landPlane(@Plane. @airportMaxSize)   | adds a plane to the airport   | @Array[@Item] |
| ''      | ''                       | sendPlane(@Plane, findPlane(@Plane)) | lets the plane takeOff        | @Array[@Item] |
| ''      | ''                       | findPlane(@listPlanes[@Plane])       | is plane in airport           | @Boolean      |
| ''      | airportMaxSize(@Integer) | setAirportMaxSize(@Integer)          | set the max capacity          | @Integer      |
| ''      | ''                       | getAirportMaxSize()                  | max capacity of the airport   | @Integer      |
| ''      | ''                       | isAirportFull(@airportMaxSize)       | checks if airport is full     | @Boolean      |


