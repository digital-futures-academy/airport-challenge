```
# User story 1
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

# User story 2
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

# User story 3
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

# User story 4
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

# User story 5
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed


| Object  | Properties    | Message            | Context                           | Output                                 |
| ------- | ------------- | ------------------ | --------------------------------- | -------------------------------------- |
| Airport | planes @Array | land(plane)        | not full                          | @Array[@plane]                         |
|         |               |                    | is full                           | @String “Airport is full, do not land” |
|         |               |                    | plane already landed              | @String “Plane already landed”         |
|         | capacity @int | setCapacity(cap. ) | default capacity and overrideable |                                        |
|         | capacity @int | isFull()           | is full                           | @Boolean TRUE                          |
|         |               |                    | not full                          | @Boolean FALSE                         |
|         |               | takeOff(plane)     | plane at the airport              | @Array[@plane]                         |
|         |               |                    | plane not at the airport          | @String “Plane not at the airport.”    |
| Plane   | name          | getName()          |                                   |                                        |
|         | at airport    | atAirport()        | plane at the airport              | @Boolean TRUE                          |
|         |               | atAirport()        | plane not at the airport          | @Boolean FALSE                         |
