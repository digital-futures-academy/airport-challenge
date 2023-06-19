# README.md

# Airport Challenge

---

```
  
                                          /\
                                         /  \
                 ,----------------------/    \__
                / o o o o o o o o o o o o o     \__ 
               (                 MARDElAIRWAYS  ___ } == =  =
                \_______\     /________________/     
                    |    \___/      ||
____________________|_______________||___________________________________________________
_ _ _ _ _ _ _ __ _ _O_ _ _ _ _ _ _ _OO_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 
_________________________________________________________________________________________
```

The source code found in this repository has been written in Javascript and was built to meet the requirements outlined in the [Digital Futures Airport Challenge repository](https://github.com/digital-futures-academy/airport-challenge).

---

# About the Airport Challenge

---

The Airport challenge is the first part of a series of challenges set by Digital Futures to test my working knowledge on the concepts learned so far on the Digital Futures Academy. In preparation for this challenge, some of the concepts learned include: Software Development Lifecycles, Test Driven Development, Testing Frameworks, Domain Modelling and Object Oriented Design & Testing.

# Built with

---

The code that forms the solution for this challenge was written in Javascript, and tested using the Jasmine testing framework and custom spec files written myself, to satisfy the user stories provided.

# Getting Started

---

## Prerequisites:

- [Node.js](https://nodejs.org/en/download)
    - Or install using [Homebrew](https://formulae.brew.sh/formula/node)
- [npmjs](https://www.npmjs.com/)
- [Jasmine](https://jasmine.github.io/)

## Installation:

- Clone the repository
```
git clone https://github.com/mardeldev/airport-challenge.git
```
- Enter directory
```
cd airport-challenge
```
- Setup Jasmine testing framework. Set entry point to `index.js` and the test command to `jamsmine` when prompted. Then open `package.json` and add a new key:value pair of `type : "module"`.
```
npm init
npm i --save-dev jasmine
npx jasmine init
```
- Enter the `src` directory
```
cd src/
```
- Run `index.js` from the terminal
```
node index.js
```
- To run the tests, run `npm test` from the terminal

## Project Structure:

- The index file and classes are found in the `src` directory.
- Spec/test files are found in the `spec` directory.


# Problem Statements

---

We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off. Here are the user stories that we worked out in collaboration with the client:

### Acceptance Criteria

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

### Extended Acceptance Criteria

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

---

### User Story 1

```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```

### Domain Model

| Objects | Properties | Messages | Output |
| --- | --- | --- | --- |
| Instruction | code @string | landPlane() | @Void |
|  | airport @Airport |  |  |
|  | plane @Plane |  |  |
|  |  |  |  |
| Airport | name @string | landPlane(Plane) | @Void |
|  | planes @array[@Plane] |  |  |
|  |  |  |  |
| Plane | flightNumber @string | isLanded() | @Boolean |
|  | landed @boolean |  |  |
- **Test 1a**: Instantiate a new `Instruction(code, airport, plane)` , call `Instruction.landPlane()`, expect `landPlane()` (a `spy` for `airport.landPlane()`) to have been called.
- **Test 1b**:  Call `Instruction.landPlane()`, expect `isLanded()` (a `spy` for `plane.isLanded()`) to have been called.
- **Test 1c**: Call `Instruction.landPlane()` , expect `Instruction.isLanded()` to be `true`.
- **Test 1d**: Call `Instruction.landPlane()`, expect `airport.planes` array to contain the `plane` object.

---

### User Story 2

```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```

### Domain Model

| Objects | Properties | Messages | Output |
| --- | --- | --- | --- |
| Instruction | code @string | landPlane() | @Void |
|  | airport @Airport | setAirportCapacity(@number) | @Void |
|  | plane @Plane | getAirportCapacity() | @Number |
|  |  |  |  |
| Airport | name @string | landPlane(Plane) | @Void |
|  | planes @array[@Plane] | setAirportCapacity(@number) | @Void |
|  | capacity @number |  | @Error |
|  |  | getAirportCapacity() | @Number |
|  |  |  |  |
| Plane | landed @boolean | isLanded() | @Boolean |
- **Test 2a**: Instantiate a new `Instruction(code, airport)` , call `setAirportCapacity()`, expect `setAirportCapacity()` (a `spy` for `airport.setAirportCapacity()`) to have been called.
- **Test 2b**: call `setAirportCapacity(-1)`, expect an `error` to be thrown.
- **Test 2c**: call `setAirportCapacity(2)`, expect  `capacity` to be greater than zero.
- **Test 2d**: Call `getAirportCapacity()`, expect 2 to be returned.

---

### User Story 3

```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```

### Domain Model

| Objects | Properties | Messages | Output |
| --- | --- | --- | --- |
| Instruction | code @string | landPlane() | @Void |
|  | airport @Airport | setAirportCapacity(@number) | @Void |
|  | plane @Plane | getAirportCapacity() | @Number |
|  |  | errorIfFull() | @Void |
|  |  |  | @Error |
|  |  |  |  |
| Airport | name @string | landPlane(Plane) | @Void |
|  | planes @array[@Plane] | setAirportCapacity(@number) | @Void |
|  | capacity @number |  | @Error |
|  |  | getAirportCapacity() | @Number |
|  |  |  |  |
| Plane | landed @boolean | isLanded() | @Boolean |
- **Test 3a**: Call `Instruction.landPlane()`, expect an `error` to be thrown.

---

### User Story 4

```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```

### Domain Model

| Objects | Properties | Messages | Output |
| --- | --- | --- | --- |
| Instruction | code @string | landPlane() | @Void |
|  | airport @Airport | takeOffPlane() | @Void |
|  | plane @Plane | getAirportCapacity() | @Number |
|  |  | errorIfFull() | @Void |
|  |  |  | @Error |
|  |  |  |  |
| Airport | name @string | landPlane(Plane) | @Void |
|  | planes @array[@Plane] |  | @Error |
|  | capacity @number | takeOffPlane(Plane) | @Void |
|  |  |  | @Error |
|  |  | setAirportCapacity(@number) | @Void |
|  |  |  | @Error |
|  |  | getAirportCapacity() | @Number |
|  |  |  |  |
| Plane | landed @boolean | isLanded() | @Boolean |
- **Test 4a**: Instantiate a new `Instruction(code, airport, plane)` , call `Instruction.takeOffPlane()`, expect `takeOffPlane()` (a `spy` for `airport.takeOffPlane()`) to have been called.
- **Test 4b**:  Call `Instruction.takeOffPlane()`, expect `isLanded()` (a `spy` for `plane.isLanded()`) to have been called.
- **Test 4c**: Call `Instruction.takeOffPlane()` , expect `Instruction.isLanded()` to be `false`.
- **Test 4d**:  Call `Instruction.takeOffPlane()`, expect `airport.planes` array **not** to contain the specified `plane` object.

---

### User Story 5

```
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```

### Domain Model

| Objects | Properties | Messages | Output |
| --- | --- | --- | --- |
| Instruction | code @string | landPlane() | @Void |
|  | airport @Airport | takeOffPlane() | @Void |
|  | plane @Plane | getAirportCapacity() | @Void |
|  |  | checkPlaneStatus() | @Void |
|  |  |  |  |
| Airport | name @string | landPlane(Plane) | @Void |
|  | planes @array[@Plane] |  | @Error |
|  | capacity @Number | takeOffPlane(Plane) | @Void |
|  |  |  | @Error |
|  |  | getAirportCapacity(@number) | @Void |
|  |  |  |  |
| Plane | landed @boolean | isLanded() | @Boolean |
- **Test 5a**: Call `Instruction.landPlane()`, expect an `error` to be thrown.
- **Test 5b**: Call `Instruction.takeOffPlane()`, expect an `error` to be thrown.

# Extended Acceptance Criteria

---

### User Story 6

```
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy
```

### Domain Model

| Objects | Properties | Messages | Output |
| --- | --- | --- | --- |
| Instruction | code @string | takeOffPlane() | @Void |
|  | airport @Airport |  |  |
|  | plane @Plane |  |  |
|  |  |  |  |
| Airport | name @string | weatherGenerator() | @String |
|  | planes @array[@Plane] | checkWeather() | @String |
|  |  | takeOffPlane(Plane) | @Void |
|  |  |  | @Error |
- **Test 6a**: Call `Instruction.takeOffPlane`, expect an `error` to be thrown.

---

### User Story 7

```
As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy
```

### Domain Model

| Objects | Properties | Messages | Output |
| --- | --- | --- | --- |
| Instruction | code @string |  |  |
|  | airport @Airport |  |  |
|  | plane @Plane |  |  |
|  |  |  |  |
| Airport | name @string | weatherGenerator() | @String |
|  | planes @array[@Plane] | checkWeather() | @String |
|  |  | takeOffPlane(Plane) | @Void |
|  |  |  | @Error |
|  |  | landPlane(Plane) | @Void |
|  |  |  | @Error |
- **Test 7a**: Call `Instruction.landPlane()`, expect an `error` to be thrown.

---

### User Story 8

```
As an air traffic controller
To count planes easily
Planes that have landed must be at an airport
```

### Domain Model

| Objects | Properties | Messages | Output |
| --- | --- | --- | --- |
| Instruction | code @string | isPlaneAtAirport() | @Boolean |
|  | airport @Airport |  |  |
|  | plane @Plane |  |  |
|  |  |  |  |
| Airport | name @string | weatherGenerator() | @String |
|  | planes @array[@Plane] | checkWeather() | @String |
|  |  | takeOffPlane(Plane) | @Void |
|  |  |  | @Error |
|  |  | landPlane(Plane) | @Void |
|  |  |  | @Error |
|  |  | isPlaneAtAirport(Plane) | @Boolean |
- **Test 8a**: Instantiate a new `Instruction(code, airport, plane)`, call `Instruction.landPlane()`, expect `isPlaneAtAirport)` (a `spy` for `airport.isPlaneAtAirport()`) to be called.
- **Test 8b**: Call `Instruction.landPlane()`, expect `isPlaneAtAirport` to be `true`.

# Project Review

---

### What Went Well

- .
- .
- .

### Even Better If:

- .
- .
- .

### Goals:

- .
- .
- .