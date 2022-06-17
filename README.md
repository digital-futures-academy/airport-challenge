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
5. [Lint](https://eslint.org/docs/user-guide/getting-started) your source code using `npx eslint src` - Optional but recommended!

Task
-----

We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off.  Here are the user stories that we worked out in collaboration with the client:

#### Acceptance Criteria
```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```

#### Extended Acceptance Criteria
```
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

As an air traffic controller
To count planes easily
Planes that have landed must be at an airport
```

Your task is to test drive the creation of a set of classes/objects to satisfy all the above user stories. You will need to use a random number generator to set the weather (it is normally sunny but on rare occasions it may be stormy). In your tests, you'll need to stub random behaviour to ensure consistent test behaviour.

Your code should defend against [edge cases](http://programmers.stackexchange.com/questions/125587/what-are-the-difference-between-an-edge-case-a-corner-case-a-base-case-and-a-b) such as inconsistent states of the system ensuring that planes can only take off from airports they are in; planes that are already flying cannot take off and/or be in an airport; planes that are landed cannot land again and must be in an airport, etc.
# Solution explanation

# first user story
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

## Domain Modeling

| Objects    |  Properties                         |     Messages                     | Output      |
|------------|-------------------------------------|----------------------------------|-------------|
|airport     |planeObject@instancePlaneClass       |checkPlaneInList(@PlaneObject)    |@Boolean     |
|            |planesInAirport[@planesObjects]      |landAPlane(Plane@Object)          |             |
|            |                                     |addPlaneInAirport(Plane@Object)   |             |
|            |                                     |                                  |             |
|            |                                     |                                  |             |
|plane       |planeID@number                       |                                  |             |

# second user story
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

## Domain Modeling

| Objects    |  Properties        |     Messages   | Output      |
|------------|--------------------|----------------|-------------|
|airport     |airportID@number    |                |             |
|            |capacity@number     |                |             |
|            |                    |                |             |

# third user story
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

## domain modeling
| Objects    |  Properties                         |     Messages             | Output      |
|------------|-------------------------------------|--------------------------|-------------|
|airport     |capacity@number                      |landAPlan(Plane@Object)   |             |
|            |#planesInAirport[@planesObjects]     |                          |             |
|            |                                     |                          |             |
|            |                                     |                          |             |
|            |                                     |                          |             |

# fourth user story
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

## domain modeling
| Objects    |  Properties                         |     Messages                         | Output      |
|------------|-------------------------------------|--------------------------------------|-------------|
|airport     |                                     |takeOffPlaneFromAirport(Plane@Object) |             |
|            |                                     |                                      |             |
|            |                                     |                                      |             |
|            |                                     |                                      |             |

## classes
- there is **Airport** class for airports to store airportId, list of planes in airport and capacity of airport
-also have two SETTER,GETTER methods/functions 
that sets the values and provide the values of private properties(encapsulated)
-also have two methods/functions 
-landAPlane tells weather plane can land or no on basis of capacity and already landed planes
-isAirportFull checks airport is full or no
- there is class **Plane** having planeID property

## src files
- **airport.js** -- for *Airport* class
- **plane.js** -- for *Plane* class
- **index.js** -- to actually run program


## specRunner
- to store reference for all test files so we run all test one time

## test-framework
- to store assertEqual function to check tests