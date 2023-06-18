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






Domain Models

User Story 1

As an air traffic controller
I want to instruct the airport to land a plane
So I can get passengers to a destination


-Objects;     -Properties;                            -Messages;                      -Output;

-Plane;       -planeID @String;                     


-Airport;     -listOfPlanesAtAirport @Array[Plane];   -instructToLand(@Plane);       -@Void;


User Story 2

As the system designer
I would like a default airport capacity that can be overridden as appropriate
So that the software can be used for many different airports

-Objects;     -Properties;                      -Messages;                                          -Output;

-Airport      -airportID @Number;
              -airportMaxCapacity @Number;      -setAirportMaxCapacity(@Number);                    -@Void;




User Story 3

As an air traffic controller
I want to prevent landing when the airport is full
To ensure safety

-Objects;     -Properties;                            -Messages;                      -Output;

-Airport      -airportCapacity @Number;               -isAirportFull();               -@Boolean;
              -listOfPlanesAtAirport @Array[@Plane];

-Plane                  



User Story 4 Original

As an air traffic controller
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
So I can get passengers on the way to their destination

I think splitting the user story into 2 parts helps with clarity and precise functionality. Might make the SO part make less sense.

User Story 4.1

As an air traffic controller
I want to instruct the airport to let a plane take off 
So I can get passengers on the way to their destination


-Objects;     -Properties;                            -Messages;                      -Output;

-Airport      -airportID @String                      -instructToTakeOff(@Plane)      -@Void
              -listOfPlanesAtAirport @Array[Plane];

-Plane        -planeID @String


User Story 4.2

As an air traffic controller
Confirm that a plane is no longer in the airport
So I can get passengers on the way to their destination

-Objects;     -Properties;                            -Messages;                      -Output;

-Plane        -planeID @String
                                   
-Airport      -listOfPlanesAtAirport @Array[Plane];   -checkPlaneAtAirport(@Plane)     -@Boolean  
              -airportID @String    



User Story 5 Original

As an air traffic controller
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
To avoid confusion

I think splitting the user story into 2 parts helps with clarity and precise functionality. However both can be done with same Model.
This however will require going back to land and takeoff tests since new property (inFlight) will determine if method calls are allowed

User Story 5.1

As an air traffic controller
I want to prevent asking the airport to let planes take-off which are not at the airport
To avoid confusion

User Story 5.2

As an air traffic controller
I want to prevent asking the airport to land a plane that's already landed
To avoid confusion

-Objects;     -Properties;                            -Messages;                      -Output;

-Plane        -planeID @String
              -inFlight @Boolean                      -getInFlight()                  -@Boolean    



Extended   

User story 6

As an air traffic controller
I want to prevent takeoff when weather is stormy
To ensure safety

User Story 7 

As an air traffic controller
I want to prevent landing when weather is stormy
To ensure safety

I have made the decision that each airport would have its own weather monitoring equipment, therefore weather should be airport based. 
Not tying safe/non-safe strictly to sunny/stormy. Leaves room for other types such as windy, snow or ice, which then can be deemed true or false for being safe
Also both stories can use same model. 

-Objects;     -Properties;                            -Messages;                      -Output;

-Airport      -weatherSafeForAction @Boolean          -weatherSafeForAction()         -@Boolean
                                                      -weatherGenerator()             -@number  


User Story 8

As an air traffic controller
Planes that have landed must be at an airport
To count planes easily   


-Objects;     -Properties;                            -Messages;                      -Output;
-Airport      -numberOfPlanesAtAirport @number        -numberOfPlanesAtAirport()      -@Number

-Plane        -atAirport @boolean                     -setPlaneAtAirport(@boolean)    -@void                                                     
                                                      -getPlaneAtAirport()            -@boolean
