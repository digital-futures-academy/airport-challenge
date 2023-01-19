## Airport challenge Domain Models - Solution

## User Story 1

As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

## Domain Model 1

| Objects | Properties                   | Messages          | Outputs |
| ------- | ---------------------------- | ----------------- | ------- |
| Airport | airportPlanes @Array[@Plane] | landPlane(@Plane) | @Void   |
|         |                              |                   |         |
| Plane   | id @String                   | getId()           | @String |

### Tests

Initial thoughts:

1. Need an airport
2. Need to be able to give/land the airport a Plane
3. Airport planes list should increase by 1 when a plane lands and is added to empty list

**Test 1** - `airportPlanes` length increases when `landPlane` is called with 'instance of `Plane`'

**Test 2** - `landPlane` should only add `Plane` instances to the `airportList`

**Test 3** - - Edge Case - falsy values should not be landing in the airport

## User Story 2

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

## Domain Model 2

| Objects | Properties        | Messages                  | Outputs  |
| ------- | ----------------- | ------------------------- | -------- |
| Airport | capacity @Integer | changeCapacity(@Capacity) | @Integer |
|         |                   |                           |          |

## Tests

Initial thoughts

1. Need an airport with a default capacity
2. Need to be able to change this default capacity.

**Test 4** - `Airport` has a default `capacity`.

**Test 5** - `airportCapacity` can be changed when a new value is entered

## User story 3

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

## Domain Model 3

| Objects | Properties                   | Messages          | Outputs  |
| ------- | ---------------------------- | ----------------- | -------- |
| Airport | airportPlanes @Array[@Plane] | landPlane(@Plane) | @Void    |
|         | capacity @Integer            | isAirportFull()   | @Boolean |
|         |                              |                   |          |
| Plane   | id @String                   | getId()           | @String  |

## Tests

Initial thoughts

1. Need to know if airport is full by comparing to capacity
2. If airport is full then airportPlanes won't increase

**Test 6** - Test if `airport` is full using `isAirportFull()` function
**Test 7** - Don't allow `landPlane()` to add `Plane` to `airportPlanes` list as airport is full.
