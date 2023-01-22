# Airport Challenge Domain Models

## Acceptance Criteria - User Stories

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

## Acceptance Criteria - Domain Models

| Objects | Properties                     | Messages                 | Outputs  |
| ------- | ------------------------------ | ------------------------ | -------- |
| Airport | airportCapacity @Integer       | landPlane(@Plane)        | @Void    |
|         | planesAtAirport @Array[@Plane] | getCapacity()            | @Integer |
|         |                                | checkPlaneValid(@Plane)  | @Error   |
|         |                                | checkPlaneFlying(@Plane) | @Boolean |
|         |                                | checkCapacity()          | @Boolean |
|         |                                | changeCapactiy(@Integer) | @Void    |
|         |                                | takeOffPlane(@Plane)     | @Void    |
|         |                                | checkForPlane(@Plane)    | @Boolean |
|         |                                | addPlaneToAirport(@Plane)| @Void    |
| Plane   | flying @Boolean                | land()                   | @Void    |
|         |                                | takeOff()                | @Void    |
|         |                                | checkFlying()            | @Boolean |

## Acceptance Criteria - Testing

### Test 1
**Testing that an Airport can land a Plane.**\
An instance of the class `Airport` runs the message `landPlane(@Plane)` that given an Object of class `Plane` changes the property `flying` of the Plane instance from `True` to `False` and adds it to `planesAtAirport`.

### Test 2
**Testing that an Airport *will not* land something that is not a Plane.**\
An instance of the class `Airport` runs the message `landPlane(@Plane)` that given any data not of class `Plane` e.g. `null`, `undefined`, `1`, `false` or `"Plane"` will return a type error but continue to run.

### Test 3
**Testing that an Airport *will not* land a Plane that has already landed.**\
An instance of the class `Airport` runs the message `landPlane(@Plane)` that given an Object of class `Plane` with the property `flying` set to `False` will not change anything and return that the Plane has already landed.

### Test 4
**Testing that an Airport has a default capacity set.**\
An instance of the class `Airport` runs the message `getCapacity()` which will return the default integer value for `airportCapacity`.

### Test 5
**Testing that an Airport capacity can be changed.**\
An instance of the class `Airport` runs the message `changeCapactiy(@Integer)` and given a valid integer changes the value of Airport property `airportCapacity` for the instance.

### Test 6
**Testing that an Airport capacity can be changed with an edge case.**\
An instance of the class `Airport` runs the message `changeCapactiy(@Integer)` and given an edge value of 0, changes the value of Airport property `airportCapacity` for the instance.

### Test 7
**Testing that an Airport capacity *can't* be changed with a boundary case.**\
An instance of the class `Airport` runs the message `changeCapactiy(@Integer)` and given an edge value of -1, will return an error but continue to run.

### Test 8
**Testing that an Airport capacity *can't* be changed with something that is not a valid Integer.**\
An instance of the class `Airport` runs the message `changeCapactiy(@Integer)` and given any data with a type that is not an Integer, will return a type error but continue to run.

### Test 9
**Testing that an Airport *can't* land a Plane if it is at capacity.**\
An instance of the class `Airport` with the property `planesAtAirport` populated to the length of the integer `airportCapacity` when running the message `landPlane(@Plane)` will not land the instance of `Plane` and return that the airport is at capacity.

### Test 10
**Testing that an Airport can take off a Plane and check it's status.**\
An instance of the class `Airport` runs the message `takeOffPlane(@Plane)` that given an Object of class `Plane` changes the property `flying` of the Plane instance from `False` to `True` and removes the instance from `planesAtAirport`.

### Test 11
**Testing that an Airport *can't* take off a Plane and that is already flying.**\
An instance of the class `Airport` runs the message `takeOffPlane(@Plane)` that given an Object of class `Plane` with the property `flying` set to `True` will not change anything and return that the Plane has already landed.

### Test 12
**Testing that an Airport *can't* take off a Plane and that isn't currently at the Airport.**\
An instance of the class `Airport` given an Object of class `Plane` checks to see if the instance of `Plane` is present using the message `checkForPlane(@Plane)`, if the message returns `False` then `takeOffPlane(@Plane)` will not run.

## Extended Acceptance Criteria - User Stories
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

## Extended Acceptance Criteria - Domain Modelling

| Objects | Properties                     | Messages                    | Outputs  |
| ------- | ------------------------------ | --------------------------- | -------- |
| Airport | planesAtAirport @Array[@Plane] | checkWeatherStormy(@Weather)| @Boolean |
|         | weather @Weather               | updateWeather(@Weather)     | @Void    |
|         |                                | checkForPlane(@Plane)       | @Boolean |
|         |                                | addPlaneToAirport(@Plane)   | @Void    |
| Plane   | flying @Boolean                | checkFlying()               | @Boolean |
| Weather | stormy @Boolean                | checkStormy()               | @Boolean |
|         |                                | generateWeather()           | @Boolean |

## Extended Acceptance Criteria - Testing

### Test 13
**Testing that an Airport prevents takeoff with stormy weather.**\
An instance of the class `Airport` runs the message `checkWeatherStormy()`, if it returns `True` then `takeOffPlane(@Plane)` will not run.

### Test 14
**Testing that an Airport allows takeoff with stormy weather.**\
An instance of the class `Airport` runs the message `checkWeatherStormy()`, if it returns `False` then `takeOffPlane(@Plane)` will run.

### Test 15
**Testing that an Airport prevents landing with stormy weather.**\
An instance of the class `Airport` runs the message `checkWeatherStormy()`, if it returns `True` then `landPlane(@Plane)` will not run.

### Test 16
**Testing that an Airport allows landing with stormy weather.**\
An instance of the class `Airport` runs the message `checkWeatherStormy()`, if it returns `False` then `landPlane(@Plane)` will run.

### Test 17
**Testing that landed Planes are at an Airport.**\
An instance of the class `Plane` is landed at an instance of `Airport`, the plane should be stored in the `planesAtAirport` property of the airport instance.