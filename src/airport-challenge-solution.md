## Catherine's airport challenge solution

## Part 1 User Story

As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

--think of airport as basket, and plane as (bagel)item from Bob's Bagels exercise--

## Part 1 Domain Model

| Objects | Properties                  | Messages          | Outputs |
| ------- | --------------------------- | ----------------- | ------- |
| Airport | landedPlanes @Array[@Plane] | landPlane(@Plane) | @Void   |
|         |                             |                   |         |
| Plane   | id @String                  | getId()           | @String |

## Tests 1-3

a Need an Airport
b Need to be able to give the Airport a Plane
c LandedPlanes list length should increase by 1 when a Plane is added to the empty LandedPlanes list

**Test 1** - `landedPlanes` length increases by 1 when `landPlane` is called with _instance of `Plane`_

**Test 2** - `landPlane` should only add `Plane` instances to the `landedPlanes`

**Test 3** - edge Case - falsy values should not be added to the Airport

//I am not clear if if Test 2 and 3 are the same explicitly?

## Part 2 User Story

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

## Part 2 Domain Model (added to from above)

| Objects | Properties                  | Messages                    | Outputs  |
| ------- | --------------------------- | --------------------------- | -------- |
| Airport | landedPlanes @Array[@Plane] | land Plane(@Plane)          | @Void    |
|         | landedCapacity @Integer     | isAirportFull()             | @Boolean |
|         |                             | getLandedCapacity()         | @Integer |
|         |                             | newLandedCapacity(@Integer) | @Void    |
|         |                             |                             |          |
| Plane   | id @String                  | getId()                     | @String  |

## Tests 4 & 5

a Need to have an Airport but does not necessarily need to have a Plane in it (getLandedCapacity may be zero)
//this is not the test. need to make default and make sure it is set up when airport is created
b use default capacity, run newcapacity and check this changes the default capacity

## Part 3 User Story

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

## Part 3 Domain Model (not added to) - already fine from above??

| Objects | Properties                  | Messages                    | Outputs  |
| ------- | --------------------------- | --------------------------- | -------- |
| Airport | landedPlanes @Array[@Plane] | landPlane(@Plane)           | @Void    |
|         | landedCapacity @Integer     | isAirportFull()             | @Boolean |
|         |                             | getLandedCapacity()         | @Integer |
|         |                             | newLandedCapacity(@Integer) | @Void    |
|         |                             | getLandedPlaneCount()       | @Integer |
| Plane   | id @String                  | getId()                     | @String  |

## Tests

a Need to check if is AirportFull True prevents Plane going into 'landedPlanes'
b Need to check if is AirportFull False allows Plane to go into 'landedPlanes'
//this approach requires the caller to ask if airport is full first (then do something), whereas would be better to have prevention of landPlane if full

**Test 5**: xxxxxxxxxx
**Test 6**: xxxxxxxxxx

## Part 4 User Story

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

# Part 4 Domain Model

| Objects | Properties                  | Messages                    | Outputs  |
| ------- | --------------------------- | --------------------------- | -------- |
| Airport | landedPlanes @Array[@Plane] | landPlane(@Plane)           | @Void    |
|         | landedCapacity @Integer     | isAirportFull()             | @Boolean |
|         |                             | getLandedCapacity()         | @Integer |
|         |                             | newLandedCapacity(@Integer) | @Void    |
|         |                             | getLandedPlaneCount()       | @Integer |
|         |                             | takeOffPlane(@Plane)        | @Void    |
|         |                             | isPlanePresent(@Plane)      | @Boolean |
| Plane   | id @String                  | getId()                     | @String  |

## Tests - 7&8

a landPlane Plane(id) and check if isPlanePresent (T/F)
b in the same way - takeOffPlane Plane(id) and check if isPlanePresent (T/F)

## Part 5 User Story

As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

## Part 5 Domain Model (not added to) - already fine from above??

| Objects | Properties                  | Messages                    | Outputs  |
| ------- | --------------------------- | --------------------------- | -------- |
| Airport | landedPlanes @Array[@Plane] | landPlane(@Plane)           | @Void    |
|         | landedCapacity @Integer     | isAirportFull()             | @Boolean |
|         |                             | getLandedCapacity()         | @Integer |
|         |                             | newLandedCapacity(@Integer) | @Void    |
|         |                             | getLandedPlaneCount()       | @Integer |
|         |                             | takeOffPlane(@Plane)        | @Void    |
|         |                             | isPlanePresent(@Plane)      | @Boolean |
| Plane   | id @String                  | getId()                     | @String  |

## Tests 9&10

set plane status to not at airport (in Class Plane)
if Plane status strictly equals not at airport, plane cannot take off
set plane status to at airport (in Class Plane)
if Plane status does not equal not at airport, plane can take off (not sure test 10 is needed)

// Test to check that planes cannot take off when they are not at the airport
const planeStatus = 'notAtAirport';

if (planeStatus === 'notAtAirport') {
assert.strictEqual(takeOff(), false, 'Cannot take off when plane is not at the airport')
}
