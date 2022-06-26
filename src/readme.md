Domain Modelling

User Story 1

|nouns |


| Object | Property | Message | Output |
| ------ | -------- | ------- | -------|
|airport | planes@array[@string]|landPlane(plane@string)| @string|

1. Test that plane is added to the array (could test length increases after call or that array includes plane received).
2. Test that landPlane returns a string that confirms the plane has landed.


User Story 2

| Object | Property      | Message | Output |
| ------ | ------------  | ------- | ------ |
|airport |capacity@number|setCapacity()|n/a|
|override| capacity |overrideCapacity(@capacity num)| @number|

1. Test that default capacity is set to the default supplied when an airport is constructed.
2. Test that capacity changes when setCapacity is called.

As a system designer, so that the software can be used for many different airports, I would like a default airport capacity that can be overridden as appropriate.


User Story 3

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

| noun | verb |
|------|------|
|airport|full |

| object | property | message | output |
| ------ | -------- | ------- | ------ |
|airport | capacity@number=5 |getCapacity()| @number |
|airport |planesAtAirport@array|landPlane(plane@string)|@string|
|airport |          |isAirportFull()|@boolean|

isAirportFull() should return true when length of planesAtAirport is greater than/equal to capacity.
isAirportFull()
return planesAtAirport.length >= capacity;

working on the logic in the landPlane method that we have already started to develop. We need to put a condition on whether the plane is added to the array or not.
In landPlane(plane), if isAirportFull() is false then land plane. If its true then we can return message saying airport is full. 

1. Test that if length of planesAtAirport is >= capacity, plane is not added to array.
2. Test that landPlane returns a string saying the airport is full if that is the case.

fixtures - need a full airport(make capacity 1 and land a plane), in act - try to land another plane. 
assert that planesAtAirport.length is still a cap of 1.
assert that string returned by landPlane contains full

arrange 
instance of airport class
object that represents plane
plane needs to land 
need airport function that lets us know if it is full or not

act
use the airport instance and call land plane only if capacity is not full

assert
expected outcome is plane cannot land since capacity in airport is full
expected outcome is plane can land since airport is not full
access plane in array and get its id
assert that the id from the array can be added 

User Story 4

as an air traffic controller 
so i can get passengers on the way to their destination
i want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

| noun | verb |
|airport| plane left |
|plane | take off |

| object | property | message | output |
|airport |          | planeLeft() |    |
| plane  | plane    | takeOff()|@boolean|

the airport needs to record and confirm whether a plane in the array has left and can tell this by whether the id is no longer in the array or not

the take off function needs to instruct the plane to take off
--> if id is in the array --> take off

the plane left function needs to record whether the plane has left the airport or not by checking the array of plane ids with `planesAtAirport=[]`
--> if id is absent -> plane not in airport


User Story 5

As an air traffic controller
to avoid confusion
i want to prevent asking the airport to let planes take off which are not at the airport or land a plane thats already landed

| noun | verb |
|airport| prevent |
| plane | 

| object | property | message | output |
| ------ | -------- | ------- | ------ |
| plane  |          |         |        |
|airport |          | preventTakeOff() | @string |


prevent take off if plane id is not in an array at planesAtAirport = []

This unfortunately is not complete.
