# Airport Challenge

``````
         ______
        __\____\____
=  = ==(___PRATIK___)
           \_____\__________________,-~~~~~~~`-.._
          /     o o o o o o o o o o o o o o o o  |\_
          `~-.__       __..----..__                  )
                `---~~\___________/------------`````
                =  ===(_________)

``````

## Installation Steps

1. Fork this repo, and clone to your local machine
2. `npm install` to install project dependencies
3. Run the tests using `npm test` or `node specRunner.js`

## Task

#### Convert stories into a representative domain model and test-drive your work.

We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off. Here are the user stories that we worked out in collaboration with the client:

#### User story - 1

```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```

**Initial thoughts:**

1. Need an Airport, that has an array of planes in that airport.
2. Need a plane.
3. `landPlanes` should only take in instances of _Plane_
4. Airport should be able to land a plane, increasing the number of planes in airport.

_Test 1_ - `planesInAirport[` length increases when `landPlane()` is called.\
_Test 2_ - Test `landPlane()` by passing in a string.\
_Test 3_ - Test `landPlane()` by passing in a falsy value, `null`, `undefined`.

#### Domain Model - 1

| Objects | Properties                     | Messages          | Outputs |
| ------- | ------------------------------ | ----------------- | ------- |
| Airport | planesInAirport @Array[@Plane] | landPlane(@Plane) | @Void   |

#### User story - 2

```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```

**Initial Thoughts:**

1. Each Airport should have a default capacity.
2. `setCapacity()` should take in a number that sets the capacity of the airport.
3. Falsy parameters will return the default capacity value.

_Test 4_ - Get the default capacity of the airport.\
_Test 5_ - Change the capacity of the airport using `setCapacity()` by passing in a number.\
_Test 6_ - Change the default capacity of the airport by passing in a falsy value when initialising a new Airport.\
_Test 7_ - Change the capacity of the airport using `setCapacity()` by passing in a falsy value when.

#### Domain Models - 2

| Objects | Properties       | Messages             | Outputs |
| ------- | ---------------- | -------------------- | ------- |
| Airport | capacity @Number | setCapacity(@Number) | @Void   |

#### User story - 3

```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```

**Initial thoughts:**

1. Check the capacity of the Airport.
2. Land planes to reach max capacity.
3. If planesInAirport.length >= capacity, then isAirportFull() returns true;
4. If isAirportFull() returns true, then landPlane() should not push planes to the planesInAirport array.

_Test 8_ - Check if the airport is full using `isAirportFull()`.

#### Domain Model - 3

| Objects | Properties                     | Messages          | Outputs  |
| ------- | ------------------------------ | ----------------- | -------- |
| Airport | capacity @Number               | isAirportFull()   | @Boolean |
|         | planesInAirport @Array[@Plane] | landPlane(@Plane) | @Void    |

#### User Story - 4

```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```

Initial thoughts:

1. Land planes first, to increase the length of `planesInAirport[]`
2. Just think of removing the plane from the array.
3. Check if the length of array is reduced after using `takeOffPlane()`.
4. `takeOffPlane()` should take in `planeID` to identify the plane to take off from the airport.
5. _Plane_ should have a `getID()` method to return the ID of the plane.

_Test 9_ - Take off plane using `takeOffPlane()`.

#### Domain Model - 4

| Objects | Properties      | Messages               | Outputs  |
| ------- | --------------- | ---------------------- | -------- |
| Airport |                 | takeOffPlane(@planeID) | @Boolean |
| Plane   | planeID @Number | getID()                | @Number  |

#### User story 5

```
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport,
or land a plane that's already landed
```

**Initial thoughts:**

1. Make 2 instances of Airport.
2. Land a plane in the first one.
3. Use a method `doesPlaneExist()` and pass in the plane to any airport, to return a boolean. True = Exists, False = Does not exist.
4. When taking off, check if the plane exists in the airport (planesInAirport)
5. When landing a plane, check if `landPlane()` has been called previously that had the same parameters.

_Test 10_ - Land a plane in the first airport and check if it exists in the `planesInAirport[]`.\
_Test 11_ - Take off a non - existent plane from the second airport.\
_Test 12_ - Land a plane first, then land the plane again in the same airport.

#### Extended (Weather Feature)

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

**Initial thoughts:**

1. Make a new Weather class.
2. Default weather in _Airport_ is always **Sunny**
3. Can pass in a Weather with **Stormy** as parameter when instantiating a new _Airport_.
4. Generate a random number between 1 and 2, assigning each to either **Sunny** or **Stormy**.
   6

_Test 13_ - Check if both **Sunny** and **Stormy** are passed in correctly to Airport.\
_Test 14_ - Land a plane with weather set as **Sunny**.\
_Test 15_ - Land a plane with random weather set using `getRandomWeather()` in _Airport_.\
_Test 16_ - Take off a plane with random weather set using `getRandomWeather()` in _Airport_.

### Final Domain Model

| Objects | Properties                        | Messages               | Outputs  |
| ------- | --------------------------------- | ---------------------- | -------- |
| Airport | capacity @Number                  | setCapacity(@Number)   | @Void    |
|         | airportWeather @Object {@Weather} |                        | @Weather |
|         | planesInAirport @Array[@Plane]    | isAirportFull()        | @Boolean |
|         | airportWeather @String            | landPlane(@Plane)      | @String  |
|         |                                   |                        | @Void    |
|         |                                   | takeOffPlane(@Plane)   | @String  |
|         |                                   |                        | @Void    |
|         |                                   | doesPlaneExist(@Plane) | @Boolean |
|         |                                   |                        |          |
| Plane   | id @Number                        | getID()                | @Number  |
|         |                                   |                        | @Void    |
| Weather | defaultWeather @String            | getRandomNumber()      | @Number  |
|         |                                   | getRandomWeather()     | @String  |
