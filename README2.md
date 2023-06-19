Airport Challenge Domain Modelling

1:
As an air traffic controller
I want to instruct the airport to land a plane.
So, I can get passengers to a destination.

|Objects |   Properties	                 | Message	        |  Output
|--------|-------------------------------|----------------------|----------
|Airport | landedPlanes @Array [@Planes] | landPlanes (@Planes) |  @Void
|Planes  | Id @String                    | getId() -            |  @String

Tests:
Test 1 - Check that Land plane in an empty airport using landPlanes and expect array (landedPlanes) to increase in length by 1.
Test 2 - Test that planes passed to landPlanes have actually been landed in the airport.
Test 3 - Test that planes can land when there are already planes in the landedPlanes Array.

2:
As the system designer
I would like a default airport capacity that can be overridden as appropriate.
So that the software can be used for many different airports.

|Objects |  Properties	            | Message	                           | Output
|--------|--------------------------|--------------------------------------|--------
|Airport | airportCapacity @Integer | increaseAirportCapacityTo (@Integer) | @Void

Tests:
Test 1 - Check that airportCapacity returns a default airport capacity.
Test 2 - Check that using modifyAirportCapacity modifies default airport capacity.

3:
As an air traffic controller
I want to prevent landing when the airport is full.
To ensure safety.

|Objects |	Properties               | Message	   |  Output
|--------|-------------------------------|-----------------|-------------------
|Airport | landedPlanes @Array [@Planes] | isAirportFull() |	@Boolean
|        | airportCapacity @Integer	 |	           |

Tests:
Test 1 - Test that isAirportFull() returns Boolean.
Test 2 - Test that when isAirportFull() returns “False”, planes cannot be landed.

4:
As an air traffic controller
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport.
So, I can get passengers on the way to their destination.

|Objects | Properties	                 | Message	          | Output
|--------|-------------------------------|------------------------|--------
|Airport | landedPlanes @Array [@Planes] | removePlanes (@Planes) | @Void
|Planes	 |		                 |                        |

|Objects |	Properties	         |  Message	          |  Output
|--------|-------------------------------|------------------------|--------------
|Airport | landedPlanes @Array [@Planes] |  planesExist (@Planes) |  @Boolean
|Planes  | Id @String                    |  getId() 	          |  @String

Tests
Test 1 - Check that taking-off plane from an airport using removePlanes and expect array (landedPlanes) to decrease in length by 1.
Test 2 - Test that only the desired plane was removed from the landedPlanes array.
Test 3 - Test that planesExist returns a message when a plane has been removed from the landedPlanes array.

5:
As an air traffic controller.
I want to prevent asking the airport to let planes take-off which are not at the airport or land a plane that's already landed.
To avoid confusion.

|Objects | Properties	                 |    Message	          |   Output
|--------|-------------------------------|------------------------|-----------------
|Airport | landedPlanes @Array [@Planes] |  planesExist (@Planes) |  @Boolean
|Planes  | Id @String                    |  getId()          	  |  @String

Tests:
Test 1 - planesExist() returns message stating that when planes are no longer at airport, planes cannot take off.
Test 2 - Test that when a plane is at landedPlanes array, planesExist() returns a message stating that the plane is already at the airport.


*Note*
This challenge could have been done in different ways, such as using classes to define the different objects, and using Jasmine as the testing-framework. The decision to not use those methods was taken in order to consolidate the knowledge gained in week 1.