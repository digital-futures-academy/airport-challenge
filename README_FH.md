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