v# Airport Challenge

## User Stories and Domain Modelling

### User Story 1
```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```
| Objects | Properties | Messages | Outputs 
|---------|------------|----------|---------
| Plane | id @str
| Airport | id @str | landPlane()

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
| Objects | Properties | Messages | Outputs 
|---------|------------|----------|---------
| Airport | capacity @int | changeCapacity(@int) | @void 

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
| Objects | Properties | Messages | Outputs 
|---------|------------|----------|---------
| Airport | capacity @int | isFull() | @bool 

Initial thoughts:
1. If the number of planes in planesLanded is equal to capacity the plane cannot land
2. If the capacity has not been reached it should allow a plane to be added.
3. I may not actually need a function for this since it will not be reused.

### User Story 4
```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```
| Objects | Properties | Messages | Outputs 
|---------|------------|----------|---------
| Airport || takeOff(@Plane) | @str 
| Plane | id @str | takeOff() 
|| inAir @bool |getAirStatus(@Plane)

Initial thoughts
1. Planes will need an ID.
2. Need a function to remove them from the landed list.
3. Only remove planes that exist on the list.
4. need a search on planesLanded to confirm a plane isn't there
5. Show a message to confirm this.

### User Story 5
```
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take off which are not at the airport, or land a plane which has already landed
```
| Objects | Properties | Messages | Outputs
|---------|------------|----------|---------
| Airport | planesOnGround @array[@Plane] | | @str 
|| id @str
| Plane | id @str 

## Final Domain Model
Removing some repeated functionality:

| Objects | Properties | Messages | Outputs 
|---------|------------|----------|---------
| Airport | capacity @int | isFull() | @bool 
||planesOnGround @Array[@Plane] |takeOff(@Plane)
||| landPlane(@Plane)|@str
| Plane | id @str | landPlane()

#### Extended Acceptance Criteria
```
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy
```
As above, plus:
| Objects | Properties | Messages | Outputs 
|---------|------------|----------|---------
| Weather | | isItStormy() | @bool 
 Airport | | isItStormy() | weather.isItStormy() 

```
As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy
```
I can resuse the functionality added above to create this, no new objects needed.

```
As an air traffic controller
To count planes easily
Planes that have landed must be at an airport
```
This adds a property of 'airport' to the plane, so that the plane knows which airport it is at, as well as the airport knowing which planes it contains.
| Objects | Properties | Messages | Outputs 
|---------|------------|----------|---------
| Plane | airport @str | getAirport() | @str 
||| setAirport(@Airport)