# AIRPORT CHALLENGE
## Challenge: 1 , Software Engineering Cohort, Digital Futures Academy.
### Main Task
We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off. Here are the user stories that we worked out in collaboration with the client:

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

### Extended Criteria:
    As an air traffic controller
    To ensure safety
    I want to prevent takeoff when weather is stormy

    As an air traffic controller
    To ensure safety
    I want to prevent landing when weather is stormy

    As an air traffic controller
    To count planes easily
    Planes that have landed must be at an airport

## Quick Start:
First, you will need to clone the repository, change the directory and install the dependencies in order to run it:
1. git clone https://github.com/digital-futures-academy/airport-challenge.git
2. cd airportChallenge
3. npm install 

## Step by step guide:
1. Development through: Javascript, node.js.
2. Read the challenge, took notes of the acceptance criteria
3. Create Domain Model to start the project with. 
4. Implemented User Stories with a TDD approach.
5. Designing of Testing Frameworks and start building functionalities.
6. Final check of the README.

## Code Structure:
1.  The functionality of the project is dispersed into following files:
    1. src files: Airport Class,Plane Class, airportRunner.js
    2. tests files: airport.specs.js, specRunner.js,testing-framework.js
    3. Domain modelling can be found as: airport-challenge-domain-model.md
2. Main methods/functions to control the plane's landing and take off as per weather and airport's runway capacity: planeLanded(),planeTakingOff(),isRunwayFull(),findPlane(),airportPlaneCount,airportCapacity.
3. Since, weather is independent so its being generated with a random number generator to make sure the code remains consistent against any condition.
4. This code can stand fit for any size of airport as all the functions are tested with random number generator to produce random airportCapacity.
5.  The test framework also has covered edge cases for stormy weather,full or null airport,objects that are not an instance of plane cannot stand on runway.
6. Run all your tests by simply typing `npm test` in the integrated terminal.

## Screenshots: 
