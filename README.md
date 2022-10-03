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

I treated each domain model seperately.

```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```

| Objects | Properties                  | Messages          | Outputs|
| ------  | --------------------------  | --------          | ------ |
| Airport | parkedPlanes @Array[@Plane] | landPlane(@Plane) | @Void  |
| Plane   |                             |                   |        |

Reasoning: Two objects of Airport and Plane. landPlane() method proposed to add Plane objects to a parkedPlanes array (of Plane objects)
which signafies landed planes at an airport.

```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```

| Objects | Properties                 | Messages                    | Outputs|
| ------  | -------------------------- | --------                    | ------ |
| Airport | airportCapacity @number    | setAirportCapacity(@number) | @Void  |

Reasoning: Proposed an airportCapacity property for Aiport objects. This will have a default value set to it by the constructor for this class.
Proposed a setAirportCapacity() method that can allow the default value for the airportCapacity property to be overriden and assigned at the point of the method call on a given Airport object.

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


Reasoning: Proposed an isAirportFull() method that returns a boolean value depending on if the length of the parkedPlanes array is equal to
the the value of airportCapacity for an instance of the Aiport of the class. Proposed a landedPlane() method that returns a string to 
signify that a plane can or cannot land depending on the result of the isAirportFull().

```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```

| Objects | Properties                  | Messages                         | Outputs   |
| ------  | --------------------------  | --------                         | ------    |
| Airport | parkedPlanes @Array[@Plane] | takeOffPlane(planeId @number)    | @string   | 
| Plane   | planeId @number             | getID()                          | @number   |

Reasoning: Proposed a planeId property and getID() method for a Plane object that returns a number which represents a unique id each Plane object has. Proposed a takeOffPlane() method that takes planeId as a paramater. It searches for a specific plane with a matching id in the
parkedPlanes array and then pops it from the array. The takeOffPlane method also returns a string to signify the specific plane is no longer at
the airport by using the getID() method for the Plane object and using it for the message it returns. 

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

Reasoning: Proposed isPlaneAtAirport() method that checks if the specified plane given by it's planeId is at the airport or not by checking to see if a Plane object with a matching planeId value is within the parkedPlanes array. The methods takeOffPlane() and landPlane will have implementation to denote that someone has tried to let a plane take-off which is not at the airport or land a plane that's already landed. This will be returned by a string.