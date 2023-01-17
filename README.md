Airport Challenge
=================

====================================================================
My notes:

**COME BACK TO THIS

"We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off.

You will need to use a random number generator to set the weather (it is normally sunny but on rare occasions it may be stormy). In your tests, you'll need to stub random behaviour to ensure consistent test behaviour."

Objects   Properties                    Methods(messages)            Outputs 
Weather                                 isSunny()                    @Boolean

Thoughts:

1. 
2. Need to restrict plane activity (i.e. do nothing) if weather is stormy.
3. Need to proceed with plane activity if weather is sunny.

Test - When isSunny() returns false then nothing happens.
Test - When isSunny() returns true then plane method(s) can run.

*****************************************

User Story 1

As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

Objects   Properties                    Methods(messages) Outputs 
Plane     id @String                    getId()           @String
Airport   airportPlanes @Array[@Plane]  landPlane(@Plane) @Void

Initial thoughts for Test:

1. Need an Airport
2. Need to be able to land a Plane at the Airport
3. Need airportPlanes list length to increase by 1 when a Plane is landed (added).

Test 1 - airportPlanes length increases when landPlane is called.
Test 2 - landPlane should only add Plane instances to the airportPlanes list.
Test 3 - Edge case: Falsy values (null, undefined, zero, false) should not be added to the airportPlanes list.

---------

User Story 2

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

Objects   Properties                    Methods(messages)            Outputs 
Plane     id @String                    getId()                      @String
Airport   airportPlanes @Array[@Plane]  landPlane(@Plane)            @Void
          airportCapacity @Integer      increaseCapacityTo(@Integer) @Void
                                        

Inital thoughts:

1. Need to set capacity
2. Need to make sure capacity can't be exceeded (i.e. no additional Planes can land when capacity is reached)
3. Need to make sure capacity can be overridden

Test 4 - Default capacity is set on Airport.
Test 5 - Additional Planes cannot land (i.e. be added to airportPlanes list) once capacity is reached.
Test 6 - Default capacity can be overriden.

---------

User Story 3

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

Objects   Properties                    Methods(messages)            Outputs 
Plane     id @String                    getId()                      @String
Airport   airportPlanes @Array[@Plane]  isAirportFull()              @Boolean
                                        landPlane(@Plane)            @Void
          airportCapacity @Integer      increaseCapacityTo(@Integer) @Void


Thoughts:

1. I've tested for this already (got ahead of myself):

Test 5 - Additional Planes cannot land (i.e. be added to airportPlanes list) once capacity is reached.

---------

User Story 4

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

Objects   Properties                    Methods(messages)            Outputs 
Plane     id @String                    getId()                      @String
Airport   airportPlanes @Array[@Plane]  landPlane(@Plane)            @Void
                                        takeoffPlane(@Plane)         @Void
          airportCapacity @Integer      increaseCapacityTo(@Integer) @Void


Thoughts:

1. Need to identify Plane IDs in the airportPlanes array
2. Need to remove specified ID(s) from the array (takeoffPlane(@Plane))
3. Need to confirm that the Plane has left the airport

Test 7 - takeoffPlane from Airport.

---------

User Story 4

As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

Objects   Properties                    Methods(messages)            Outputs 
Plane     id @String                    getId()                      @String
                                        atAirport()                  @Boolean
Airport   airportPlanes @Array[@Plane]  landPlane(@Plane)            @Void
                                        takeoffPlane(@Plane)         @Void
          airportCapacity @Integer      increaseCapacityTo(@Integer) @Void


Thoughts:

1. Check airportPlanes array for Plane ID
2. If PlaneID does not exist in the airportPlanes array when takeoffPlane(@Plane) is called, do nothing
3. If PlaneID exists in the airportPlanes array when landPlane(@Plane) is called, do nothing

Test 8 - Planes which are not at the airport cannot take off.
Test 9 - Planes which are already at the airport cannot land.

---------





Resources used:
https://www.youtube.com/watch?v=IASaK1239y4
https://www.youtube.com/watch?v=0DFvcZwqbDQ
testing-framework.js file copied from Bob's bagels
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor

=====================================================================



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
