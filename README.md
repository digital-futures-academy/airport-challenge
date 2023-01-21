Airport Challenge
=================
## Run: node specRunner.js in terminal to run tests.
-----

We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off.  Here are the user stories that we worked out in collaboration with the client:

#### Acceptance Criteria
```
USER STORY 1
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

| Objects | Properties                   | Messages         | Outputs |
| ------- | ---------------------------- | ---------------- | ------- |
| Airport | airportPlanes @Array[@Plane] | addPlane(@Plane) | @Void   |
|         |                              |                  |         |
| Plane   | id @String                   | getId()          | @String |

Tests
1. Need an airport
2. Need to put plane objects into airport
3. Airport planes should increase by 1 when a plane lands
4. Falsy values not added
```

```
USER STORY 2
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

| Objects | Properties       | Messages      | Outputs |
| ------- | ---------------- | ------------- | ------- |
| Airport | airport.capacity | new Airport() | @Void   |
|         |                  |               |         |
|         |                  |               |         |

Tests
1. Getting default capacity
2. Checking setCapacity changes value
```

```
USER STORY 3
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

| Objects | Properties       | Messages                   | Outputs |
| ------- | ---------------- | -------------------------- | ------- |
| Airport | airport.capacity | new Airport()              | @Void   |
|         |                  |                            |         |
|         | new Plane(5)     | myairport.addPlane(plane5) | @string |

Tests
1. add planes to airport to reach capacity
2. if airportPlanes.length = capacity then addPlanes will not function
```


```
USER STORY 4
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

| Objects | Properties                   | Messages            | Outputs |
| ------- | ---------------------------- | ------------------- | ------- |
| Airport | airportPlanes @Array[@Plane] | removePlane(@Plane) | @Void   |
|         |                              |                     |         |
| Plane   | id @String                   | getId()             | @String |

Tests
1. airportPlanes length decreases to 0 when a Plane entry is found
```


```
USER STORY 5
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

Tests
1. Preventing addPlane from running if plane is already present, return error string
2. Checking if plane is not in airport before removing

| Objects | Properties       | Messages                   | Outputs |
| ------- | ---------------- | -------------------------- | ------- |
| Airport | airport.capacity | new Airport()              | @Void   |
|         |                  |                            |         |
|         | new Plane(5)     | myairport.addPlane(plane5) | @string |

```

