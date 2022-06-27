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

User Story 4

as an air traffic controller 
so i can get passengers on the way to their destination
i want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

| noun | verb |
|airport| plane left |
|plane | take off |

| object | property | message | output |
|airport |planesAtAirport@array[@string]| takeOffPlane(plane @string) |@string |


1. Test that plane is removed from the planesAtAirport array when passed to `takeOffPlane`
2. Test that `takeOffPlane` returns a string confirming that the plane has "taken off"


User Story 5

As an air traffic controller
to avoid confusion
i want to prevent asking the airport to let planes take off which are not at the airport or land a plane thats already landed

| noun | verb |
|airport| prevent |

| Objects   | Properties                        | Messages                            | Output   |
| --------- | --------------------------------- | ----------------------------------- | -------- |
| `airport` | `planesAtAirport` @ARRAY[@string] | `takeOffPlane(plane` @string`)`     | @string  |
|           |                                   | `landPlane(plane` @string`)`        | @string  |
|           |                                   | `isPlaneAtAirport(plane` @string`)` | @boolean |

1. Test that `isPlaneAtAirport` returns `true` when **plane** IS in the `planesAtAirport` array
2. Test that `isPlaneAtAirport` returns `false` when **plane** IS NOT in the `planesAtAirport` array
3. Test that `takeOffPlane` returns message saying **plane** has taken off if `isPlaneAtAirport` returned `true`
4. Test that `takeOffPlane` reduces `planesAtAirport` array by removing **plane** that has taken off if `isPlaneAtAirport` returned `true`
5. Test that `takeOffPlane` returns an appropriate **string** if `isPlaneAtAirport` returned `false`
6. Test that **length** of `planesAtAirport` is still same as before if `isPlaneAtAirport` returned `false`
7. Test that `landPlane` returns message saying **plane** has landed if `isPlaneAtAirport` returned `false`
8. Test that `landPlane` adds **plane** to `planesAtAirport` array if `isPlaneAtAirport` returned `false`
9. Test that `landPlane` returns message saying **plane** is already at airport if `isPlaneAtAirport` returned `true`
10. Test that `landPlane` does not add **plane** to `planesAtAirport` if `isPlaneAtAirport` returned `true`

1 + 2. The isplanesatairport method needs to return true in it if a plane is in the planesatairport array and false if it isnt. (ternary expression = planesAtAirport.length === 1 ? return `true` : return `false`)

