User Story 1

As an air traffic controller
I want to instruct the airport to land a plane
So I can get passengers to a destination
			

| Objects | Properties    | Message/functions/methods | Output         |
| ------- | ------------- | ------------------------- | -------------- |
| Plane   | name @String  | -name()                   | @String        |
| Airport | planes @array | -landPlane(plane)         | @Array[@Plane] |

User Story 2

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

| Objects | Properties      | Message/functions/methods   | Output              |
| ------- | --------------- | --------------------------- | ------------------- |
| Airport | capacity@Number | -overrideCapacity(capacity) | newCapacity @number |


User Story 3

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

| Objects | Properties      | Message/functions/methods | Output  |
| ------- | --------------- | ------------------------- | ------- |
| Airport | capacity@Number | -airportFull(plane)       | boolean |


User Story 4

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport


| Objects | Properties  | Message/functions/methods | Output    |
| ------- | ----------- | ------------------------- | --------- |
| Airport | plane@Array | -takeOff(plane)           | new@Array |


User Story 5

As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

| Objects | Properties  | Message/functions/methods | Output  |
| ------- | ----------- | ------------------------- | ------- |
| Airport | plane@Array | -checkPlane(plane)        | boolean |