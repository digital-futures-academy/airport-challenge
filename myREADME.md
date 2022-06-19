# Airport Challenge

## User Story 1

```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```

### Domain Modelling

| Object  | Properties              | Messages                | Output   |
| ------- | ----------------------- | ----------------------- | -------- |
| Airport | planeList@Array[@plane] | addLandingPlane(@plane) |          |
| Plane   | name@string             |                         | @Boolean |

### Tests:

1. addLandingPlane doesn't add a plane if there's no input
2. addLandingPlane adds a plane if there's an input

## User Story 2

```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```

### Domain Modelling

| Object  | Properties                                | Messages      | Output  |
| ------- | ----------------------------------------- | ------------- | ------- |
| Airport | planeList@Array[@plane], capacity @number | getCapacity() | @Number |

### Tests:

1. When capacity is called, it returns the private capacity property of the airport
2. changeCapacity can be used to change the total capacity per airport

## User Story 3

```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```

### Domain Modelling

| Object  | Properties              | Messages        | Output   |
| ------- | ----------------------- | --------------- | -------- |
| Airport | isAirportFull()@Boolean | isAirportFull() | @Boolean |

### Tests:

1. If capacity isn't reached, more planes can be added
2. If capacity is reached, no more planes can be added

## User Story 4

```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```

| Object  | Properties              | Messages                           | Output           |
| ------- | ----------------------- | ---------------------------------- | ---------------- |
| Airport | planeList@Array[@plane] | isPlaneInAirport(), takeOffPlane() | @Boolean @String |

### Tests:

1. Check if the plane is in the airport (if it's in the array of planes)
2. If the plane is in the airport, remove the plane from the array
3. When the plane takes off it gives a confirmation message

## User Story 5

```
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```

| Object  | Properties              | Messages                                              | Output           |
| ------- | ----------------------- | ----------------------------------------------------- | ---------------- |
| Airport | planeList@Array[@plane] | isPlaneInAirport(), takeOffPlane(), addLandingPlane() | @Boolean @String |

1. If plane is in the array of planes at the airport, it can't be added to the array (can't be told to land)
2. If plane is not in the array of planes at the airport, it can't be removed from the array (can't be told to take off)
