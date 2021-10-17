|object|attribute|message|output|
|---|---|---|---|
|airport|capacity @integer|isFull|Display 'true' if the airport is at capacity, 'false' otherwise|
| |currentlyLandedPlanes @array|howManyPlanesLanded|Display how many planes are currently landed at the airport|
| | |land(plane)|Add plane to currentlyLandedPlanes if not already landed, otherwise display an error|
| | |takeoff(plane)|Remove plane from currentlyLandedPlanes if currently landed, otherwise display an error|
|aeroplane|id @string|||