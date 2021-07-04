## Colin - Airport Challenge 

This is my implementation of the airport challenge as part of my training in the Modern Software Engineering cohort at the Digital Futures Academy. 

The objectives of this challenge are to:
- Write a domain model from given user stories 
- Develop a simple, consistent testing framework 
- Understand and implement some stages of the software development lifecycle (domain modelling; writing a test framework; refactoring) 

All resources can be found on the following github repository [Airport Challenge][https://github.com/FractalFraction/airport-challenge]

## Running the Tests
The tests may be run in a command line interface using node.js
```js
$ node specRunner.js
```
The file specRunner.js is a independent testing suite that requests each of the  individual spec files contained within the `./specs` folder. 

## Methodology 
- Created a domain model for the first user story 
- Test code was written based on current domain model for each user story. 
- Source code was then written to pass failing tests at each stage in the software development lifecycle. 
- Updated the domain model as I repeated the process for the next user story 

## Structure
All files associated with domain modelling may be found in `./dom_model`.
The extended criteria was covered in a separate file labelled `domain-model-extended.md`. 

All source code is contained with the `./src` folder, which contains three class files:
```
- plane.js
- airport.js
- atc.js
```

`plane.js` defines a class Plane which holds information on the name and flying status of the plane. The flying status property (or for short hand **tag**) holds a string value and can be set to one of three options at initialisation: 'flying', 'landed' and 'take off'. 

`airport.js` defines a class *Airport* which contains the `land()` and `takeOff()` methods:
- `land()` adds a plane to a list of planes at the airport. It may be called by the syntax `airport.land(plane)`. The plane must have its tag set to `'flying'` to make a valid landing. 
-  `takeOff()` removes a plane to a list of planes at the airport. It may be called by the syntax `airport.takeOff(plane)`. The plane **must** have its tag set to `'take off'`, which can be done by calling the `queryTakeOff()` from the *Air Traffic Controller* class. 

`atc.js` defines a class *Air Traffic Controller* with methods `queryTakeOff()` and `queryLanding()`:
- `queryTakeOff()` checks the plane is landed and within the airport, then sets the tag to `take off`. 

These methods must be called before invoking the `land()` or `takeOff()` methods contained within `airport.js`. 

Individual tests are located in the `./specs` folder, which test each of the methods contained within the class files. These require the assertEquals function defined within `testing-framework.js`, and any class files required to run the tests. 

## Reflections

Learning Outcomes: 
- Able to write an independent testing framework that satisfies the user stories. 
- Debugging: Able to debug existing source and test code when a more complex domain model was added for the fifth user story. 

Improvements
- Three class structure was complex, and involved significant refactoring of existing test code 
- Introducing new classes earlier would allow for the domain model to updated more gradually, and therefore would 
- The Air Traffic Controller class queries the flying status tag of planes but does not strictly prevent landing. However it could be invoked by the land() function to ensure already landed planes are not added. 
