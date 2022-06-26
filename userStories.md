# user story 1 
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

| noun    | verb        |
| -----   | ----------- |
| airport |             |
| plane   | land a plane|
|         |             |

| Objects | Properties                    | Messages                  | Output   |
| ------- | ---------------               | ----------------          | -------- |
| airport | planesAtAirport@array[@plane] | addLandingPlane(@string)  |          |
| plane   | name@string                   |                           |          | 
|         |                               |                           |          |

# user story 2 
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

| noun    | verb             |
| -----   | -----------      |
| airport |                  |
| capacity| overrideCapacity |
|         |                  |

| Objects | Properties           | Messages         | Output            |
| ------- | ---------------      | ---------------- | --------          |
| airport |                      |                  |                   |
| capacity| capacity@num[@planes]| capacity()       | default capacity  | 
|         |                      |                  |                   |

# user story 3 
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

| noun    | verb                                |
| -----   | -----------                         |
| airport | prevent landing when airport is full|
|         |                                     |

| Objects | Properties                | Messages         | Output   |
| ------- | ---------------           | ---------------- | -------- |
| airport | airport@boolean(@capacity)| isFull()         | Message  |
|         |                           |                  |          |

# user story 4 
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

| noun    | verb                     |
| -----   | -----------              |
| airport | plan no longer in airport|
| plane   | take off                 |
|         |                          |

| Objects | Properties      | Messages         | Output                            |
| ------- | --------------- | ---------------- | --------                          |
| airport | plane(num--)    |  num--           | message (no longer in the airport)|
| plane   | landed @boolean | hasLanded()      | @boolean                          | 
|         |                 |                  |                                   |

# user story 5 
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

