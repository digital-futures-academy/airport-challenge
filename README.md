# Airport Challenge

``````
         ______
        __\____\___
=  = ==(____DFA____)
           \_____\__________________,-~~~~~~~`-.._
          /     o o o o o o o o o o o o o o o o  |\_
          `~-.__       __..----..__                  )
                `---~~\___________/------------`````
                =  ===(_________)

``````

## Instructions

- Feel free to use google, your notes, books, etc. but work on your own.
- Keep it SIMPLE - it's not nearly as complicated as it first may look.
- You must [submit your challenge](https://airtable.com/shrUGm2T8TYCFAmjN) by the deadline, wherever you get to.
- Use your own test framework and evidence your test-driven development by committing on passing tests.
- Please write your own README detailing how to install your project, how to run the tests, how you approached the problem and provide screenshots of interacting with your program.
- If you refer to the solution of another coach or student, please put a link to that in your README.
- Please create separate files for every class, module, and spec.

## Steps

1. Fork this repo, and clone to your local machine
2. `npm install` to install project dependencies
3. Convert stories into a representative domain model and test-drive your work.
4. Run your tests using `npm test` or `node specRunner.js`
5. OPTIONAL: [Lint](https://eslint.org/docs/user-guide/getting-started) your source code using `npx eslint src`.

## Task

We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off. Here are the user stories that we worked out in collaboration with the client:

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

#### Domain Models

### User Story 1

```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane.
```

#### Domain Model 1

| Objects | Properties                | Messages         | Output |
| ------- | ------------------------- | ---------------- | ------ |
| Airport | planeIds @Array [@String] | landPlane(plane) | @void  |
|         |                           |                  |        |
| Plane   |                           |                  |        |
|         |                           |                  |        |

#### Test 1

1. Test that `landPlane()` will land a `Plane` to the `planeIds`, increasing its length by 1.
2. Test that `Plane` with null is not added to `planeIds`.
3. Test that `Plane` with undefined is not added to `planeIds`.

### User Story 2

```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate.
```

#### Domain Model 2

| Objects | Properties       | Messages           | Output  |
| ------- | ---------------- | ------------------ | ------- |
| Airport | capacity @Number | overrideCapacity() | @Number |
|         |                  |                    |         |

#### Test 2

1. Test that every instance of `Airport` is initialized with a `capacity`
2. Test that `overrideCapacity()` will increase `capacity` when a positive number is passed to it.
3. Test that `overrideCapacity()` will decrease `capacity` when a negative number is passed to it.
4. Test that only `Number` and `Float` types are passed into `overrideCapacity()`.
5. Test that `overrideCapacity` should throw an error if `Airport` is to be reduced to less than `0`.
6. Test that `overrideCapacity` will do nothing when `0` is passed to it.

### User Story 3

```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```

#### Domain Model 3

| Objects | Properties       | Messages            | Output   |
| ------- | ---------------- | ------------------- | -------- |
| Airport | capacity @Number | prevent landPlane() | @Void    |
|         |                  | isAirportFull()     | @Boolean |

#### Test 3

1. Test that `isAirportFull()` returns true if airport is full and false otherwise.
2. Test that prevent `landPlane()` will disallow plane from landing in airport if airport is full.

### User Story 4

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

#### Domain Model 4

| Objects | Properties                | Messages           | Output   |
| ------- | ------------------------- | ------------------ | -------- |
| Airport | planeIds @Array[@Strings] | takeOff(plane)     | @Void    |
|         |                           | isPlaneInAirport() | @Boolean |
| Plane   | name @String              |                    |          |

#### Test 4

1. Test that `takeOff()` is able to take `Plane` off the `planeIds`, decreasing its length by 1
2. Test that `isPlaneInAirport` returns true if plane is in airport and false otherwise

### User Story 5

As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed.

#### Domain Model 5

| Objects | Properties               | Messages                | Output   |
| ------- | ------------------------ | ----------------------- | -------- |
| Airport | planeIds @Array[@String] | preventTakeOff(plane)   | @Void    |
|         |                          | preventLanding(plane)   | @Void    |
|         |                          | isPlaneInAirport(plane) | @Boolean |
| Plane   | name @String             |                         | @String  |

#### Test 5

1. Test that `takeoff()` throws error if plane not in airport.
2. Test that `landPlane()` throws error if plane is already in airport
