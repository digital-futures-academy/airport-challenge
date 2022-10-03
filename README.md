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

### Acceptance Criteria

**User Story 1**
```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```

**Domain Model**

Plane -- [landPlane] --> Airport (array of planes)

| Objects   | Properties                        | Messages                     | Output  |
| --------- | --------------------------------- | ---------------------------- | ------- |
| Airport   | arrPlanes(@array[@Plane])         | landPlane(@Plane)            | -       |
| Plane     |

**Tests**

1(a). Return string confirming plane has landed, and/or

1(b). Check array length, and/or

1(c). If plane has ID, check ID of expected plane with the landed plane


**User Story 2**
```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```

**Domain Model**

Airport -- defaultCapacity(@integer) -- [setCapacity] --> newCapacity(@Integer)

| Objects   | Properties                        | Messages                     | Output  |
| --------- | --------------------------------- | ---------------------------- | ------- |
| Airport   | Capacity(@integer)                | setCapacity(@integer)        | -       |


**Tests**
1. Check default capacity
2. Check new capacity


**User Story 3**
```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```

**Domain Model**

Airport(@array[@plane]) -- isCapacityFull(@boolean) -- if capacity:([landPlane] with message (@string)), if no capacity: send error message (@string)

| Objects   | Properties                        | Messages                     | Output  |
| --------- | --------------------------------- | ---------------------------- | ------- |
| Airport   | arrPlanes(@array[@Plane])         | landPlane(@Plane)            | @string ("[@Plane] cleared for landing!") 
|           |                                   |                              | @string("Sorry, airport is full.")  |
|           | Capacity(@integer)                | setCapacity(@integer)        | -       |
|           |                                   | isCapacityFull(@boolean)     | @boolean|

**Tests**
1. When new plane is trying to land, check if set capacity has been reached. If there is capacity, [landPlane] with message "[plane] cleared for landing!". If no capacity, prevent landing with error message "Sorry, airport is full."
2. Check array length of planes at the airport


**User Story 4**
```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```
**Domain Model**

Airport (@array[@plane]) -- [takeOff[@plane]]

| Objects   | Properties                        | Messages                     | Output  |
| --------- | --------------------------------- | ---------------------------- | ------- |
| Airport   | arrPlanes(@array[@Plane])         | takeOff(@Plane)              | @string "[Plane] cleared to take off.")       |


**Tests**

1. Return string specifying ID of plane that has taken off
2. Check plane ID against array of planes at airport, expect false result. Return array of planes after take off
3. Check number of planes at airport before and after take off

```
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
