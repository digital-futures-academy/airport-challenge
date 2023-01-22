### Part 1

As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

Domain Model

| Objects | Properties                   | Messages               | Outputs |
| ------- | ---------------------------- | ---------------------- | ------- |
| Airport | arrivedPlanes @Array[@Plane] | planesOnGround(@Plane) | @Void   |
|         |                              |                        |         |

### Part 2

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

Domain Model

| Objects | Properties   | Messages | Outputs  |
| ------- | ------------ | -------- | -------- |
| Airport | capacity@int | isFull() | @boolean |
|         |              |          |          |

### Part 3

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

Domain Model

| Objects | Properties                    | Messages | Outputs  |
| ------- | ----------------------------- | -------- | -------- |
| Airport | arrivedPlanes @Array.[@Plane] | isFull() | @Boolean |
|         |                               |          |          |

### Part 4

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

Domain Model

| Objects | Properties                    | Messages         | Outputs |
| ------- | ----------------------------- | ---------------- | ------- |
| Airport | arrivedPlanes @Array.[@Plane] | flyPlane(@Plane) | @Void   |
|         |                               |                  |         |

### Part 5

As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

| Objects | Properties   | Messages | Outputs  |
| ------- | ------------ | -------- | -------- |
| Airport | capacity@int | isFull() | @boolean |
| Plane   | getId        |          |          |

### Extended

As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

As an air traffic controller
To count planes easily
Planes that have landed must be at an airport

| Objects | Properties      | Messages          | Outputs |
| ------- | --------------- | ----------------- | ------- |
| Weather | weatherStatus() | generateWeather() | @String |
|         |                 |                   |         |
