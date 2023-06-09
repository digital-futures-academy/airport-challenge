Airport Challenge Domain Modelling

1:
As an air traffic controller
I want to instruct the airport to land a plane.
So, I can get passengers to a destination.

Objects	Properties	Message	Output
Airport - landedPlanes @Array [@Planes] - landPlanes (@Planes) -	@Void
Planes - Id @String - getId() - @String

2:
As the system designer
I would like a default airport capacity that can be overridden as appropriate.
So that the software can be used for many different airports.

Objects	Properties	Message	Output
Airport - airportCapacity @Integer - increaseAirportCapacityTo (@Integer) -	@Void
			

3:
As an air traffic controller
I want to prevent landing when the airport is full.
To ensure safety.

Objects	Properties	Message	Output
Airport - landedPlanes @Array [@Planes] - isAirportFull() -	@Boolean
        - airportCapacity @Integer		

4:
As an air traffic controller
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport.
So, I can get passengers on the way to their destination.

Objects	Properties	Message	Output
Airport - landedPlanes @Array [@Planes] - removePlanes (@Planes) - @Void
Planes			

Objects	Properties	Message	Output
Airport - landedPlanes @Array [@Planes] - planesExist (@Planes) - @Boolean
Planes - Id @String - getId() -	@String

5:
As an air traffic controller.
I want to prevent asking the airport to let planes take-off which are not at the airport or land a plane that's already landed.
To avoid confusion.
Objects	Properties	Message	Output
Airport - landedPlanes @Array [@Planes] - planesExist (@Planes) - @Boolean
Planes - Id @String - getId() -	@String

6:
As an air traffic controller.
I want to prevent take-off when weather is stormy.
To ensure safety.
Objects	Properties	Message	Output
Weather - weatherCondition @String [@Airport] -	isStormy (@Airport) - @Boolean
Airport	- landedPlanes @Array [@Planes]	- dontRemovePlanes (@Planes) - @Void
Planes			

7:
As an air traffic controller
I want to prevent landing when weather is stormy.
To ensure safety

Objects	Properties	Message	Output
Weather	- weatherCondition @String [@Airport] - isStormy (@Airport)	- @Boolean
Airport	- incomingPlanes @Array [@Planes] - dontLandPlanes (@Planes) - @Void
Planes			


8:
As an air traffic controller
Planes that have landed must be at an airport.
To count planes easily.
Objects	Properties	Message	Output
Airport	- landedPlanes @Integer [@Planes] - planesExist (@Planes) - @Integer
Planes - Id @String	- getId() - @String


