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
* You must [submit your challenge](https://airtable.com/shrUGm2T8TYCFAmjN) by the deadline, wherever you get to.
* Use your own test framework and evidence your test-driven development by committing on passing tests.
* Please write your own README detailing how to install your project, how to run the tests, how you approached the problem and provide screenshots of interacting with your program.
* If you refer to the solution of another coach or student, please put a link to that in your README.
* Please create separate files for every class, module, and spec.

Steps
-------

1. Fork this repo, and clone to your local machine
2. `npm install` to install project dependencies
3. Convert stories into a representative domain model and test-drive your work.
4. Run your tests using `npm test` or `node specRunner.js`
5. OPTIONAL: [Lint](https://eslint.org/docs/user-guide/getting-started) your source code using `npx eslint src`.

Task
-----

We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off.  Here are the user stories that we worked out in collaboration with the client:

#### Acceptance Criteria
```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

|     Objects     |     Properties     |        Messages        |     Ouputs      |
| Plane           | name @string       | landPlane()            | @Bool           |

*Idea: Add the string name of the plane to an array of landed plans

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

|     Objects     |     Properties     |        Messages        |     Ouputs      |
| Airport         | @int               | airportCapacity()      | @Int            |

*Idea: Have a limit parameter in the class Airport which can be changed with the airportCapacity() method

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

|     Objects     |     Properties     |        Messages        |     Ouputs      |
| Airport         | @int               | isAirportFull()        | @Bool           |

*Idea: If the length of the landed planes array is >= airport capacity return false so the plane cannot lane
or true if it is less than the capacity

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

|     Objects     |     Properties     |        Messages        |     Ouputs      |
| Plane           | @string            | planeTakeoff()         | @array          |
| Plane           | @string            | landedPlanes()         | @Bool           |

*Idea: Move the string of the plane name to from the landed planes array to the takeoff planes array and check the
landed planes array for the string name of the plane to check its not there

As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

|     Objects     |     Properties     |        Messages        |     Ouputs      |
| Plane           | @string            | canPlaneTakeoff()      | @Bool           |
| Plane           | @string            | isPlaneInAirport()     | @Bool           |

*Idea: Check the landed planes array to see if the desired plane to takeoff is in the airport currently, returning false if
its not in the landed planes array. Then checking the landed planes array for a plane that has already landed, returning
true if its already in the airport.

```
#### Extended Acceptance Criteria
```
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

|     Objects     |     Properties     |        Messages        |     Ouputs      |
| Weather         | @string            | safeToTakeoff()        | @Bool           |

*Idea: Every plane has an id/name and also a random number representing the weather of that day, if the weather is stormy
returns false so the plane cannot takeoff

As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

|     Objects     |     Properties     |        Messages        |     Ouputs      |
| Weather         | @string            | safeToLand()           | @Bool           |

*Idea: Every plane has an id/name and also a random number representing the weather of that day, if the weather is stormy
returns false so the plane cannot land

As an air traffic controller
To count planes easily
Planes that have landed must be at an airport

|     Objects     |     Properties     |        Messages        |     Ouputs      |
| Plane           | @string            | landedPlanes()         | @int            |

*Idea: Prints the number of planes that have landed and are in the airport currently

```

Your task is to test drive the creation of a set of classes/objects to satisfy all the above user stories. You will need to use a random number generator to set the weather (it is normally sunny but on rare occasions it may be stormy). In your tests, you'll need to stub random behaviour to ensure consistent test behaviour.

Your code should defend against [edge cases](http://programmers.stackexchange.com/questions/125587/what-are-the-difference-between-an-edge-case-a-corner-case-a-base-case-and-a-b) such as inconsistent states of the system ensuring that planes can only take off from airports they are in; planes that are already flying cannot take off and/or be in an airport; planes that are landed cannot land again and must be in an airport, etc.
