Airport Challenge
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


Task
-----

We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off.  Here are the user stories that we worked out in collaboration with the client:


#### Acceptance Criteria
---
## User Story 1
```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```
| Objects | Properties              | Messages     | Output |
| :------ | :---------------------- | :----------- | :----- |
| airport | planeList@Array(@plane) | @land(plane) | @void  |
| plane   | -                       | -            | -      |

1. test the airport has added a plane to planeList via land function.
---

## User Story 2
```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```
| Objects | Properties              | Messages        | Output   |
| :------ | :---------------------- | :-------------- | :------- |
| airport | airportCapacity@Integer | @capacity(size) | @Integer |
| size    | @integer                | -               | -        |

1. test the airport can take a capacity. 
2. test the airport capacity can be changed.  
---

## User Story 3
```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```
| Objects | Properties                                           | Messages     | Output |
| :------ | :--------------------------------------------------- | :----------- | :----- |
| airport | planeList@Array(@plane) <br> airportCapacity@Integer | @land(plane) | @Void  |
| plane   | @-                                                   | -            | -      |

1. test if the capacity is full.
2. test that a plane doesn't land when capacity is full.
---

## User Story 4
```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```
| Objects | Properties              | Messages        | Output |
| :------ | :---------------------- | :-------------- | :----- |
| airport | planeList@Array(@plane) | @takeoff(plane) | @Void  |
| plane   | id@string               | -               | -      |

1. test that a plane has taken off from the airport.
2. test that a plane that has taken off is no longer at the airport.
---

## User Story 5
```
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```
| Objects | Properties                                                                    | Messages                          | Output |
| :------ | :---------------------------------------------------------------------------- | :-------------------------------- | :----- |
| airport | planeList@Array(@plane) <br> landedMessage@String <br> takenOffMessage@String | @takeoff(plane) <br> @land(plane) | @Void  |
| plane   | id@string                                                                     | -                                 | -      |

1. test that the airport contains the plane that is taking off.
2. test that the airport only lets planes that are at the airport takeoff.
3. test that the airport doesn't contain the plane that is landing.
---

#### Extended Acceptance Criteria
---
## User Story 6
```
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy
```
| Objects | Properties     | Messages   | Output  |
| :------ | :------------- | :--------- | :------ |
| airport | weather@String | @takeoff() | @string |
| weather | @string        | -          | @void   |

1. test that weather can be stormy.
2. test that weather can not be stormy.
3. test that takeoff is prevented when the weather is stormy.
---

## User Story 7
```
As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy
```
| Objects | Properties     | Messages | Output  |
| :------ | :------------- | :------- | :------ |
| airport | weather@String | @land()  | @string |
| weather | @string        | -        | @void   |

1. test that land is prevented when the weather is stormy.
---

## User Story 8
```
As an air traffic controller
To count planes easily
Planes that have landed must be at an airport
```