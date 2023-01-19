# Airport Challenge-Domain Model

*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~
## User Story :1
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

## Domain Model:
Noun: Airport, Plane                Verbs: land

| Objects | Properties                    | Messages           | Outputs |
| ------- | -------------------------     | -----------------  | ------- |
| Airport | airportRunway @Array[@Plane]  |planeLanded(@Plane) | @Void   |
|         | airportId @Srting             | getAirportId()     | @String |
| Plane   | planeId @String               | getPlaneId()       | @String |

## Tests:

Initial thoughts:
1. Need an airport with Id and Runway.
2. Need to be able to land a plane on Runway..
3. Airport Runway list length should increase by 1 when a plane is landed to empty list.

**Test 1** - `airportRunway` length increases when `planeLanded` is called with *instance of `Plane`*

**Test 2** - `addplane` should only add `Plane` instances to the `airportRunway list`

**Test 3** - Edge Case - falsy values should not be added to the Runway

*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~

## User Story:2
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

## Domain Model:
Noun: Airport capacity                   Verbs: overridden

| Objects | Properties                | Messages                  | Outputs |
| ------- | ------------------------- | -----------------         | ------- |
| Airport | airportCapacity @Int      |     airportCapacity()     |  @Int   | 
|         |                           |                           |         |
|         | airportId @String         | getAirportId()            | @String |              

## Tests:

Initial thoughts:
1. Should have a airport capacity to check whether plan can land.
2. airport capacity must generate a random number so that software can run any size of airport.

**Test 4** - For `airportCapacity=true` the Plane should be landed.

*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~

## User Story:3
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

## Domain Model:
Noun: Airport,Plane                  Verbs:prevent landing 

| Objects | Properties                    | Messages                  | Outputs |
| ------- | -------------------------     | -----------------         | ------- |
| Airport |airportRunway @Array[@Plane]   | isRunwayFull()            |@Boolean |
|         |                               |                           |         |
| Plane   | landingGear @String           | landingGear()             |@Boolean | 

# Tests:

Initial thoughts:
1. Testing `airportRunway` for edge cases e.g: when airport is full(airportCapacity=max or airportCapacity=0) plane must abort landing i.e: Landing  

**Test 5** - Plane should not be landed if `airportCapacity=0`.

**Test 6** - Plane should not be landed if `airportCapacity=full/maximum` .

*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~

## User Story:4
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

## Domain Model:
Noun: Airport,Plane                  Verbs: takeoff

| Objects | Properties                    | Messages                  | Outputs |
| ------- | -------------------------     | -----------------         | ------- |
| Airport |airportRunway @Array[@Plane]   | planeTakingOff(@Plane)    |@void    |
|         |                               | indexOfItemInAirportRunway|@Int     |
| Plane   | planeId @String               | getPlaneId()              |@String  |     

# Tests:

Initial thoughts:
1. Need to be able to make plane take off.
2. Generating some indication to confirm taking oof.

**Test 7** -  The length of runway should come 1 less after taking off of plane .
       
*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~
## User Story:5
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

## Domain Model:
Noun: Airport,Plane                  Verbs: store

| Objects | Properties                           | Messages           | Outputs         |
| ------- | ---------------------------------    | -----------------  | -------         |
| Airport |airportRunway @Array[@Plane]          | findPlane()        |@Array[1,0]      |
|         |                                      |                    |                 |
|         |                                      |                    |                 |
# Tests:

Initial thoughts:
1. Need to record plane's status for confirmed landing and taking off from their respective methods.

**Test 8** -  extracting information about landing and taking off from planeLanded and planeTakingOff.
*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~

#### Extended Acceptance Criteria

As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

## Domain Model:
Noun: Airport,Plane                  Verbs: prevent landing

| Objects | Properties                           | Messages             | Outputs   |
| ------- | ---------------------------------    | -----------------    | -------   |
| Airport |airportRunway @Array[@Plane]          | planeLanded(@Plane)  |@void      |
|         |                                      | planeTakingOff(@Plane)|@void     | 

# Tests:

Initial thoughts:
1. weather should be set randomly(0-9) where 0 is stormy and plane must abort landing.

**Test 9** -  Prevent landing for stormy weather.             
*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy
## Domain Model:
Noun: Airport,Plane                  Verbs: prevent take off

| Objects | Properties                           | Messages             | Outputs   |
| ------- | ---------------------------------    | -----------------    | -------   |
| Airport |airportRunway @Array[@Plane]          | planeLanded(@Plane)  |@void      |
|         |                                      | planeTakingOff(@Plane)|@void     | 

# Tests:

Initial thoughts:
1. weather should be set randomly(0-9) where 0 is stormy and plane must not take off..

**Test 10** -  Prevent takeoff for stormy weather!       
*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~
As an air traffic controller
To count planes easily
Planes that have landed must be at an airport.

## Domain Model:
Noun: Airport,Plane                  Verbs: count

| Objects | Properties                           | Messages             | Outputs   |
| ------- | ---------------------------------    | -----------------    | -------   |
| Airport |airportRunway @Array[@Plane]          | planeLanded(@Plane)  |@void      |
|         |                                      | airportplaneCount    |@Int       | 

# Tests:

Initial thoughts:
1. counting all the planes on runway through airportplaneCount which will increase after each landing which will be equal to airportRunway length.

**Test 11** -  airportRunway length will increase after landing and is equal to airportplaneCount.    





