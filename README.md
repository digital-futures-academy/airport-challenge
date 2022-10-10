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

## Domain Models

### User Story 1

```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```

#### Domain Model

| Objects     | Properties                  | Messages   | Output   |
| ----------- | ---------------             | ---------- | -------- |
| Airport     | planesAtAirstrip@Array      | landplane(plane)@String| @String |


#### Tests

1. Test that a plane is added to the array
2. Test that when plane is added it returns a string


---

## User Story 2

```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```

#### Domain Model

| Objects     | Properties | Messages     | Output   |
| ----------- | ---------- | ------------ | -------- |
| Airport | capacity@Number | changeCapacity(capacity@Number)  | @Void |



#### Tests

1. Test that the capacity can be set and changed when airport is created


---

## User Story 3

```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```

### Domain Model

| Objects     | Properties      | Messages     | Output   |
| ----------- | --------------- | ------------ | -------- |
| Airport | capacity@Number | changeCapacity(capacity@Number)  | @Void |
|     | planesAtAirstrip@Array      | landplane(plane)@String| @String |

#### Tests
1. Test that the if the planes array length is greater or equal to the capacity, the plane should not be added.
2. Test that landplane function can return a string confirming either plane can land or airport is full.

---

## User Story 4 


```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```

### Domain Model

| Objects     | Properties             | Messages         | Output   |
| ----------- | ---------------------- | ---------------- | -------- |
| Airport     | planesAtAirstrip@Array      | planesTakeOff(plane)@String| @String |
|             |                        |                  |          |

#### Tests

1. Test that calling planesTakeOff removes plane from the array
2. Test that calling planesTakeOff returns a string when plane is removed

---

## User Story 5 

```
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```

### Domain Model

| Objects     | Properties             | Messages         | Output          |
| ----------- | ---------------------- | ---------------- | --------------- |
| Airport     | planesAtAirstrip@Array      | landplane(plane)@String| @String |
|     | planesAtAirstrip@Array      | planesTakeOff(plane)@String| @String |
|             |                        | isPlaneAtAirport(plane)@String  |@Boolean        |

#### Test

1. Test that calling isPlaneAtAirport returns true when plane is within the array
2. Test that calling isPlaneAtAirport returns false when plane is not in the array
3. Test that if plane exists in airport array returns a message
4. Test that if plane does not exists in airport array returns a message
5. Test that if plane exists in airport array does not get added to the array
6. Test that if plane exists in airport array its can be removed from list


---


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

### Project Review and Roadmap
#### Main Takeaways and experience from project:

The main points and experience I gained from creating the airport project is TDD (Test Driven Development) and Domain modeling. 
Using Domain modeling allowed me to map out where I needed to start my project. Learning and creating user stories for each problem helped me visualize what function I needed to create and data types to use e.g (arrays, strings, number etc). Developing user stories allowed me to model the outputs I required and the methodology behind it to use.

Creating a project without testing can lead to many errors and problems that can later on catch you further within the project. In this case TDD benefited me to create tests FIRST for my methodology and then allowed me to add and test new functionality with less rework required. TDD increased the speed of creating my functions as less time was spent on debugging, testing the methods first seeing them fail and working backwards to making them pass almost makes your function future proof for any rework or changes.

#### What I would have done differently:
1. Decoupling/Encapsulation my classes/code. I would have decoupled my code making a class for each plane and airport and weather, so they not tightly coupled together for them to work.Creating seprate classes allows me to simplfy my code see how the process works when for example calling a plane can it land at the airport checks the airport to see if its not full. This allows me and another user to help visualize how the code works step by step. 
Encapsulation on my classes, making their properties private to themselves allows less changes and errors when using them in the tests.

2. Clean up my code. The testing file (spec.js) looks very chaotic. I would have like to use a testing framework such as Jasmine to test my code. Jasmine would have allowed me to use its methods mainly (describe and it code blocks). Describe and it would have allowed me to group my tests in a testing suite for a particular user story making it clear and understandable for another user to see what is being tested.

3. The use of beforeEach and AfterEach methods from jasmine, would be beneficial as I would not need to write each time and action of the function to test if it works. I could have it done at the beginning of each test suite and it would have been avaiable for each individual test.

4. The use of spyFunctions and mocktest. SpyFunctions would have allowed me to test if my decoupling is working by checking if a function is another class is being called when used regardless of the logic within the function. Mocktests would helped decoupled the tests file removing requirements from the source file, testing like dummy of the classes functions to see if they do the same logic/function.

#### Future Plans:

