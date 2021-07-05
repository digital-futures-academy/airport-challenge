# Bridget's solution to the Airport Challenge

## Installing Project

$ git clone <https://github.com/breeshidy/airport-challenge>

npm install

## To run tests

node specRunner.js
or
npm test

## Task

We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off.  Here are the user stories that we worked out in collaboration with the client:

## Progress Blockers

* I needed to learn how to add headers and tables to a markdown file
* Difficult to test the weather function since it creates random values
* one of my test result was printing a random capacity and i could not figure out why

### Domain models - Start drafting the user stories

#### User Story 1

As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

#### The  Nouns are :- Passengers, Airport, Plane. The Verbs are :- Get, Instruct

| Object  | Properties       | Message            | Output                                 |
| :---    |    :----:        |          ---:      |  :---                                  |
| Airport |@Array[landPlanes]|                    |@Array - returns list of arrays         |
|         |                  | landPlane()        |@string("plane has landed")             |
| Plane   | @String - name   |                    |@String - name of plane                 |
|         |@Boolean- isFlying|                    | @Boolean                               |
| Plane   |                  | getPlaneFlying()   |returns @string of plane flying         |

#### Implementing the user story 1 Domain Model Solution

* I started by implementing my airport class and landedPlane method, finally tested by creating the airport spec and running the specRunner with node

* I then created my plane class and getPlaneFlying method and tested by creating the plane spec and running the specRunner with node

* I need to link my isFlying property from my plane class to my airport class. Googled it and fount that i have to create an instance of the class and call the varible then reassign it

#### User Story 2

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

#### The  Nouns are :- Capacity. The Verbs are :- Overridden

| Object  | Properties       | Message            | Output                                               |
| :---    |    :----:        |          ---:      |  :---                                                |
| Airport |@Int - Capacity   | getCapacity()      | @String returns capicity if value is valid           |
|         |@Int - Capacity   | getCapacity()      | @String returns error message if value not valid     |

#### Implementing the user story 2 Domain Model Solution

* Needed to add the getCapacity() function to the airport file and tested it using the specRunner

#### User Story 3

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

#### The  Nouns are :- Safety. The Verbs are :- isFull

| Object  | Properties       | Message                                | Output                                                                              |
| :---    |    :----:        |          ---:                          |  :---                                                                               |
| Airport |                  | isFull()                               |@Boolean returns True if airport is full                                             |
|         |                  | isFull()                               |@Boolean returns False if airport is not full                                        |
|         |                  | landPlane() -- modified to add isFull()|if is full is True - @String returns plane cannot land yet, the landing area is full |
|         |                  | landPlane() -- modified to add isFull()|if is full is False - @String returns plane can successfully land                    |

#### Implementing the user story 3 Domain Model Solution

* Needed to add the isFull() function to the airport file and modify the landPlane() to check if landing area is full or not

#### User Story 4

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

#### The  Nouns are :- No new ones. The Verbs are :- Takeoff

| Object  | Properties      | Message                                 | Output                                                                 |
| :---    |    :----:       |          ---:                           |  :---                                                                  |
| Airport |                 |takeOff()- using the landedplane array   |if not in array - @String returns plane has take off                    |
|         |                 |takeOff() - using the landedplane array  |if in array - @String returns error message that plane is already flying|

#### Implementing the user story 4 Domain Model Solution

* Needed to add the takeOff() function to the airport file and tested the function using specRunner

#### User Story 5

As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

| Object  | Properties      | Message                                           | Output                                               |
| :---    |    :----:       |          ---:                                     |  :---                                                |
| Airport |                 |Modified takeOff()- using the landedplane array    | @String takes off plane thats in landed array        |
|         |                 |Modified takeOff()- using the landedplane array    | @String returns error message if not in landed array |
|         |                 |Modified landPlane() - using the landedplane array | @String lands plane thats not in landed array        |
|         |                 |Modified landPlane() - using the landedplane array | @String return error message if in landed array      |

#### Implementing the user story 5 Domain Model Solution

* Modified the takeOff and land function to ensure a plane that is already flying cannot be taken off and a plane that is already landed cannot be landed again

### Extended Acceptance Criteria

#### user story 1 - Extended

As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

#### The  Nouns are :- weather. The Verbs are :- No New ones

| Object  | Properties       | Message            | Output                                                       |
| :---    |    :----:        |          ---:      |  :---                                                        |
| Weather |                  | checkIfStormy()    |@Boolean - return true if stormy                              |
|         |                  | checkIfStormy()    |@Boolean - return false if not stormy                         |
| Airport |                  | modify takeOff()   |if checkIfStormy weather is false @String - plane can take off|
|         |                  | modify takeOff()   |if checkIfStormy weather is true @String - error message      |

#### Implementing the user story 1 - Extended Domain Model Solution

* Use the weather solution from another user's code, it can be located [here](https://github.com/AntMousinho/mousinho-airport-challenge/blob/main/src/weather.js)
* Modified the takeOff  function to ensure a plane cannot take off when weather is stormy

#### user story 2 - Extended

As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

| Object  | Properties       | Message            | Output                                                         |
| :---    |    :----:        |          ---:      |  :---                                                          |
| Airport |                  | modify landPlane()   |if checkIfStormy weather is false @String - plane can land    |
|         |                  | modify landPlane()   |if checkIfStormy weather is true @String - error message      |

#### Implementing the user story 2 - Extended Domain Model Solution

* Modified the landPlane  function to ensure a plane cannot land when weather is stormy

#### user story 3 - Extended

As an air traffic controller
To count planes easily
Planes that have landed must be at an airport

#### The  Nouns are :- No new ones. The Verbs are :- count

| Object  | Properties       | Message            | Output                                |
| :---    |    :----:        |    ---:            |  :---                                 |
| Airport |                  | countPlane()       | return @int - numbers of plane landed |

#### Implementing the user story 3 - Extended Domain Model Solution

* i am not sure if i did this right but i returned the number of landed planes

### Reference picture of tests ran

Screenshot 2021-07-05 at 04.00.32
