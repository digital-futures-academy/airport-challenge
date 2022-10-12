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
5. [Lint](https://eslint.org/docs/user-guide/getting-started) your source code using `npx eslint src` - Optional but recommended!

## Task

We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off. Here are the user stories that we worked out in collaboration with the client:

#### Acceptance Criteria

```
1.As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

2.As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

3.As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

4.As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

5.As an air traffic controller
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

#### Domain Modelling
----

# User Story 1

As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

| Object  | Property             | Messages    | Output  |
| ------- | -------------------- | ----------- | ------- | -------------------------- |
| Airport | planes@array[@plane] | landPlane() | @string | // plane (name) has landed |
| Plane   | state @string        | land()      | @string |
|         | Id                   | getID       | @id     |

# For test 1

1. Test for landPlane()

landPlane needs a plane object, and includes in the list of plane in the airport and output a string when the plane landed saying 'Plane (name) has landed

if the plane is landed successfully the plane name will be in array of planes and will return a string with plane ID.

//arrange

need a instance of airport class
need a object that represents a plane

expected result is that plane is in array of planes

//act
use airport instance (testAirport) and call landPlane passing in plane object

//assert part
expectedOutput is the plane is the list of planes at the airport

1. get array of planes at airport
2. access the plane in the array [i] and get its Id
3. assert that the Id of the array matches the Id of the plane

# User story 2

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

| Object  | Properties      | Message       | Output |
| ------- | --------------- | ------------- | ------ |
| Airport | capacity@number | setCapacity() | number |
| Plane   | planeID         |               |        |

1.create a method that returns the value of the airport capacity (get)
2.to change the capacity, use a method that take capacity

# User story 3

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

| Object   | Property              | Message      | Output |
| -------- | --------------------- | ------------ | ------ |
| Airport  | planesAtAirport@array | planeLand()  | Error  |
| -------- | capacity@number       | ------------ | -----  |
| Plane    | planeID               | ------------ | ------ |

1. test if i can prevent from landing expectedOutput = testAirport.setCapacity()
   2.\* create a new instance of airport

- then use 2 inputs for planes
- set a new capacity for the airport as 1 that when the second plane attempts landing will return a error message asking to abort landing due to airport at full capacity
- use assertTrue to "instanceOf" ERROR

# User story 4

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

| Object  | Properties                  | Message      | Output   |
| ------- | --------------------------- | ------------ | -------- |
| Airport | listOfPlanes[@Array@planes] | land(@plane) | @String  |
|         | capacity                    |              |          |
|         |                             | isFull()     | @boolean |
|         |                             | takeOff()    |          |

1. do 2 tests
2. first one test the if the function works to remove a plane from the array planesAtAirport
3. then on second test checks using includes() to search the array and confirm if the plane was taken off the array, using assertFalse.

# User story 5

As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

| Object  | Property            | Message       | Output   |
| ------- | ------------------- | ------------- | -------- |
| Error   | message @string     |               | @string  |
| Airport | landedPlanes @array | takeOff()     | Error    |
|         |                     | landPlane()   | Error    |
| Plane   | planeID             | isAtAirport() | @boolean |


Build with:
----

* Java Script
* Jasmine
