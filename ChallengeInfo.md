#### Acceptance Criteria
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


```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```
| Objects | Properties              | Messages        | Output |
| :------ | :---------------------- | :-------------- | :----- |
| airport | planeList@Array(@plane) | @takeoff(plane) | @Void  |
| plane   | id@string               | -               | -      |

1. test that a plane that has taken off is no longer at the airport.


```
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```