Airport Challenge - Domain Modelling
=================

```
         ______
        __\____\___
=  = ==(____DFA____)
           \_____\__________________,-~~~~~~~`-.._
          /     o o o o o o o o o o o o o o o o  |\_
          `~-.__       __..----..__                  )
                `---~~\___________/------------`````
                =  ===(_________)

```


#### Acceptance Criteria & Modelling
```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```
| Object | Properties | Message | Output |
| ----------- | ----------- | ----------- | ----------- |
| Airport | planesAtAirport @Array[@string]| landPlane(@plane) | @void|

1. Test that a plane is added to the airport array (i.e length increases).

```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```
| Object | Properties | Message | Output |
| ----------- | ----------- | ----------- | ----------- |
| Airport | capacity @number| setCapacity(newCapacity @number) | @void|

1. Ensure that default capacity is set within the constructor and then test that setCapacity changes when it is called.

```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```
| Object | Properties | Message | Output |
| ----------- | ----------- | ----------- | ----------- |
| Airport | capacity @number| setCapacity(newCapacity @number) | @void|
| Airport | planesAtAirport@Array[@string] | isFull(@string) | @string |

1. Test that if length of planesAtAirport >= capacity, plane cannot be added to the planesAtAirport array.
2. If this is the case, return a string notifying that airport is full.

```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```
| Object | Properties | Message | Output |
| ----------- | ----------- | ----------- | ----------- |
| Airport | planesAtAirport @Array[@string]| takeOffPlane(plane@string) | @string|

1. Test that plane is removed from the planesAtAirport array when passed through the takeOffPlane function.

```
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```
| Object | Properties | Message | Output |
| ----------- | ----------- | ----------- | ----------- |
| Airport | planesAtAirport @Array[@string]| takeOffPlane(plane@string) | @string|
| | | landPlane(plane @string) | @string |
| | | isPlaneAtAirport(plane @string) | @boolean |

1. Test that isPlaneAtAirport returns true when plane is at the planesAtAirport array.
2. Test that isPlaneAtAirport returns false when plane is NOT at the planesAtAirport array.
3. Test that takeOffPlane returns string that notifies plane has taken off if isPlaneAtAirport returned true and reduces planeAtAirport array.
4. Test that takeOffPlane returns an appropriate string if isPlaneAtAirport returned false and that the length of planeAtAirport is still the same as before.
5. Test that landPlane returns message saying plane has landed if isPlaneAtAirport returned false and increase planesAtAirport array as a result.
6. Test that landPlane returns a message saying plane is already at airport if isPlaneAtAirport returned true and does not add plane to the planesAtAirport array.



