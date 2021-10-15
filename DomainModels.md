### Criteria 1

>As an air traffic controller,
>So I can get passengers to a destination,
>I want to instruct the airport to land a plane

| Object  | Properties    | Message          | Context              | Output         |
| ------- | ------------- | ---------------- | -------------------- | -------------- |
| Airport | planes @Array | landPlane(plane) | add plane to airport | @Array[@Plane] |
| Plane   | plane @string |                  |                      |                |



### Criteria 2

>As the system designer,
>So that the software can be used for many different airports,
>I would like a default airport capacity that can be overridden as appropriate

| Object  | Properties              | Message                        | Context                 | Output  |
| ------- | ----------------------- | ------------------------------ | ----------------------- | ------- |
| Airport | defaultCapacity @number | updateDefaultAirportCapacity() | update default capacity | @number |


### Criteria 3

>As an air traffic controller,
>To ensure safety,
>I want to prevent landing when the airport is full

| Object  | Properties      | Message         | Context       | Output         |
| ------- | --------------- | --------------- | ------------- | -------------- |
| Airport | status @boolean | isAirportFull() | it's full     | @boolean true  |
|         |                 |                 | it's not full | @boolean false |


### Criteria 4

>As an air traffic controller,
>So I can get passengers on the way to their destination,
>I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

| Object  | Properties    | Message                 | Context                   | Output         |
| ------- | ------------- | ----------------------- | ------------------------- | -------------- |
| Airport | planes @Array | takeOff(plane)          | remove plane from airport | @Array[@Plane] |
|         |               | isPlaneAtAirport(plane) | is at airport             | @boolean true  |
|         |               |                         | is not at airport         | @boolean false |


### Criteria 5

>As an air traffic controller,
>To avoid confusion,
>I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

| Object  | Properties            | Message                    | Context       | Output         |
| ------- | --------------------- | -------------------------- | ------------- | -------------- |
| Airport | allowTakeOff @boolean | allowTakeOff(landedStatus) | not prevented | @boolean true  |
|         |                       |                            | prevented     | @boolean false |
| Plane   | landedStatus @boolean | checkIfAtAirport()         | landed        | @boolean true  |
|         |                       |                            | not landed    | @boolean false |