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
      | Objects | Properties                      | Messages                   | Output   |
      | airport | planesInAirport @ARRAY[@String] | landPlane(plane)           | @Boolean |
      | airport | planesInAirport @ARRAY[@String] | checkDuplicate(plane)      | @Boolean |
      | plane   | uniqueID @String                |                            | @void    |

1. Validate that the method landPlane worked by checking if length of the array increased by one.
2. Verify that the method landPlane worked by checking if the plane object with the correct uniqueID is included in the array planesInAirport.


Test case 2:
```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```
      | Objects | Properties                                              | Messages | Output   |
      | airport | planesInAirport @ARRAY[@String], planeCapacity @Integer |          |          |
      | plane   | uniqueID @String                                        |          | @void    |

1. Test that there is a default capacity (planeCapacity) and also that the capacity can be changed.
2. Return true if the specific capacity (planeCapacity) given is correctly assigned to the array (planesInAirport).


Test case 3:
```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```
      | Objects | Properties                                              | Messages          | Output   |
      | airport | planesInAirport @ARRAY[@String], planeCapacity @Integer | landPlane(plane)  | @Boolean |
      | airport | planesInAirport @ARRAY[@String], planeCapacity @Integer | isFull(plane)     | @Boolean |
      | plane   | uniqueID @String                                        |                   | @void    |

1. Test that whether the airport is full/reached its capacity (planesInAirport.length >= planeCapacity).
2. Return true if the airport is full (planesInAirport.length >= planeCapacity) and a plane (object) is trying to be added.


Test case 4:
```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```
      | Objects | Properties                                              | Messages            | Output   |
      | airport | planesInAirport @ARRAY[@String], planeCapacity @Integer | removePlane(plane)  | @Boolean |
      | plane   | uniqueID @String                                        |                     | @void    |

1. Test whether the plane leaves the airport (plane object not in planesInAirport).
2. Return true if the plane is no longer in the airport.


Test case 5:
```
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```
      | Objects | Properties                                              | Messages               | Output   |
      | airport | planesInAirport @ARRAY[@String], planeCapacity @Integer | landPlane(plane)       | @Boolean |
      | airport | planesInAirport @ARRAY[@String], planeCapacity @Integer | removePlane(plane)     | @Boolean |
      | airport | planesInAirport @ARRAY[@String], planeCapacity @Integer | checkDuplicate(plane)  | @Boolean |
      | plane   | uniqueID @String                                        |                        |          | 

1. Test whether the plane is already in the airport (plane object exists in the planesInAirport).
2. Return true if the plane does exist in the airport.


Extended Criteria

Test case 6:
```
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy
```
      | Objects | Properties                                              | Messages               | Output   |
      | airport | planesInAirport @ARRAY[@String], planeCapacity @Integer | removePlane(plane)     | @Boolean |
      | plane   | uniqueID @String                                        |                        |          | 

1. Test whether the plane is removed if the weather is stormy.
2. Test whether the plane is not removed if the weather is anything but stormy.