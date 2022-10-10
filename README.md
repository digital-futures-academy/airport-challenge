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

About the project
-------

To test drive the creation of a set of classes/objects to satisfy all the user stories. I will also need to use a random number generator to set the weather (it is normally sunny but on rare occasions it may be stormy). In my tests, I'll need to stub random behaviour to ensure consistent test behaviour.

Steps
-------

1. Forked main repo, and cloned this to my local machine
2. `npm install` to install project dependencies
3. Convert stories into a representative domain model and test-drive my work 
4. Created my own README detailing on how I approached each problem
5. Created seperate files for different calss and spec
6. Run my tests using `npm test` or `node specRunner.js`

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

Your code should defend against [edge cases](http://programmers.stackexchange.com/questions/125587/what-are-the-difference-between-an-edge-case-a-corner-case-a-base-case-and-a-b) such as inconsistent states of the system ensuring that planes can only take off from airports they are in; planes that are already flying cannot take off and/or be in an airport; planes that are landed cannot land again and must be in an airport, etc.

Self-review
-------
#### What have I learnt
- Solidified my knowledge on class objects and how to call arguments on it through using the parameters
- Stubbing different scenarios in my test to ensure reliable test behaviour
- Improved knowledge on how to convert each user story into domain models and writing step by step tests based on the table

#### What could I do differently?
- Could have wrote more detailed tests on some of the user stories 
- Using different testing framework such as Jasmine
- Testing with single responsibility: encapsulation, mocking objects, spies in tests etc...

#### What additional/enhanced features I could add to develop this project further?
- Testing for pollution (air, noise etc) that each landing & takeoff generates
- Adding in availability of different runways
- Take into account air traffic control - level of collision risk
