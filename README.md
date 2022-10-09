Airport Challenge
=================

## About the project

* This project was set in Week 1 of the Digital Futures Academy to test the understanding of the knowledge I gained in Week 1 of the Academy.
* The project was set on the 30/09/22 and the deadline date was 10/10/22.
* The task was to test drive the creation of a set of classes/objects to satisfy the defined user stories below

This project aims to test my understanding of which I had gained in Week 1 of the Academy: 
1. Using User Stories 
2. Creating Domain Models from user stories
3. Performing Test-Driven Development (TDD) using a simple test-framework 
4. Committing after every passing test  
5. Development using multiple classes/objects

## Built with
This project was built with:
- JavaScript
- Visual Studio Code IDE
- Node.js 

## Getting Started

### Pre-requisites
-----------------

The pre-requisites to run the tests for this project are:
- Installation of Node.js dependent on your Operating System (choose the LTS version)
- Installation of Visual Studio Code
- Fork this project from this repository and run the git clone "your-forked-repo-url" from wherever you wish to place this project on your machine

### Installation
----------------

- Run npm install in the terminal to download the project's dependencies

### Testing
-----------
How to run the all tests:

Right click on the specRunner.js file in the Explorer pannel of VS Code and click Open in Integrated Terminal. In the the terminal type node specRunner.js and all tests will run.

### Project Structure
---------------------
- Contained within the src\ folder are all the source code files: airport.js and plane.js
- Contained within the test\ folder are all the test files: airport.spec.js and plane.spec.js
- At the root of the folder is the testing-framework.js file which contains a simple testing-framework used to drive TDD
- Also at the root of the folder is the specRunner.js file which can be used to run all the test files in this project

## Problem Statement

The problem as defined by Digital Futures Academy is below

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

## Domain Models and Tests

These are the domain models I created from the user stories above. I have provided the reasoning for why I have designed the domain models in the way they are. Also below each domain model are the tests I thought of, then wrote within the spec.js files, before writing the production to pass a test and then collectively handle a user story.

I treated each domain model seperately.

1.

```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```

| Objects | Properties                  | Messages          | Outputs  |
| ------  | --------------------------  | --------          | ------   |
| Airport | parkedPlanes @Array[@Plane] | landPlane(@Plane) | @string  |
| Plane   | planeId @number             | getId()           | @number  |

Reasoning: Two objects of Airport and Plane. `landPlane()` method proposed to add `Plane` objects to a `parkedPlanes` array (of Plane objects)
which signafies landed planes at an airport. Also gave `Plane` object a `planeId` property that returns a number that uniquely identifies a plane. `lanePlane()` method will use `getId()` method as string literal within a string return message that signifies which plane has landed. The `planeId` number will be set via a constructor.

### Tests

Test 1a - Validation - check if the length of an empty `parkedPlanes` array increases by 1 when `landPlane()` is called - returns true if so <br>
Test 1b - Verification - Check if a plane object is added to the `parkedPlanes` array when `landPlane()` is called - matches the return string from the `landPlane()` method call with the expected string for this method - returns true when matched <br>
Test 1c - Check if calling `getID()` returns the correct `planeID` value for a `Plane` object

2.

```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```

| Objects | Properties                 | Messages                    | Outputs|
| ------  | -------------------------- | --------                    | ------ |
| Airport | airportCapacity @number    | setAirportCapacity(@number) | @Void  |

Reasoning: Proposed an `airportCapacity` property for `Aiport` objects. This will have a default value set to it by the constructor for this class.
Proposed a `setAirportCapacity()` method that can allow the default value for the `airportCapacity` property to be overriden and assigned at the point of the method call on a given `Airport` object.

### Tests
Test 2a - Check if the `airportCapacity` property for an `Airport` object has been set with the `setAirportCapacity()` method - returns true if `airportCapacity`'s value matches the value used as a parameter for `setAirportCapacity()`. <br>
Test 2b - Check if the `airportCapacity` property for an `Airport` object has been set as the default value using the `Airport`class constructor - returns true if `airportCapacity`'s value matches the default value of the constructor.  

3.

```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```

| Objects | Properties                  | Messages                    | Outputs   |
| ------  | --------------------------  | --------                    | ------    |
| Airport | airportCapacity @number     | isAirportFull()             | @boolean  |
|         | parkedPlanes @Array[@Plane] | landPlane()                 | @string   | 
| Plane   |                             |                             |           |


Reasoning: Proposed an `isAirportFull()` method that returns a boolean value depending on if the length of the `parkedPlanes` array is equal to
the the value of `airportCapacity` for an instance of the `Aiport` class. Proposed a `landedPlane()` method that returns a string to 
signify that a plane can or cannot land depending on the result of the `isAirportFull()`.

### Tests
Test 3a - Verification - Check that `landPlane()` returns a string stating that a given plane can not land at the airport as it is full <br>
Test 3b - Validation - Check that `isAirportFull()` returns true when `parkedPlanes` array length property matches the `airportCapacity` property

4.

```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```

| Objects | Properties                  | Messages                         | Outputs   |
| ------  | --------------------------  | --------                         | ------    |
| Airport | parkedPlanes @Array[@Plane] | takeOffPlane(planeId @number)    | @string   | 
| Plane   | planeId @number             | getID()                          | @number   |

Reasoning: Proposed a `planeId` property and `getID()` method for a `Plane` object that returns a number which represents a unique id each `Plane` object has. Proposed a `takeOffPlane()` method that takes `planeId` as a paramater. It searches for a specific plane with a matching id in the
`parkedPlanes` array and then pops it from the array. The `takeOffPlane()` method also returns a string to signify the specific plane is no longer at
the airport by using the `getID()` method for the `Plane` object and using it for the message it returns via string. 

### Tests

Test 4a - Verification - The return string from the `takeOffPlane()` method call shows the correct plane object by it's `planeID` value has been removed from the `parkedPlanes` array - matches the return string from the `takeOffPlane()` method call with the expected return string for this method - returns true when matched <br>
Test 4b - Validation - check if the length of an `parkedPlanes` array decreases by 1 when `takeOffPlane()` is called 

5.

```
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```

| Objects | Properties                  | Messages                         | Outputs   |
| ------  | --------------------------  | --------                         | ------    |
| Airport | parkedPlanes @Array[@Plane] | takeOffPlane(planeId @number)    | @string   | 
| Airport | parkedPlanes @Array[@Plane] | landPlane(@Plane)                | @string   |
| Airport | parkedPlanes @Array[@Plane] | isPlaneAtAirport(planeId @number)| @boolean  |
| Plane   | planeId @number            | getID()                           | @number   |

Reasoning: Proposed `isPlaneAtAirport()` method that checks if the specified plane given by it's `planeId` is at the airport or not by checking to see if a `Plane `object with a matching `planeId` value is within the `parkedPlanes` array, it will return a boolean value. The methods `takeOffPlane()` and `landPlane()` will have implementation to denote that someone has tried to let a plane take-off which is not at the airport or land a plane that's already landed. This will be returned by a string.

### Tests

Test 5a - `isPlaneAtAirport()` returns true if a matching plane object identified by it's id is in the `parkedPlanes` array <br>
Test 5b - `isPlaneAtAirport()` returns false if a plane object is not matched in the `parkedPlanes` array <br>
Test 5c - `takeOffPlane()` returns a string stating that a plane is not at the airport so it can not take off if it is not in the `parkedPlanes` array
<br>
Test 5d - `landPlane()` returns a string stating that a plane has already landed if it is in the parkedPlanes array

