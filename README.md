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

# Acceptance Criteria
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

# Extended Acceptance Criteria
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



## Domain Models

### User Story 1

```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```
#### Domain Model
```
|  Objects   |  Properties                   |  Messages                 |  Output  |
| ---------- | ----------------------------  | --------------------------| -------- |
| Airport    | planesAtAirport @Array[@Plane]| landPlane(@Plane)         | @Void    |
| Plane      |                               |                           |          |

```
#### Tests

1. add a plane to an empty Airport using landPlane() and expect array (planesAtAirport) has increased in length to 1.
2. test that plane landed in airport is actually in the landedPlanes array.
3. plane without an id is not added to the landed

---
---
---

### User Story 2

```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```
#### Domain Model
```
|  Objects   |  Properties              |   Messages                     |  Output  |
| ---------- | ------------------------ | ------------------------------ | -------- |
| Airport    | airportCapacity @Integer | changeAirportCapacity(@Integer)| @Void    |
|            |                          |                                |          |

```
#### Tests 

1. test that calling changeAirportCapacity increases airport capacity to 5.
2. test that passing in a capacity which is still a number as a string increase airport capacity.
3. test that passing in an actual String of words doesn't increase airport capacity.  

---
---
---

### User Story 3

```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```

#### Domain Model
```
|  Objects   |  Properties                    |   Messages              |  Output     |
| ---------- | -------------------------------|-----------------------  | ----------- |
| Airport    | airportCapacity @Integer       | isAirportFull(@Integer) | @Boolean    |
|            | planesAtAirport @Array[@Plane] | landPlane(@Plane)       |             |
| Plane      | id @String                     |                         |             |

```
#### Tests
1. test that airportCapacity doesn't change when landPlane is called.

---
---
---

### User Story 4

```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```

#### Domain Model
```
|  Objects   |  Properties                    |   Messages                      |  Output  |
| ---------- | ------------------------------ | ------------------------------- | -------- |
| Airport    | planesAtAirport @Array[@Plane] |   takeOffPlane(@Plane)          | @String  |
|            |                                |   isPlaneAtAirport(@Plane)      | @Boolean |
| Plane      | id @String                     |                                 |          |

```
#### Tests
1. test that calling takeOffPlane will remove a plane and that the planesAtAirport array has decreased by 1.
2. test that the plane that is removed from the planesAtAirport array is the item passed through takeOffPlane.

---
---
---

### User Story 5

```
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport
```

#### Domain Model
```
|  Objects   |  Properties                    |   Messages                    |  Output  |
| ---------- | ------------------------------ | ----------------------------- | -------- |
| Airport    | planesAtAirport @Array[@Plane] | isPlaneAtAirport(@Plane)      | @Boolean |
| Plane      | id @String                     |                               |          |
|            |                                |                               |          |

```
#### Tests  
1. test that @Plane passed to takeOffPlane is not in the planesAtAirport array.
2. test that the planesAtAirport length shouldn't change after calling takeOffPlane.

---
---
---
### User Story 6

```
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to land a plane that's already landed
```

#### Domain Model
```
|  Objects   |  Properties                   |   Messages                    |  Output  |
| ---------- | ----------------------------- | ----------------------------- | -------- |
| Airport    | planesAtAirport @Array[@Plane]|  landPlane(@Plane)            | @Void    |
|            |                               |  isPlaneAtAirport(@Plane)     | @Boolean |
| Plane      | id @String                    |  isPlaneLanded()              | @Boolean |

```
#### Tests

1. test that @Plane passed to the landPlane is not already in the planesAtAirport array.
2. test that the planesAtAirport length shouldn't change after calling landPlane.

