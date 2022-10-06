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
| Object  | Properties                      | Message           | Output |
| ------- | ------------------------------- | ----------------- | ------ |
| Airport | planesAtAirport @Array[@string] | landPlane(@plane) | @void  |

1. Test that a plane is added to the airport array (i.e length increases).
---
```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```
| Object  | Properties       | Message                          | Output |
| ------- | ---------------- | -------------------------------- | ------ |
| Airport | capacity @number | setCapacity(newCapacity @number) | @void  |

1. Ensure that default capacity is set within the constructor and then test that capacity changes when setCapacity is called.
---
```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```
| Object  | Properties                     | Message                          | Output  |
| ------- | ------------------------------ | -------------------------------- | ------- |
| Airport | capacity @number               | setCapacity(newCapacity @number) | @void   |
| Airport | planesAtAirport@Array[@string] | isFull(@string)                  | @string |

1. Test that if length of planesAtAirport >= capacity, plane cannot be added to the planesAtAirport array.
2. If this is the case, return a string notifying that airport is full.
---
```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```
| Object  | Properties                      | Message                    | Output  |
| ------- | ------------------------------- | -------------------------- | ------- |
| Airport | planesAtAirport @Array[@string] | takeOffPlane(plane@string) | @string |

1. Test that plane is removed from the planesAtAirport array when passed through the takeOffPlane function.
---
```
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```
| Object  | Properties                      | Message                         | Output   |
| ------- | ------------------------------- | ------------------------------- | -------- |
| Airport | planesAtAirport @Array[@string] | takeOffPlane(@plane)            | @void    |
|         |                                 | landPlane(@plane)               | @void    |
|         |                                 | isPlaneAtAirport(plane @string) | @boolean |

1. Test that if plane is not in the planesAtAirport array, the plane will not be able to take off and subsequently the length of planesAtAirport array will not change.
2. Test that if plane is in the planesAtAirport array, plane will not be added and length of planesAtAirport array will be unchanged.
---
#### Extended Acceptance Criteria & Modelling
```
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy
```
| Object  | Properties                      | Message                   | Output  |
| ------- | ------------------------------- | ------------------------- | ------- |
| Weather | weatherReport[@string]          | weatherGenerator(@string) | @string |
| Airport | planesAtAirport @Array[@string] | takeOffPlane(@plane)      | @void   |

1. Test that weatherReport generates either "stormy" or "sunny" string.
2. Test that when weatherReport is stormy, plane cannot be added to the planesAtAirport array.

