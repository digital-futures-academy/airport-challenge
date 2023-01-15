# Airport Challenge

## User Stories and Domain Modelling

### User Story 1

> As an air traffic controller
>
> So I can get passengers to a destination
>
> I want to instruct the airport to land a plane

| Objects | Properties | Messages | Outputs |
|---------|------------|----------|---------|
| Plane | | | |
| Airport | id @str | landPLane() | @ str |

### User Story 2

> As the system designer.
>
> So that the software can be used for many different airports
>
>I would like a default airport capacity that can be overridden as appropriate

| Objects | Properties | Messages | Outputs |
|---------|------------|----------|---------|
| Airport | capacity @int | changeCapacity(@int) | @void |
|| defaultCapacity @int ||

### User Story 3

> As an air traffic controller
>
> To ensure safety
>
> I want to prevent landing when the airport is full

| Objects | Properties | Messages | Outputs |
|---------|------------|----------|---------|
| Airport | capacity @int | isFull() | @bool |

### User Story 4

> As an air traffic controller
>
> So I can get passengers on the way to their destination
>
> I want to instruct the airport to let a plane take off and confirm that it is not longer in the airport

| Objects | Properties | Messages | Outputs |
|---------|------------|----------|---------|
| Airport || allowTakeOff(@Plane) | @str |
| Plane | id @str | takeOff() ||
|| inAir @bool |getAirStatus(@Plane)||

### User Story 5

> As an air traffic controller
>
> To avoid confusion
>
> I want to prevent asking the airport to let planes take off which are not at the airport, or land a plane which has already landed

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
