| Objects     | Properties                     | Methods                         | Output   |
| ----------- | -----------                    | ---------                       | ---------|
| Plane       | ID @String                     | getID()                         | @String  |
|             |                                |                                 |          |
| Airport     | planesAtAirport @Array[@plane] | landPlane (@plane, @weather)    | @void    |
|             | airportCapacity @Integer       | planeTakeOff (@plane, @weather) | @void    |
|             |                                | increaseCapacity()              | @void    |
|             |                                | decreaseCapacity()              | @void    |
|             |                                | isFull()                        | @boolean |
|             |                                | isPlaneAtAirport (@ID)          | @boolean |
|             |                                |                                 |          |
| Weather     |                                | getWeather()                    | @String  |


```
User Story 1:
As an air traffic controller.
So I can get passengers to a destination.
I want to instruct the airport to land a plane.

Initial Thoughts:
1. Need an airport and a plane.
2. Plane should have an ID.
3. Need to be able to add a plane to the airport (array).
4. Planes at airport list length should increase by 1 when plane is added.
5. Plane should not be added if not an instanceof Plane or a Falsy value, so planes at airport list length should not increase.

Test 1: When a plane is created it has an ID which can be returned using getID.
Test 2: PlanesAtAirport length in Airport increases to 1 when landPlane is called on an empty airport with instance of Plane.
Test 3: landPlane should only allow plane instances to be landed in the airport.
Test 4: Edge Case: Falsy value planes should not be added to the airport.

```

```
User story 2:
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

Initial Thoughts:
1. Aiport will need a default capacity.
2. Aiport capacity can be changed when new Airport() is created.
3. Airport capacity can change after new Airport() has been created.

Test 5: airportCapacity has a default capacity of 10.
Test 6: irportCapacity can be overridden when new Airport() is created.
Test 7: airportCapacity can be increased after airport creation.
Test 8: airportCapacity can be decreased after airport creation.

```

```
User Story 3:
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

Initial thoughts:
1. Airport needs to be full when capacity is met (Array length is greater than airportCapacity).
2. If full, planes cannot land.
3. If not full, planes can land.

Test 9: Check that airportCapacity is full using isFull.
Test 10: Check that airportCapacity is not full using isFull
Test 11: When airportCapacity is full, a plane cannot land

```

```
User Story 4:
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

Initial thoughts:
1. planesAtAirport length will decrease by 1 when plane leaves the airport.
2. Check the plane is no longer at the airport by checking the planesAtAirport ID's.

Test 12: planesAtAirport length decreases by 1 when plane is identified and removed from an airport.
Test 13: Check that the plane has left the airport after planeTakeOff

```

```
User Story 5:
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

Initial thoughts:
1. Need to check the plane exists at the airport, or does not exist at the airport (look through planesAtAirport array and check ID).
2. If plane exists at the airport it cannot land, but can take off
3. If plane doesnt exist at the airport it can take off, but not land

Test 14: Check plane exists in planesAtAirport
Test 15: Check plane does not exist in planesAtAirport
Test 16: Check plane does not take off when not at the airport
Test 17: Check plane does not land if already in the airport

```

```
User Story 6: 
As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

Initial thoughts:
1. Weather needs to be randomised, however will need to set the weather for testing purposes
2. When weather is stormy, planesAtAirport length should not decrease as planes cannot take off
3. When weather is sunny, planesAtAiport length should decrease by 1 as planes can take off. This has already been tested.

Test 18: Plane can not land when weather is stormy so planesAtAiport length should not decrease.

```

```
User story 7:
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

Initial thoughts:
1. When weather is stormy, planes cannot land so planesAtAirport length should not increase.
2. When weather is sunny, planes can land so planesAtAirport length can increase. This has already been tested.

Test 19: Plane can not take off when weather is stormy, so planesAtAiport length should not decrease

```

```
Other thoughts:
1. I felt some of my methods could have been refactored, for example the for loop isPlaneAtAirport in the Airport class, however tried another loop but wasnt successful
2. The Airport class is tighly coupled with the Plane class, however wasnt confident in how I could make them loosly coupled.
3. When setting random weather, as only occasionally stormy, it will generate at 20% stormy and 80% sunny.
