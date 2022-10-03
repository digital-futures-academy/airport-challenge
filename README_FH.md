Airport Challenge - Fahad
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

User stories followed by the corresponding domain table
---------

Test case 1:
```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```
      | Objects | Properties                      | Messages                  | Output   |
      | airport | planesInAirport @ARRAY[@String] | landPlane(plane @Integer) | @Integer |
      | plane   | uniqueID                        | landPlane(plane @Integer) | @Integer |

1. Test that the particular object (plane ID) was added to the object's (airport) array (planesInAirport) by searching the array for an object (plane) with the same ID.
2. Return true if the particular object (plane ID) was found in the array (planesInAirport).

Test case 2:
```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```
      | Objects | Properties                                              | Messages                  | Output   |
      | airport | planesInAirport @ARRAY[@String], planeCapacity @Integer | landPlane(plane @Integer) | @Integer |
      | plane   | uniqueID                                                | landPlane(plane @Integer) | @Integer |

1. Test that there is a default capacity (planeCapacity) and also that the capacity can be changed.
2. Return true if the specific capacity (planeCapacity) given is correctly assigned to the array (planesInAirport).