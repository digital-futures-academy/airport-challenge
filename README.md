# Mousinho-airport-challenge
`mousinho-airport-challenge` is a JavaScript library created to test and display my Test Driven Development skills for module 2 of the Digital Futures Modern Software Engineering course of 2021.

<p>&nbsp;</p>

## Quick start
```
$ git clone git@github.com:AntMousinho/mousinho-airport-challenge.git
npm install
```

<p>&nbsp;</p>

## To run tests
```
node specRunner.js
# or
npm test
```

## Approach
From the previous test framework workshops I had begun to develop my own test library, `mousinho-testlibrary-mse-2103`,  for use on other projects. 

I developed this framework with the help of a [this](https://softchris.github.io/pages/javascript-understand-testing.html#constructing) article and was able to customise the outputs for each test.

For each user story in this airport challenge, I have taken these steps:

- Created a domain model to visualise what my src code will output. These have been added to this README below.
- Written tests within the `airport.spec.js` file using the `setup`, `execute`, `verify` method. With a focus on my eventual code output.
- Written the src code to get these tests to pass.
- Commited my work.
- Refactored the tests using my custom test library `mousinho-testlibrary-mse-2103`.
- Committed my work.

<p>&nbsp;</p>

### Progress Blockers
- Main progress blocker was with the extension
    - deciding where to implement plane.addToAirport so that a plane cannot have landed without being in an airport
    - How to override Math.random() for unit testing

<p>&nbsp;</p>


## Domain models


### User Story 1
```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```

| Object | Properties | Message | Context | Output |
| ------ | ---------- | ------- | ------- | ------ |
| Airport | hanger @Array | land(plane) | adds plane to hanger, sets plane.flying to false | @Array[@planes] |
|  |  |  | if plane.flying is already false | @String "That plane has already landed" |
|  |  | get hanger() |  |  |
| Plane | flying @boolean | get flying() |  | @boolean |
|  |  | set flying() |  |  |

<p>&nbsp;</p>

### User Story 2
```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```
| Object | Properties | Message | Context | Output |
| ------ | ---------- | ------- | ------- | ------ |
| Airport | capacity @Int | get capacity() | capacity as constructor parameter with default value. Getter to return value | @Int |
|  |  |  | negative Int passed to constructor | @Error |

<p>&nbsp;</p>

### User Story 3
```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```
| Object | Properties | Message | Context | Output |
| ------ | ---------- | ------- | ------- | ------ |
| Airport |  | isFull() | if hangar[].length is equal to capacity | @Boolean true |
|  |  |  | if hangar[].length < capacity | @Boolean false |
|  |  | .land(@plane) | isFull | @String cannot land yet, the hangar is full |
|  |  |  | !isFull | @String Successful landing, ${plane} is now in the hangar |

<p>&nbsp;</p>

### User Story 4
```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```

| Object | Properties | Message | Context | Output |
| ------ | ---------- | ------- | ------- | ------ |
| Airport |  | takeOff(@plane) | plane in hangar takes off | @String confirming take off |
|  |  |  | plane already flying, cannot take off | @String This plane is already in flight, cannot take off |
|  |  |  | plane not in this airport's hangar | @String This plane is not at this airport, cannot take off |
| Plane |  |  | successful take off, plane.isFlying is set to true | @Boolean true |

<p>&nbsp;</p>
<p>&nbsp;</p>

### User Story 5
```
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```

| Object | Properties | Message | Context | Output |
| ------ | ---------- | ------- | ------- | ------ |
| Airport |  | land() | plane has already landed at this airport | @String "That plane has already landed" |
|  |  |  | plane has landed at a different airport | @String "That plane has already landed at a different airport"|
|  |  | takeOff() | Plane not in this airport hangar | @String This plane is not at this airport, cannot take off |

<p>&nbsp;</p>
<p>&nbsp;</p>

### Extension

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
| Object | Properties | Message | Context | Output | Done |
| - | - | - | - | - | - |
| Airport |  | takeOff(plane) | weather is clear | @Array[plane] | ✅ |
|  |  |  | weather is stormy | @String cannot take off due to weather conditions | ✅ |
|  |  | land(plane) | weather is clear | @Array[plane] | ✅ |
|  |  |  | weather is stormy | @String cannot land plane due to weather conditions | ✅ |
|  |  | countAirplanes() | this._hangar.length | @Number | ✅ |
| plane | inAirport | get inAirport() | when flying | @Boolean false | ✅ |
|  |  | addToAirport | isFlying is false, change inAirport to true | @Boolean this._inAirport | ✅ |
|  |  |  | isFlying is true | @String cannot add to hangar, plane is currently in the air | ✅ |
|  |  | removeFromAirport | isFlying is true, change inAirport to false | @Boolean this._inAirport | ✅ |
|  |  |  | isFlying is false | @String, cannot remove from airport, plane is still grounded | ✅ |
|  |  | land() | Edit to call addToAirport(), therefore a plane cannot land without being in an airport  | Check previous user Story tests are still working for landing() and takeoff() | ✅ |

<p>&nbsp;</p>
<p>&nbsp;</p>

## Simple Test Layout
``` js
// Source code
    land(plane) {
        if(this.landingCheck(plane) !== true) return this.landingCheck(plane);
        this._hangar.push(plane);
        plane.land();
        return this._hangar;
    }

    landingCheck(plane) {
        if(this._hangar.includes(plane)) return `Cannot land ${plane.id}, it is already in this airport's hangar`;
        if(!plane.flying) return `Cannot land ${plane.id}, it has already landed at a different airport`;
        if(this.isFull()) return 'Cannot land yet, the hangar is full';
        if(isStormy()) return `Cannot land ${plane.id} in stormy weather`;
        return true;
    }

// Spec Code
test.describe('User Story 1: Testing airport.land() function', () => {
    test.it('plane added to hangar', () => {
        plane = new Plane('PL1');
        airport = new Airport();

        test.expect(airport.land(plane).includes(plane)).toEqual(true);
    })

    test.it('plane.flying is set to false', () => {
        test.expect(plane.flying).toEqual(false);
    })

    test.it('cannot land plane if plane.flying is already false', () => {
        plane = new Plane('PL1');
        airport = new Airport();
        airport2 = new Airport();

        airport.land(plane);

        test.expect(airport2.land(plane)).toEqual(`Cannot land ${plane.id}, it has already landed at a different airport`);
    })
})
```
Test Output:
```
User Story 1: Testing airport.land() function
   Test: plane added to hangar
        ✅ Succeeded
   Test: plane.flying is set to false
        ✅ Succeeded
   Test: cannot land plane if plane.flying is already false
        ✅ Succeeded
```

## Stub test
Needed to control Math.random within the isStormy function so I can predict test output
``` js
// Source Code
// In weather.js
const isStormy = () => {
    const randomNumber = Math.random();
    if(randomNumber >= 0.2) return false;
    return true;
};

// in airport.js Airport class
    land(plane) {
        if(this.landingCheck(plane) !== true) return this.landingCheck(plane);
        this._hangar.push(plane);
        plane.land();
        return this._hangar;
    }

    landingCheck(plane) {
        if(this._hangar.includes(plane)) return `Cannot land ${plane.id}, it is already in this airport's hangar`;
        if(!plane.flying) return `Cannot land ${plane.id}, it has already landed at a different airport`;
        if(this.isFull()) return 'Cannot land yet, the hangar is full';
        if(isStormy()) return `Cannot land ${plane.id} in stormy weather`;
        return true;
    }

// Test Code
test.describe('Extension: testing airport.takeOff() and airport.land() in different weather conditions', () => {
    test.it('.land() when weather is clear', () => {
        mockMath.random = () => 0.5;
        global.Math = mockMath;

        airport = new Airport();
        plane = new Plane('PL1');
        test.expect(airport.land(plane)[0]).toEqual(plane);
        global.Math = returnMath;
    })

    test.it('.land() when weather is stormy', () => {
        mockMath.random = () => 0.1;
        global.Math = mockMath;

        airport = new Airport();
        plane = new Plane('PL1');
        test.expect(airport.land(plane)).toEqual(`Cannot land ${plane.id} in stormy weather`);
        global.Math = returnMath;
    })

    test.it('.takeOff() when weather is clear', () => {
        mockMath.random = () => 0.5;
        global.Math = mockMath;

        airport = new Airport();
        plane = new Plane('PL1');
        airport.land(plane);
        test.expect(!airport.takeOff(plane).includes(plane)).toEqual(true);
        global.Math = returnMath;
    })

    test.it('.takeOff() when weather is stormy', () => {
        mockMath.random = () => 0.5;
        global.Math = mockMath;

        airport = new Airport();
        plane = new Plane('PL1');
        airport.land(plane);

        mockMath.random = () => 0.1;
        global.Math = mockMath;

        test.expect(airport.takeOff(plane)).toEqual(`${plane.id} cannot take off in stormy weather`);
        global.Math = returnMath;
    })
})
```

Test Output:
```
Extension: testing airport.takeOff() and airport.land() in different weather conditions
   Test: .land() when weather is clear
        ✅ Succeeded
   Test: .land() when weather is stormy
        ✅ Succeeded
   Test: .takeOff() when weather is clear
        ✅ Succeeded
   Test: .takeOff() when weather is stormy
        ✅ Succeeded
```