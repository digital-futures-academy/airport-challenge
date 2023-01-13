# Airport Challenge Domain Models [Elle Ordoña]

## Part 1 - User Stories

```sh
As an air traffic controller
So i can get passengers to a destination
I want to instruct the airport to land a plane
```

## Part 1 - Domain Model

| Objects | Properties                      | Messages          | Outputs |
| ------- | ------------------------------- | ----------------- | ------- |
| Airport | groundedPlanes @Array[@Plane]   | landPlane(@Plane) | @Void   |
| Plane   | planeID @String                 | getId()           | @String |

## Part 1 - Tests

Initial Thoughts:

1. Need an airport
2. Need a plane
3. Need to be able to land the plane (add the plane id to the groundedPlanes array)

**Test 1** - `Plane` should be added to the `Airport` `groundedPlanes` when `landPlane` is called

**Test 2** - `landPlane` should only add `Plane` instances to the `groundedPlanes`

**Test 3** - Edge Case - falsy values should not be added to `groundedPlanes`

---

## Part 2 - User Stories

```sh
As the systems designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```

## Part 2 - Domain Model

| Objects | Properties                | Messages                                     | Outputs |
| ------- | ------------------------- | -------------------------------------------- | ------- |
| Airport | airportCapacity @Integer  | changeAirportCapacity(@airportID, @Integer)  | @Void   |
|         | airportID @String         | getAirportID()                               | @String |

## Part 2 - Tests

Initial Thoughts:

1. Need to give any airport created a default value for capacity
2. Need a function to be able to change the capacity

**Test 4** - when an `Airport` is created a default value of 10 is given for `airportCapacity`

**Test 5** - `changeAirportCapacity` will change the `airportCapacity` to the value inputted

**Test 6** - Edge Case - `airportCapacity` can only be a number

---

## Part 3 - User Stories

```sh
As an air traffic controller
To ensure safety
i want to prevent landing when the airport is full
```

## Part 3 - Domain Model

| Objects | Properties                      | Messages                                     | Outputs  |
| ------- | ------------------------------- | -------------------------------------------- | -------- |
| Airport | groundedPlanes @Array[@Planes]  | isAirportFull()                              | @Boolean |
|         | airportCapacity @Integer        | getAirportCapacity()                         | @Integer |
|         | airportID @String               | getAirportID()                               | @String  |
|         |                                 | changeAirportCapacity(@airportID, @Integer)  | @Void    |
| Planes  | planeID @String                 | getID()                                      | @String  |

## Part 3 - Tests

---

## Part 4 - User Stories

```sh
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```

## Part 4 - Domain Model

| Objects | Properties                      | Messages             | Outputs |
| ------- | ------------------------------- | -------------------- | ------- |
| Airport | groundedPlanes @Array[@Planes]  | takeoffPlane(@Plane) | @String |
| Plane   | planeID @String                 | getPlaneID()         | @String |

## Part 4 - Tests

---

## Part 5 - User Stories

```sh
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane thats already landed

^^^^ 2 user stories - going to break them down

As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let plane take-off which are not at the airport

As an air traffic controller
To avoid confusion
I want to prevent asking the airport to land a plane that has already landed
```

## Part 5 - Domain Model

| Objects | Properties                      | Messages              | Outputs  |
| ------- | ------------------------------- | --------------------- | -------- |
| Airport | groundedPlanes @Array[@Planes]  | takeoffPlane(@Plane)  | @String  |
|         | airportID @String               | planeExists(@Plane)   | @Boolean |
| Plane   | planeID @String                 | getPlaneID()          | @String  |

## Part 5 - Tests

---
