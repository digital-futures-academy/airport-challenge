Airport Challenge - Matt
=================

Installation Instructions
-------

1. Fork this repo, and clone to your local machine
2. `npm install` to install project dependencies
3. Type program commands in main.js
4. Run program using `node main.js`

For Developers
------

5. Run tests using `npm test` or `node specRunner.js`
6. [Lint](https://eslint.org/docs/user-guide/getting-started) your source code using `npx eslint src`


Task Description
-----

We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off.  Here are the user stories that we worked out in collaboration with the client:

#### User Stories
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

#### Additional User Stories
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


#### Domain Model

| Objects   | Properties                                       | Messages                       | Output                                              |
| --------- | ------------------------------------------------ | ------------------------------ | --------------------------------------------------- |
| Plane     |                                                  | constructor(@String)           | @Plane                                              |
|           | name (@String)                                   | name                           | @String                                             |
|           | airport (@String) "airport name" / "in flight"   | airport                        | @String                                             |
|           |                                                  | landPlane(@Plane)              | should this only be included in Airport messages?   |
| --------- | ------------------------------------------------ | ------------------------------ | --------------------------------------------------- |
| Airport   |                                                  |                                |                                                     |
|           |                                                  | constructor(@String, @Number)  | @Airport                                            |
|           | - name (@String)                                 | name                           | @String                                             |
|           | - capacity (@Number)                             | capacity                       | @Number                                             |
|           |                                                  | -changeCapacity(@Number)       | log “capacity changed to newCapacity”               |
|           |                                                  |                                |                                                     |
|           | - planes (@Array)                                | - planes                       | @Array                                              |
|           |                                                  | - landPlane(@Plane)            | @Plane/@Error, console.log                          |
|           |                                                  | - takeOffPlane(@Plane)         | @Plane/@Error, console.log                          |


#### My Approach

Using test driven development, I created the above domain model for the project. Following this I wrote a test for each class, method, property and function. Once I had a failing test I wrote source code to pass each test. This allowed me to keep a clear goal in mind and catch bugs that I otherwise wouldn't have. I kept separate classes and their tests in separate files in line with good development practice.

I decided to make two classes, Plane and Airport. Instances of the Plane class have name and airport  properties (both strings) and instances of the airport class have name, capacity and planes properties (string, number, array respectively). The Airport class contains methods for taking off and landing planes, as well as a method to change an instance's capacity.

I have tested edge cases such as landing a plane that is already at an airport or landing a plane when the airport is full. My test framework includes assertion functions such as assertArrayOfPrimitivesEquals to check that two arrays contain the same elements, and assertErrorEquals to check that two returned errors are equivalent.

One aspect of my code that I think could be improved on is that the Plane and Airport classes are currently tightly coupled. In particular the landing and take off methods of the Airport class directly reassign the airport property of Plane instances. With more experience I would like to avoid this in future, but may need some guidance. In a similar way, the tests I have written for the Airport class are tightly coupled to the Plane class. To improve this I could use a mock class next time.



