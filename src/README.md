Airport Challenge 
Due Date: 23/01/2023
Matt Jones
SE-2301-A

Learning Objectives:

-Be able to build functionality for applications based on user requirements
-Write some tests using a testing framework to make sure that your code functions correctly
-Use classes and objects in your code for reproducibility and efficiency
-Use Git and GitHub to commit work and open a Pull Request

Grading Criteria:

-Have you converted all of the user requirements into a functioning application?
-Have you tested your code?
-Does the code follow good practices?
    -Is the code clean (use appropriate statements, no repeated blocks, short circuit where possible)?
    -Has the code been developed using OOD? - i.e.
        -Is the code loosely coupled, highly cohesive and follow the single responsibility principles?
        -Is domain modelling evidenced in the README?
Is the code written as simple as possible or is it too complex?

Task:

We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off.  Here are the user stories that we worked out in collaboration with the client:

First User Story:

As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

| Objects | Properties                     | Messages                   | Outputs |
| ------- | ------------------------------ | -------------------------- | ------- |
| Plane   | tailNumber @string             | gettailNumber()            | @string |
| Airport | airportName @array[tailNumber] | addtailNumber(@tailNumber) | @void   |
|         |                                |                            |         |

Thoughts First User Story:

I Need an Airport
I Need to Land a Plane at the Airport
Airport Plain count should increase by 1 when Plane has landed

Tests:
Test 1 - Airport Plane count increases when Plane is at the Airport 

Building Test 1:
Make file /specRunner.js in test folder to run ALL tests from 1 location (Populate with required files as created using require(`./`))
Make file /testing-framework.js in test folder to house functions required for testing?

