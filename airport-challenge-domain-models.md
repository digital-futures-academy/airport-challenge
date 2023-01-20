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
| Plane   | id @String                   |                   | @String |

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
| Plane   | id @String                   |                   | @String  |

## Tests

Initial thoughts

1. Need to know if airport is full by comparing to capacity
2. If airport is full then airportPlanes won't increase

**Test 6** - If `airport` is full using `isAirportFull()` function
**Test 7** - Don't allow `landPlane()` to add `Plane` to `airportPlanes` list when `isAirportFull()` is true

## User story 4

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

## Domain Model 4

| Objects | Properties                   | Messages             | Outputs  |
| ------- | ---------------------------- | -------------------- | -------- |
| Airport | airportPlanes @Array[@Plane] | takeOffPlane(@Plane) | @Void    |
|         |                              |                      |          |
| Plane   | id @String                   | isPlaneInAirport()   | @Boolean |

Initial thoughts

1. Need to allow a plane to take off by removing it from airport planes array
2. Need to confirm plane is not in airport by id?

**Test 8** - `airportPlanes` length decreases by 1 when `takeOffPlane` is called with 'instance of `Plane`
**Test 9** - check if `Plane` is still in `Airport` by calling `isPlaneInAirport`

## User story 5

As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

## Domain Model 5

| Objects | Properties                   | Messages             | Outputs  |
| ------- | ---------------------------- | -------------------- | -------- |
| Airport | airportPlanes @Array[@Plane] | takeOffPlane(@Plane) | @Void    |
|         |                              | landPlane(@Plane)    | @Void    |
|         |                              |                      |          |
| Plane   | id @String                   | isPlaneInAirport()   | @Boolean |

Initial thoughts

1. If plane is not airport I need to call landPlane & if it is in airport I cannot call landPlane
2. If plane is in airport I need to call takeOffPlane & if it not in airport I cannot call takeOffPlane

**Test 10** - `landPlane` will not land a plane if `isPlaneInAirport` is true.
**Test 11** - if `isPlaneInAirport` is true do not call `landPlane`.
