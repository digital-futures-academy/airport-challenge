Domain Modelling

User Story 1

|nouns |


| Object | Property | Message | Output |
| ------ | -------- | ------- | -------|
|airport | planes@array[@string]|landPlane(plane@string)| @string|

1. Test that plane is added to the array (could test length increases after call or that array includes plane received).
2. Test that landPlane returns a string that confirms the plane has landed.


test
if plane has successfully landed it has been added to array of planes.
returns message that plane has landed.

arrange
text fixtures(things that you need at the start of the test):
need instance of airport class
need object that represents plane
// er plane landed needs to appears in array
//ar use airports plane land function with the test function to see if array added plane

act
use airport instance and call plane land passing in plane object.

assert
expected output is that the plane just landed is in the array 
get the array of planes at the airport
access the plane in the array and get its id
assert that that the id from the array matches the id from the test plane.

User Story 2

| Object | Property      | Message | Output |
| ------ | ------------  | ------- | ------ |
|airport |capacity@number|set capacity()|n/a|
|override| capacity |overrideCapacity(@capacity num)| @number|

1. Test that default capacity is set to the default supplied when an airport is constructed.
2. Test that capacity changes when setCapacity is called.

As a system designer, so that the software can be used for many different airports, I would like a default airport capacity that can be overridden as appropriate.

need an array of airports that hold different capacities (array of key value pairs maybe).
input needs to match airport capacity within array for it to be overridden. Or maybe just an array of different capacities(numbers) and input needs to match one of those capacities(numbers) for it to be overridden. 

need an override method/function (use if/else statement maybe)

The desired outcome of this user story is to be able to override the default airport capacity as overridden as appropriate.

test - if default airport capacity can be overridden when appropriate
returns airport capacity overridden

arrange (things needed for start of test)
-need instance of airport class
-need object that represents airport capacity

act
-use airport instance and call override capacity passing in the airport object.

assert
-expected outcome is the capacity already exists in array
-get the arrays of capacities for different airports
-access the airport in the array and get its capacity
-assert that the capacity from the airport is not the default capacity

(speak to ed, may have to create multiple airport classes)


User Story 3

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

desired outcome is to prevent landing when airport is full
(if airport is full. plane cannot land)

| noun | verb |
|------|------|
|airport|full |

| object | property | message | output |
| ------ | -------- | ------- | ------ |
| plane  | id      | addid()  | @id     |
|airport |plane@array|airportFull()|@boolean|

to know whether the airport is full or not (y/n boolean)
need array of planes with max number that can be added into this array

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
