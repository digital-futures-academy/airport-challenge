This JavaScript library was created to demonstrate skills I have learned during Module 1 of the Digital Futures Academy Modern Software Engineering course.

## To install the project
```
$ git clone git@github.com:b7rch4/airport-challenge.git <br>

npm install
```

## In order to run the tests
```
node specRunner.js
or
npm test
```
## Method
```
I began by creating a simple test framework, test-framework.js, which contains a function to determine whether two inputs are equal.
I then used the given User Stories to develop a Domain Model (shown below), from which potential source code could be visualised.
I then focused on test driving my code, writing a series of failing tests within the airport.spec.js and plane.spec.js files.
Source code was then written to pass these tests.
```

## Domain Models

### User Story 1
```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane.
```

Objects|Properties|Messages|Output
---|---|---|---
Airport|list of planes|landPlane()|new list of planes
Plane|landed|land()|boolean

### User Story 2
```
User Story 2
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate.
```

Objects|Properties|Messages|Output
---|---|---|---
Airport|capacity|capacityOverride()|new capacity

### User Story 3
```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full.
```

Objects|Properties|Messages|Output
---|---|---|---
Airport|capacity|landPlane()|string

### User Story 4
```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport.
```

Objects|Properties|Messages|Output
---|---|---|---
Airport|list of planes|takeOff()|new list of planes
Plane|landed|takeOff()|boolean

### User Story 5
```
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed.
```

Objects|Properties|Messages|Output
---|---|---|---
Airport|list of planes|takeOff()|string
||landPlane()|string
Plane|landed|hasLanded()|boolean

### Extension 1
```
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy.
```

Object|Properties|Messages|Output
---|---|---|---
Airport|weather|takeOff(plane)|string

### Extension 2
```
As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy.
```

Object|Properties|Messages|Output
---|---|---|---
Airport|weather|landPlane(plane)|string
