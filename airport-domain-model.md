#### User Story 1

As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

1. There is an airport noun(object).
2. There is a plane noun(object).
3. I am wanting to land(add) a plane at an airport.

| Objects | Properties                   | Messages          | Outputs |
| ------- | -------------------------    | ----------------- | ------- |
| Airport | airportPlanes @Array[@Plane] | landPlane(@Plane) | @Void   |
|         |                              |                   |         |
| Plane   | id @String                   | getId()           | @String |

### Tests

1. Need an airport
2. Need to be able to land plane at airport
3. Airport planes length should increase by 1 when a plane has landed at airport

**Test 1** - `airportPlanes` length increases when `landPlane` is called with *instance of Plane*

**Test 2** - `landPlane` should only land 'Plane' instances to the 'airportManifest'

**Test 3** - Edge Case - falsy values should not be added to Airport

#### User Story 2 & 3

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

1. Set a maximum airport capacity
2. Override the maximum airport capacity to a different size limit using a method
3. Check that more planes cannot be added beyond set airport capacity

| Objects | Properties                            | Messages             | Outputs |
| ------- | -------------------------             | -----------------    | ------- |
| Airport | airportPlanes @Array[@Plane]          | landPlane(@Plane)    | @Void   |
|         | MaximumCapacity @integer              | maximumCapacity()    | @Void   |
|         |                                       |                      |         |
| Plane   | id @String                            | getId()              | @String |

### Tests

**Test 4** - Set a defined maximum airport capacity to 10

**Test 5** - Change a defined maximum airport capacity to 5

**Test 6** - Check that you can't add planes beyond set airport capacity

#### User Story 4

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

1. Need to have an airport with at least 1 identifiable plane within
2. Need identifiable plane to takeoff from airport
3. Airport planes length should decrease by 1 when the identifiable plane has taken off from airport
4. Confirm that the identifiable plane is no longer within the array

| Objects | Properties                   | Messages              | Outputs |
| ------- | -------------------------    | -----------------     | ------- |
| Airport | airportPlanes @Array[@Plane] | landPlane(@Plane)     | @Void   |
|         |                              | planeTakeOff(@Plane)  | @Void   |
| Plane   | id @String                   | getId()               | @String |

### Tests

**Test 7** - `airportPlanes` length decreases to 0 when identifiable plane is found and removed from 1 airport

#### User Story 5

As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
