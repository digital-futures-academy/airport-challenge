# Domain Models (with user stories):

## Acceptance Criteria

### User Story 1:

"As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane"

Function: plane (item) can land (add) at airport (array)

Objects | Properties | Messages | Output
--------|------------|----------|-------
airport | landedPlanes@Array\[@Id\]           | landPlane() | @void
plane   |id@String            |  getId()        | @String


### User Story 2:

"As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate"

Function: default airport capacity (a default max length of array) can be increased if need be (max length of array can be increased)

Objects | Properties | Messages | Output
--------|------------|----------|-------
airport | maxAirportCapacity @Int, landedPlanes@Array\[ @Id\] | increaseAirportCapacity() | @void

### User Story 3:

"As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full"

Function: if airport(array of landed planes) is full, prevent landing land (do not add to array)  

Objects | Properties | Messages | Output
--------|------------|----------|-------
airport |landedPlanes @Array\[@Id\]            | isFull() | @boolean
plane   | Id            |          |


### User Story 4:

"As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport"

Function: Remove plane from array of planes

Objects | Properties | Messages | Output
--------|------------|----------|-------
airport | landedPlanes @Array\[@Id\],            | planeTakeOff() | @boolean
plane   | Id            |          |


### User Story 5;

"As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed"

Function: don't remove planes that are not in the array (redundant?) and not allow duplicated planes to to be added to array

Objects | Properties | Messages | Output
--------|------------|----------|-------
airport | landedPlanes @Array\[@Id\], toTakeOffPlanes @ Array\[@Id\]           | planeTakeOff() | @boolean
plane   | Id            |          |



## Extended Criteria 

### EC 1 

"As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy"

Function: if stormy, don't remove plane from array

Objects | Properties | Messages | Output
--------|------------|----------|-------
airport |landedPlanes @Array\[@Id\], weather @String            | isStormy() | @boolean
plane   | Id            |          |
weather | currentWeather@String, validWeatherStates@Array\[@String\] | getWeather(), setCurrentWeather() | @string

### EC 2

"As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy"

Function: if stormy, don't add plane to array

### EC 3 

"As an air traffic controller
To count planes easily
Planes that have landed must be at an airport"

Function: planes that land should be in an array (shouldn't this be the case)