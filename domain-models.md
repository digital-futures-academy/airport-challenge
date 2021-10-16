User Story 1

As an air traffic controller
I want to instruct the airport to land a plane
So I can get passengers to a destination
			

| Objects | Properties    | Message/functions/methods | Context | Output         |
| ------- | ------------- | ------------------------- | ------- | -------------- |
| Plane   | name @String  | -name()                   |         | @String        |
| Airport | planes @array | -landPlane(plane)         |         | @Array[@Plane] |

User Story 2

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

| Objects | Properties      | Message/functions/methods | Context | Output              |
| ------- | --------------- | ------------------------- | ------- | ------------------- |
| Airport | capacity@Number | -overrideCapacity()       |         | newCapacity @number |



