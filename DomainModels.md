# Airport Challenge


### User Story 1

``` 
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```

#### Domain Model
| Objects     | Properties                     | Messages          | Output   |
| ----------- | ------------------------------ | ----------------- | -------- |
| Airport     | airportPlaneList @Array[@Id]   | landPlane(@Plane) | @Void    |
|             |                                |                   |          |
| Plane       | id @String                     | getId()           | @String  |
|             |                                |                   |          |

#### Tests
1. When `landPlane()` is called `airportPlaneList` increases by 1
2. `landPlane()` puts the plane with the correct id in `airportPlaneList`


### User Story 2

```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```

#### Domain Model
| Objects     | Properties                      | Messages               | Output  |
| ----------- | ------------------------------- | -----------------------| --------|
| Airport     | airportPlaneList @Array[@Id]    | landPlane(@Plane)      | @Void   |
|             | airportCapacity @number         | modifyAirportCapacity()| @Void   |
|             |                                 |                        |         |

#### Tests
1. There is an `airportCapacity @number` that can be called - default capacity
2. When `modifyAirportCapacity` is called, `airportCapacity @number` changes to expected number.
3. `modifyAirportCapacity` can only change airport capacity to an integer


### User Story 3

```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```

#### Domain Model
| Objects     | Properties                     | Messages               | Output   |
| ----------- | ------------------------------ | ---------------------- | -------- |
| Airport     | airportPlaneList @Array[@Id]   | landPlane(@Plane)      | @Void    |
|             | airportCapacity @number        | modifyAirportCapacity()| @Void    |
|             |                                | isAirportFull()        | @Boolean |
|             |                                |                        |          |
| Plane       | id @String                     | getId()                | @String  |
|             |                                |                        |          |

#### Tests
1. `isAirportFull` returns true if `airportPlaneList` amount is equal to `airportCapacity @number`
2. `isAirportFull` returns false if `airportPlaneList` is less than `airportCapacity @number`
3. If `isAirportFull` is true, then `landPlane(@Plane)` will not modify `airportPlaneList @Array`
4. If `isAirportFull` is true and `landPlane(@Plane)` is called, then an error is thrown. (I anticipate this will require refactoring of test 3)

### User Story 4

```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```

#### Domain Model
| Objects     | Properties                     | Messages               | Output   |
| ----------- | ------------------------------ | ---------------------- | -------- |
| Airport     | airportPlaneList @Array[@Id]   | landPlane(@Plane)      | @Void    |
|             |                                | takeOff(@Plane)        | @Void    |
|             |                                | planeInAirport(@Plane) | @Boolean |
|             | airportCapacity @number        | modifyAirportCapacity()| @Void    |
|             |                                | isAirportFull()        | @Boolean |
|             |                                |                        |          |
| Plane       | id @String                     | getId()                | @String  |
|             |                                |                        |          |

#### Tests
1. `takeOff(@Plane)` should remove one plane from `airportPLaneList`
2. `takeOff(@Plane)` should remove a given plane (check id) from `airportPLaneList` (omit for now)
3. `planeInAirport` should return true if that plane is in `airportPLaneList`
4. `planeInAirport` should return false if that plane is not in `airportPlaneList`

### User Story 5

```
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```

#### Domain Model
| Objects     | Properties                     | Messages               | Output   |
| ----------- | ------------------------------ | ---------------------- | -------- |
| Airport     | airportPlaneList @Array[@Id]   | landPlane(@Plane)      | @Void    |
|             |                                | takeOff(@Plane)        | @Void    |
|             |                                | planeInAirport(@Plane) | @Boolean |
|             | airportCapacity @number        | modifyAirportCapacity()| @Void    |
|             |                                | isAirportFull()        | @Boolean |
|             |                                |                        |          |
| Plane       | id @String                     | getId()                | @String  |
|             |                                |                        |          |

#### Tests

`planeInAirport` functionality was tested in User Story 4
1. If `takeOff(@Plane)` is called but `planeInAirport(@Plane)` returns false, then an error is thrown
2. If `landPlane(@Plane)` is called but `planeInAirport(@Plane)` returns true, then an error is thrown