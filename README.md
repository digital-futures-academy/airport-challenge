Airport Challenge
=================

```
         ______
        __\____\___
=  = ==(____DFA____)
           \_____\__________________,-~~~~~~~`-.._
          /     o o o o o o o o o o o o o o o o  |\_
          `~-.__       __..----..__                  )
                `---~~\___________/------------`````
                =  ===(_________)

```

Instructions
---------

* Feel free to use google, your notes, books, etc. but work on your own.
* Keep it SIMPLE - it's not nearly as complicated as it first may look.
* You must submit your challenge (on Noodle) by the deadline, wherever you get to.
* Use your own test framework and evidence your test-driven development by committing on passing tests.
* Please write your own README detailing how to install your project, how to run the tests, how you approached the problem and provide screenshots of interacting with your program.
* If you refer to the solution of another coach or student, please put a link to that in your README.
* Please create separate files for every class, module, and spec.

Steps
-------

1. Fork this repo, and clone to your local machine
2. `npm install` to install project dependencies
3. Tests can be run by using `npm test` or `node specRunner.js`
4. The index.js file can be run using `node src/index.js.`

Task
-----

We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off.  Here are the user stories that we worked out in collaboration with the client:

#### Acceptance Criteria
```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

Domain Model

|  Objects   |  Properties                  |   Messages                        |  Output  |
| ---------- | ---------------------------- | --------------------------------  | -------- |
|  Plane     | id @strong                   | getId()                           | @string  |
|  Airport   | landedPlanes @Array[@Planes] | landPlane(@Plane)                 | @void    |
|            | maxCapacity @int             | checkPlaneCanLand()               | @boolean |
|            | weather @Weather             | checkPlaneAtAirport(@Plane.getId) | @boolean |
|  Weather   | weatherConditions @String    | isWeatherStormy()                 | @boolean |

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

Domain Model

|  Objects   |  Properties             |   Messages                     |  Output  |
| ---------- | ----------------------- | ------------------------------ | -------- |
|  Airport   | maxAirportCapacity @Int | increaseAirportCapacity(@int)  | @void    |
|            |                         |                                |          |

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

Domain Model

|  Objects   |  Properties             |   Messages      |  Output     |
| ---------- | ----------------------- | ----------------| ----------- |
|  Airport   | maxAirportCapacity @Int | isAirportFull() | @boolean    |
|            | planes @Array[@Planes]  |                 |             |

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

Domain Model

|  Objects   |  Properties                     |   Messages                        |  Output  |
| ---------- | ------------------------------- | --------------------------------  | -------- |
|  Plane     | id @strong                      | getId()                           | @string  |
|  Airport   | landedPlanes @Array[@Planes]    | takeoffPlane @Plane               | @void    |
|            | weather @Weather                | isWeatherStormy()                 | @boolean |
|            |                                 | checkPlaneAtAirport(@Plane.getId) | @boolean |
|  Weather   | weatherConditions @String       | isWeatherStormy()                 | @boolean |


As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport

Domain Model

|  Objects   |  Properties            |   Messages                    |  Output  |
| ---------- | ---------------------- | ----------------------------- | -------- |
|  Plane     | id @string             | getId()                       | @string  |
|  Airport   | planes @Array[@Planes] | checkPlaneAtAirport(@Plane)   | @boolean |


As an air traffic controller
To avoid confusion
I want to prevent asking the airport to land a plane that's already landed

Domain Model

|  Objects   |  Properties            |   Messages                    |  Output  |
| ---------- | ---------------------- | ----------------------------- | -------- |
|  Plane     | id @string             | getId()                       | @string  |
|  Airport   | planes @Array[@Planes] | checkPlaneAtAirport(@Plane)   | @boolean |

```
#### Extended Acceptance Criteria
```
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

Domain Model

|  Objects   |  Properties                  |   Messages                    |  Output  |
| ---------- | ---------------------------- | ----------------------------- | -------- |
|  Airport   | weather @String              | isWeatherStormy()             | @boolean |
|  Airport   | landedPlanes @Array[@Planes] | takeoffPlane @Plane           | @void    |
|  Weather   | weatherConditions @String    | isWeatherStormy()             | @boolean |

As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

Domain Model

|  Objects   |  Properties                  |   Messages                    |  Output  |
| ---------- | ---------------------------- | ----------------------------- | -------- |
|  Airport   | weather @String              | isWeatherStormy()             | @boolean |
|  Airport   | landedPlanes @Array[@Planes] | landPlane @Plane              | @void    |
|  Weather   | weatherConditions @String    | isWeatherStormy()             | @boolean |

As an air traffic controller
To count planes easily
Planes that have landed must be at an airport

Domain Model

|  Objects   |  Properties            |   Messages                    |  Output  |
| ---------- | ---------------------- | ----------------------------- | -------- |
|  Plane     | landed @boolean        | getLanded()                   | @boolean |
|            |                        | setLanded()                   | @boolean |
|  Airport   | planes @Array[@Planes] | planeExistsAtAirport(@Plane)  | @boolean |

```



Your task is to test drive the creation of a set of classes/objects to satisfy all the above user stories. You will need to use a random number generator to set the weather (it is normally sunny but on rare occasions it may be stormy). In your tests, you'll need to stub random behaviour to ensure consistent test behaviour.

Your code should defend against [edge cases](http://programmers.stackexchange.com/questions/125587/what-are-the-difference-between-an-edge-case-a-corner-case-a-base-case-and-a-b) such as inconsistent states of the system ensuring that planes can only take off from airports they are in; planes that are already flying cannot take off and/or be in an airport; planes that are landed cannot land again and must be in an airport, etc.
