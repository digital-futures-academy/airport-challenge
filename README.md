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

****
**My Approach**
```
1. Read User Stories and created domain models.
2. Created separate spec files for testing-framework, specRunner and objects 'airport' and 'plane'. Used require statements to import modules.
3. Used assertEquals to compare two values to see if they are equal.
4. Declared a planeLanded[] array(property of airport object) to keep track of the planes that have landed at the airport. The 'land' function is responsible for adding planes to the array and the 'takeOff' function removes the plane from the array.
5. I created various functions to meet the user stories' requirements and edge cases:
   - Test 1: 'Land' function is responsible for handling the landing of the plane. Takes the parameter 'plane' which represents the object that needs to land. 
   - Test 2: To make sure the default capacity could be overridden, I created an 'updateCapacity' function that takes a parameter of 'newCapacity' that should assign a new capacity value to the 'defaultAirportCapacity' property of the 'airport' object. 
   - Test3 : To allow an airport to instruct a plane to take off, I had the 'expected' value = true and 'actual' equal the airport.takeOff(plane) function. 
   - Test4: To prevent landing a plane when the airport is full, I used the 'for' loop seen in the Airport Spec file for 'Test 4', which iterates 'airport.defaultAirportCapacity', and in each iteration of the loop it calls the 'land' function of the 'airport' object and passes 'plane' as an argument. It's meant to simulate the airport filling up to reach its max capacity by continuously calling the 'land'function.
   - Test 5: This test is meant to see if the airport prevents the plane from taking off when it is not at the airport. This test makes use of the 'airport.takeOff(plane)' function to represent the 'actual' result if the plane is able to take off/ isn't at the airport. 
   - Test 6: This test checks if the plane is or isn't at the airport. A property called 'location' was created to be used and updated depending on the location of the plane. It utilizes 'plane.isAtAirport' to determine if the plane is at the airport.
   - Test 7: This test prevents a flying plane from taking off. It uses 'plane.isPlaneFlying' to determine if the plane is flying or not which will determine if it can take off.
6. I created an index, airport and plane src files for production code:
   - The 'land' function checks two conditions; 'this.planeLanded.length' is greater than or equal to 'this.defaultAirportCapacity' or if the plane is already present in the array it returns 'false'. If none of the conditions are met, it adds the 'plane' to the array with the 'push' method and returns 'true'.
   - The 'takeOff' function checks two conditions: if a plane is flying or if it's not at the airport. If neither condition is true, the function looks for the index of 'plane' in 'this.planeLanded' using : 'this.planeLanded.indexOf(plane)'. If 'plane' is found, it is removed from the array using the splice method and returns true. If 'plane' is not found, it does not execute the code in the 'if' block and returns false.
   - 'isAtAirport' checks if 'this.location' is equal to 'airport' for the 'plane' object and if '!this.isPlaneFlying()' is true; this expression should return either 'true' or 'false'. Similarly, with 'isPlaneFlying' function checks if the location is equal to 'flying' and returns true or false. 
   - Index.js file is meant to share information with the user via console.log statements about a variety of operations such as; whether the airport can land a plane, how many planes there are, what the default capacity is and what it's been updated to, if another plane is flying and if the airport can instruct a plane at the airport to take off. If the code is run from index.js, it should output those results. Within the index.js file, 'const plane1 = Object.create(plane)' is meant to inherit the properties of the 'plane' object and create a new instance to further test the functionality of the 'airport' module and how it interacts with the 'plane' module.
```
**How to install**
```
You should be able to use git clone and clone the challenge to your local machine to view the code and run the tests.

```
**Tests**
```
1. Test if airport was instructed to land the plane.
2. Test if airport capacity can be overridden.
3. Test to allow airport to instruct plane to take off.
4. Test to prevent landing when airport is full.
5. Test to prevent an airport from instructing a plane to take off if it's not at the airport.
6. Test if plane is at the airport.
7. Test that planes that are already flying cannot take off nor be at an airport.

```
**How to run tests**
```
$ cd specs
node specRunner

To run the code from the Index.js file, make sure you are in the integrated terminal for index.js and then run the code as normal.

```
**Domain Models**
---------
 #1 As an air traffic controller
    So I can get passengers to a destination
    I want to instruct the airport to land a plane

|   Objects	 |     Properties	         |            Messages	              | Output   |
|  --------- | :-------------------:   | :----------------------------------:| :-------:|
|   Airport  | planeLanded(@Array)     |        land(@plane)                 | @Boolean |
|   Plane    | location(@String)       |  isAtAirport(@plane)                | @Boolean |
   

#2 As the system designer
   So that the software can be used for many different airports
   I would like a default airport capacity that can be overridden as appropriate

|  Objects	 |     Properties	             |       Messages	            | Output   |
|  --------- |:--------------------------: |:-------------------------: |:-------: |
|   Airport  | defaultAirportCapacity(Int) | updateCapacity(newCapacity)| @Int     |

#3 As an air traffic controller
   To ensure safety
   I want to prevent landing when the airport is full

|  Objects	 |     Properties	               |         Messages	        | Output   |
|  --------- |:----------------------------: | :------------------------: |:--------:|
|   Airport  |  defaultAirportCapacity( Int) |       land(@plane)         | @Boolean |
                                             
#4 As an air traffic controller
   So I can get passengers on the way to their destination
   I want to instruct the airport to let a plane take off and confirm that it is no longer at the airport

|   Objects	 |     Properties	             |       Messages	                         | Output   |
|  --------- |   :-----------------------: | :--------------------------------------:|:--------:|
|  Airport   |                             |     takeOff(@Plane)                     | @Boolean |
|  Plane     |  	                         |     isAtAirport(@Plane), isPlaneFlying()| @Boolean |
         
#5 As an air traffic controller
   To avoid confusion
   I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

| Objects	 |     Properties	             |       Messages	            | Output   |
|  --------- |:---------------------------:| :-------------------------:|:--------:|
|  Airport   |                             |     takeOff(@Plane)        | @Boolean |
|  Plane     |  	                         |     isAtAirport(@Plane)    | @Boolean |

