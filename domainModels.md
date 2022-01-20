#### Acceptance Criteria
```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

| Object  | Properties    | Message           | Output         |
| ------- | ------------- | ----------------- | -------------- |
| Airport | planes @Array | landPlane(@Plane) | @Array[@Plane] |
| Plane   | name @String  |                   |                |

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

| Object  | Properties       | Message                 | Output  |
| ------- | ---------------- | ----------------------- | ------- |
| Airport | capacity @Number | updateCapacity(@Number) | @Number |

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

| Object  | Properties | Message         | Output   |
| ------- | ---------- | --------------- | -------- |
| Airport |            | isAirportFull() | @Boolean |

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

| Object  | Properties    | Message                  | Output         |
| ------- | ------------- | ------------------------ | -------------- |
| Airport | planes @Array | takeOff(@Plane)          | @Array[@Plane] |
|         |               | isPlaneAtAirport(@Plane) | @Boolean       |

As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

| Object  | Properties     | Message           | Output  |
| ------- | -------------- | ----------------- | ------- |
| Airport | planes @Array  | takeOff(@Plane)   | @String |
|         |                | landPlane(@Plane) | @String |
| Plane   | status @String |                   |         |

```

#### Extended Acceptance Criteria
```
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

| Object  | Properties      | Message         | Output   |
| ------- | --------------- | --------------- | -------- |
| Airport | stormy @Boolean | isStormy()      | @Boolean |
|         |                 | takeOff(@Plane) | @String  |

As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

| Object  | Properties      | Message           | Output   |
| ------- | --------------- | ----------------- | -------- |
| Airport | stormy @Boolean | isStormy()        | @Boolean |
|         |                 | landPlane(@Plane) | @String  |

As an air traffic controller
To count planes easily
Planes that have landed must be at an airport

| Object  | Properties     | Message       | Output  |
| ------- | -------------- | ------------- | ------- |
| Airport | planes @Array  | countPlanes() | @Number |
| Plane   | status @String |               |         |

```