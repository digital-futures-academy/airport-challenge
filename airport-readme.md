dee-rangan-airport-challenge uses Test Driven Development to test Javascript code as a means of demonstrating my learning towards Digital Futures Modern Software Engineering course.

Quick start
$ git clone https://github.com/Dee-rangan/airport-challenge.git


To run tests
node specRunner.js

Approach

With each user story, I created Domain models demonstrating what my output should look like. I used TDD to follow the steps of setup, execute and verify. I added code to my JS files located in the SRC to pass the tests. Once finished, I pushed the work back into my repository. 

Progress Blockers
My main progress blocker was getting mixed up with using this agile method or jasmine to test drive. Also been having issues getting my assertEquals to be defined.

### User Story 1
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane


| ** Object | Properties| Messages | Output **
| ----------- | ----------- | -----| -----|
| Plane | Plane @Array[@String] |  PlaneID()| @string |
| Airport | Plane @Array[@Plane]  | landPlane(@String)   | @Airport  |

### User Story 2
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

| ** Object | Properties| Messages | Output **
| ----------- | ----------- | -----| -----|
| Airport| Plane @Array[@String] |  landPlane(String| @string |
|  | Plane @Array[@Plane]  | newCapacity@airport)   | @Airport  |

### User Story 3
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

| Object      |   Properties| Messages    |   Output    |
| ----------- | ----------- |-----------  | ----------- |
| Plane    | plane @array[plane] | planes(@string) | @string |
| Airport      | Airport@full | isAirportFull(@planeList) | @boolean |
| | planes @Array[@Plane]  | landPlane(@String)   | @Airport |
### User Story 4
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

| ** Object | Properties| Messages | Output **
| ----------- | ----------- | -----| -----|
| Plane | Plane @Array[@String] |  PlaneID()| @string |
| Airport | Planes @Array[@Plane]  | planeTakeoff(@string) | @Airport  |
|  |  | confirmTakeoff(string)  | @Boolean

### User Story 5
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

| ** Object | Properties| Messages | Output **
| ----------- | ----------- | -----| -----|
| Plane | Plane @Array[@String] |  PlaneID()| @string |
|  | Plane @Array[@Plane]  | isFlying(@String)   | @string  |
|  | Plane @Array[@Plane]  | isLanded(@String)   | @string |