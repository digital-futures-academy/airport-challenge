Airport Challenge 
Due Date: 23/01/2023
Matt Jones
SE-2301-A

To run tests:
`npm install` to install project dependencies
node specRunner.js within the terminal

Task:

We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off.  Here are the user stories that we worked out in collaboration with the client:

First User Story:

As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

| Objects | Properties                  | Messages              | Outputs |
| ------- | --------------------------- | --------------------- | ------- |
| Plane   | tailNumber @string          | addPlane(Plane)       | @string |
| Airport | slotsOccupied @array[Plane] | addPlane(@tailNumber) | @string |
|         |                             |                       |         |

Thoughts First User Story:

I Need an Airport
I Need to Land a Plane at the Airport
Airport Plain count should increase by 1 when Plane has landed

Tests:
Test 1 - Airport Plane count increases when Plane is at the Airport 
         
Building Test 1:
Make file /specRunner.js in test folder to run ALL tests from 1 location (Populate with required files as created using require(`./`).
Make file /testing-framework.js in test folder to house functions required for testing?
Built Airport.spec.js, initial tests failed as no Airport or Plan class set up. Built Airport class and plane class, test failed as no plane string present in the airport array. Test passed when plane class was run. 

Second User Story:

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

| Objects | Properties                   | Messages   | Outputs |
| ------- | ---------------------------- | ---------- | ------- |
| Airport | slotsAvailable @array(plane) | addPlane() | @array  |
|         |                              |            |         |
| Plane   | tailNumber @string           |            | @string |

Building Test 2:

Class Airport already exists so adding additional function to the class.
Test wether the expected number of slots is the same as the actual number of slots 
Look into sparse arrays?
Have run an if statement to check length of slotsOccupied array and set to a default length of 10.
Able to add a plane and override the default length.

Third User Story:

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

| Objects | Properties                       | Messages    | Outputs  |
| ------- | -------------------------------- | ----------- | -------- |
| Airport | slotsAvailable @array(setLength) | setLength() | @integer |
|         |                                  |             |          |
|         |                                  |             |          |

Building Test 3:

Need to check the slotsOccupied array contents and the remaining slotsAvailable value. If an additional plane would cause this to exceed the default value then prevent it from being added to the array. I have edited the if statement following addPlane to check the .length value of the slotsAvailable array. If the value is equal to or greater than it will return if its less it will run addPlane.

Fourth User Story:

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

| Objects | Properties                  | Messages      | Outputs  |
| ------- | --------------------------- | ------------- | -------- |
| Airport | slotsOccupied @array(plane) | removePlane() | @integer |
|         |                             |               |          |
|         |                             |               |          |

Building Test 4:

Need to check the value of slotsOccupied has decreased after removeTailNumber function has been run and return a True value.

Fifth User Story:

As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

| Objects | Properties                   | Messages      | Outputs  |
| ------- | ---------------------------- | ------------- | -------- |
| Airport | slotsOccupied @array(plane)) | chekItsHere() | @integer |
|         |                              | isItHere()    | @integer |
|         |                              |               |          |

Building Test 5:

Need to test if isItHere (plane) is at the airport, if it is allow it to leave if not return false.
need to test if checkItsHere (plane) is at the airport, if it is return false.

