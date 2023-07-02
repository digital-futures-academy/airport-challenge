## Airport Challenge - Domain Models and Tests

### Acceptance Criteria
#### User Story 1
```sh
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```

#### Domain Model
| Objects | Properties                 | Messages          | Outputs |
| ------- | -------------------------- | ----------------- | ------- |
| Airport | planesList @Array[@Planes] | landPlane(@Plane) | @Void   |
| Plane   | id @String                 | getId()           | @String |

#### Tests
1. Test whether the airportPlanes has increased by 1 once a plane has been instructed to land. 

#### User Story 2
```sh
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```

#### Domain Model
| Objects | Properties        | Messages              | Outputs  |
| ------- | ----------------- | --------------------- | -------- |
| Airport | capacity @Integer | setCapacity(@Integer) | @Void    |
|         |                   | getCapacity()         | @Integer |

#### Tests
1. Test creating an airport without specifying the capacity and verify it uses the default capacity.
2. Test creating an airport with a specific capacity and verify it is set correctly.
3. Test setting a negative capacity for the airport and verify the appropriate error is thrown.

#### User Story 3
```sh
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```

#### Domain Model
| Objects | Properties                 | Messages               | Outputs  |
| ------- | -------------------------- | ---------------------- | -------- |
| Airport | planesList @Array[@Planes] | landPlane(@Plane)      | @Void    |
|         | capacity @Integer          | getCapacity()          | @Integer |
|         |                            | isFull()               | @Boolean |
|         |                            | validateLanding(@Plane)| @Void    |
| Plane   | id @String                 | getId()                | @String  |

#### Tests
1. Test attempting to land a plane when the airport is already at maximum capacity and verify the appropriate error is thrown.
2. Test modifying the airport's capacity to a lower value and verify previously landed planes are not affected.


#### User Story 4
```sh
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```

#### Domain Model
| Objects | Properties                 | Messages            | Outputs  |
| ------- | -------------------------- | ------------------- | -------- |
| Airport | planesList @Array[@Planes] | takeOff(@Plane)     | @Void    |
|         |                            | isAtAirport(@Plane) | @Boolean |
| Plane   | id @String                 | getId()             | @String  |

#### Tests
1. Test taking off a plane from the airport and verify it is removed from the planes list.
2. Test if the right plane has been removed from the planes list by calling isAtAirport().

#### User Story 5
```sh
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed.
```

#### Domain Model
| Objects | Properties                 | Messages               | Outputs  |
| ------- | -------------------------- | ---------------------- | -------- |
| Airport | planesList @Array[@Planes] | isAtAirport(@Plane)    | @Boolean |
|         |                            | validateTakeOff(@Plane)| @Void    |
|         |                            | validateLanding(@Plane)| @Void    |
| Plane   | id @String                 | getId()                | @String  |

#### Tests
1. Test taking off a plane that is not at the airport and verify the appropriate error is thrown.
2. Test landing a plane at the airport that have already landed and verify the appropriate error is thrown.


### Extended Acceptance Criteria
#### User Story 6
```sh
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy
```

#### Tests
1. Test taking off a plane when the weather is not stormy and verify it is successful.
2. Test simulating stormy weather conditions and attempt to take off a plane, ensuring the appropriate error is thrown.

#### Domain Model
| Object  | Properties                 | Messages                | Outputs  |
| ------- | -------------------------- | ----------------------- | -------- |
| Airport | planesList @Array[@Planes] | takeOff(@Plane)         | @Void    |
|         | weather @String            | validateTakeOff(@Plane) | @Void    |
|         |                            | setWeather(@Weather)    | @Void    |
| Weather | condition @String          | setWeather(@Condition)  | @Void    |
|         |                            | isStormy()              | @Boolean |

#### User Story 7
```sh
As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy
```

#### Domain Model
| Object  | Properties                 | Messages                | Outputs  |
| ------- | -------------------------- | ----------------------- | -------- |
| Airport | planesList @Array[@Planes] | landPlane(@Plane)       | @Void    |
|         | weather @String            | validateLanding(@Plane) | @Void    |
|         |                            | setWeather(@Weather)    | @Void    |
| Weather | condition @String          | setWeather(@Condition)  | @Void    |
|         |                            | isStormy()              | @Boolean |

#### Tests
1. Test landing a plane when the weather is not stormy and verify it is successful.
2. Test simulating stormy weather conditions and attempt to land a plane, ensuring the appropriate error is thrown.


#### User Story 8
```sh
As an air traffic controller
To count planes easily
Planes that have landed must be at an airport
```

#### Domain Model
| Objects | Properties                | Messages               | Outputs  |
| ------- | ------------------------- | ---------------------- | -------- |
| Airport | planesList @Array[Planes] | getLandedPlanes()      | @Array   |

#### Tests
1. Test for verifying the presence of landed planes by checking the planes list and ensuring it contains the appropriate planes.