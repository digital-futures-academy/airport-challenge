# Airport Challenge

### Domain Modelling for Acceptance Criteria 
- As an air traffic controller
  So I can get passengers to a destination
  I want to instruct the airport to land a plane

| Object  | Properties             | Messages         | Output                  |
| ------- | ---------------------- | ---------------- | ----------------------- |
| Airport | planesInAirport @Array | landPlane(plane) | @Array[planesInAirport] |
| Plane   | planeId @String        |                  |                         |

- As the system designer
  So that the software can be used for many different airports
  I would like a default airport capacity that can be overridden as appropriate

| Object  | Properties        | Messages      | Output   |
| ------- | ----------------- | ------------- | -------- |
| Airport | capacity @Integer | getCapacity() | @Integer |

- As an air traffic controller
  To ensure safety
  I want to prevent landing when the airport is full

| Object  | Properties             | Messages             | Output                  |
| ------- | ---------------------- | -------------------- | ----------------------- |
| Airport | planesInAirport @Array | landPlane(plane)     | @Array[planesInAirport] |
|         | capacity @Integer      | isAirportFull()      | @Boolean                |
|         |                        | getPlanesInAirport() |                         |
| Plane   | planeId @String        |                      |                         |

- As an air traffic controller
  So I can get passengers on the way to their destination
  I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

| Object  | Properties             | Messages             | Output                  |
| ------- | ---------------------- | -------------------- | ----------------------- |
| Airport | planesInAirport @Array | takeOffPlane(plane)  | @Array[planesInAirport] |
|         |                        | getPlanesInAirport() | @Boolean                |
| Plane   | planeId @String        |                      |                         |

- As an air traffic controller
  To avoid confusion
  I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

| Object  | Properties             | Messages             | Output                  |
| ------- | ---------------------- | -------------------- | ----------------------- |
| Airport | planesInAirport @Array | takeOffPlane(plane)  | @Array[planesInAirport] |
|         |                        | landPlane(plane)     | @Boolean                |
|         |                        | getPlanesInAirport() |                         |
| Plane   | planeId @String        |                      |                         |

### Extended Acceptance Criteria
 - As an air traffic controller
   To ensure safety
   I want to prevent takeoff when weather is stormy

| Object  | Properties             | Messages             | Output                  |
| ------- | ---------------------- | -------------------- | ----------------------- |
| Airport | planesInAirport @Array | takeOffPlane(plane)  | @Array[planesInAirport] |
|         |                        | getPlanesInAirport() | @Boolean                |
| Plane   | planeId @String        |                      |                         |
| Weather | weather @String        | getWeather()         | @String                 |

- As an air traffic controller
  To ensure safety
  I want to prevent landing when weather is stormy

| Object  | Properties             | Messages             | Output                  |
| ------- | ---------------------- | -------------------- | ----------------------- |
| Airport | planesInAirport @Array | landPlane(plane)     | @Array[planesInAirport] |
|         |                        | getPlanesInAirport() | @Boolean                |
| Plane   | planeId @String        |                      |                         |
| Weather | weather @String        | getWeather()         | @String                 |

- As an air traffic controller
  To count planes easily
  Planes that have landed must be at an airport

| Object  | Properties             | Messages             | Output                  |
| ------- | ---------------------- | -------------------- | ----------------------- |
| Airport | planesInAirport @Array | landPlane(plane)     | @Array[planesInAirport] |
|         |                        | getPlanesInAirport() |                         |
| Plane   | planeId @String        |                      |                         |



 
