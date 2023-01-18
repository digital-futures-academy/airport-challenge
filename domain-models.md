# Airport Challenge

## User Stories and Domain Modelling

### User Story 1
```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```
| Objects | Properties | Messages | Outputs |
|---------|------------|----------|---------|
| Plane | | | |
| Airport | id @str | landPlane() | |

Initial thoughts:
1. I need an airport to land a plane
2. I need to be able to send a message to tell the airport to allow a plane to land
3. I need to tell it which plane is landing

### User Story 2
```
As the system designer.
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```
| Objects | Properties | Messages | Outputs |
|---------|------------|----------|---------|
| Airport | capacity @int | changeCapacity(@int) | @void |
|| defaultCapacity @int ||

Initial thoughts:
1. Does the airport have a default capacity?
2. Can I change this capacity?
3. Need to ensure that capacity is only changed to a valid number.

### User Story 3
```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```
| Objects | Properties | Messages | Outputs |
|---------|------------|----------|---------|
| Airport | capacity @int | isFull() | @bool |

Initial thoughts:
1. If the number of planes in planesLanded is equal to capacity the plane cannot land
2. If the capacity has not been reached it should allow a plane to be added.

### User Story 4
```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```
| Objects | Properties | Messages | Outputs |
|---------|------------|----------|---------|
| Airport || allowTakeOff(@Plane) | @str |
| Plane | id @str | takeOff() ||
|| inAir @bool |getAirStatus(@Plane)||

Initial thoughts
1. Planes will need an ID.
2. Need a function to remove them from the landed list.
3. Only remove planes that exist on the list.
3. need a search on planesLanded to confirm a plane isn't there

### User Story 5
```
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take off which are not at the airport, or land a plane which has already landed
```
| Objects | Properties | Messages | Outputs |
|---------|------------|----------|---------|
| Airport | planesOnGround @array[@Plane] | isGrounded(@Plane) | @str |
|| id @str |||

## Final Domain Model

| Objects | Properties | Messages | Outputs |
|---------|------------|----------|---------|
| Airport | capacity @int | isFull() | @bool |
||planesOnGround @Array[@Plane] |allowTakeOff(@Plane)||
| Plane | id @str | landPlane() | 

#### Extended Acceptance Criteria
```
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy
```

```
As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy
```

```
As an air traffic controller
To count planes easily
Planes that have landed must be at an airport
```