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
3. Airport planes length should increase by 1 when a plane has landed at airport.

**Test 1** - 'airportPlanes' length increases when 'landPlane' is called with *instance of Plane*

**Test 2** - 'landPlane' should only land 'Plane' instances to the 'airportManifest'

**Test 3** - Edge Case - falsy values should not be added to Airport

#### User Story 2

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

1. Declare an Airport capacity.
2. Set that Airport capacity to a value(number).
3. Override the Airport capacity as needed (using a function).

| Objects | Properties                            | Messages             | Outputs |
| ------- | -------------------------             | -----------------    | ------- |
| Airport | airportPlanes @Array[@Plane]          | landPlane(@Plane)    | @Void   |
|         | airportCapacity @Integer              | setAirportCapacity() | @Void   |
|         |                                       |                      |         |
| Plane   | id @String                            | getId()              | @String |

### Tests

**Test 4** - `airportCapacity` property of Airport class has an integer value of 10.






















As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

1. Check airport Array Capacity
2. If airport Array Capacity is at limit, do not add new plane to array

| Objects | Properties                            | Messages             | Outputs |
| ------- | -------------------------             | -----------------    | ------- |
| Airport | airportPlanes @Array[@Plane]          | isAirportFull()      | @Void   |
|         | airportCapacity @Integer              | getAirportCapacity() | @Integer|
|         |                                       |                      |         |
| Plane   | id @String                            | getId()              | @String |

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

| Objects | Properties                            | Messages             | Outputs |
| ------- | -------------------------             | -----------------    | ------- |
| Airport | airportPlanes @Array[@Plane]          | landPlane(@Plane)    | @Void   |
|         |                                       |                      |         |
|         |                                       |                      |         |
|         |                                       |                      |         |
