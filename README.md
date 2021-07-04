## Introduction
```
This JavaScript library was created to demonstrate skills I have learned during Module 1 of the Digital Futures Academy Modern Software Engineering course.

It aims to simulate an airport from which planes can take off and land.
```

## To install the project
To install the project, use the following commands in the terminal:
```
$ git clone git@github.com:b7rch4/airport-challenge.git

npm install
```

## Running the tests
To run tests, use the following commands in the terminal:
```
node specRunner.js
or
npm test
```
When creating a new airport a random number generator is used to give a number between 1 and 100, which simulates the weather conditions at that airport. <br>
If the number is less than 5, the weather will be stormy, otherwise it will be sunny. <br>
In order to snub random behaviour when conducting tests, the weather at the airport was set manually:
```js
airport.weather = 50;
```

## Method
```
I began by creating a simple test framework, test-framework.js, which contains a function to determine whether two inputs are equal.

I then used the given User Stories to develop a Domain Model (shown below), from which potential source code could be visualised.

I then focused on test driving my code, writing a series of failing tests within the airport.spec.js and plane.spec.js files.

Source code was then written to pass these tests.
```

## Domain Models

#### User Story 1
```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane.
```

Objects|Properties|Messages|Output
---|---|---|---
Airport|list of planes|landPlane()|new list of planes
Plane|landed|land()|boolean

#### User Story 2
```
User Story 2
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate.
```

Objects|Properties|Messages|Output
---|---|---|---
Airport|capacity|capacityOverride()|new capacity

#### User Story 3
```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full.
```

Objects|Properties|Messages|Output
---|---|---|---
Airport|capacity|landPlane()|string

#### User Story 4
```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport.
```

Objects|Properties|Messages|Output
---|---|---|---
Airport|list of planes|takeOff()|new list of planes
Plane|landed|takeOff()|boolean

#### User Story 5
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

#### Extension 1
```
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy.
```

Object|Properties|Messages|Output
---|---|---|---
Airport|weather|takeOff(plane)|string

#### Extension 2
```
As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy.
```

Object|Properties|Messages|Output
---|---|---|---
Airport|weather|landPlane(plane)|string

## Example test
#### Test code
```js
//First test
console.log('Does landing a plane add 1 plane to the airport?')
//1. Set up
let jfk = new Airport();
jfk.weather = 50;
let emirates = new Plane('Emirates');

//2. Execute
let result1a = jfk.landPlane(emirates);
let result1b = emirates._landed;

//3. Verify
console.log(assertEquals(result1a.length, 1));
console.log(assertEquals(result1b, true))
```
#### Source code
```js
class Airport {
  landPlane(plane) {
      if (plane.hasLanded() === true) {
          return 'This plane has already landed!';
      } else if (this.weather <= 5) {
          return 'It\'s too stormy! No planes can land!';
      } else if (this.planes.length < this.capacity) {
          this.planes.push(plane._name);
          plane.land();
          return this.planes;
      } else {
          return 'Abort landing! The airport is full!';
      }
  }
}
```


#### Output
```
Does landing a plane add 1 plane to the airport?
true
true
```
