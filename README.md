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
The attached source code has been created using Test Driven Development, to meet the requirements of the task at hand.
To test the code, within the test folder use: `node specrunner.js`.

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
| plane   | id@String                                            | -            | -      |

1. test if the capacity is full.
2. test that a plane doesn't land when capacity is full.
---

## User Story 4
```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```
| Objects | Properties              | Messages        | Output  |
| :------ | :---------------------- | :-------------- | :------ |
| airport | planeList@Array(@plane) | @takeoff(plane) | @String |
| plane   | id@string               | -               | -       |

1. test that a plane has taken off from the airport.
2. test that a plane that has taken off is no longer at the airport.
---

## User Story 5
```
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```
| Objects | Properties                                                                    | Messages                          | Output   |
| :------ | :---------------------------------------------------------------------------- | :-------------------------------- | :------- |
| airport | planeList@Array(@plane) <br> landedMessage@String <br> takenOffMessage@String | @takeoff(plane) <br> @land(plane) | @Void    |
| plane   | id@string                                                                     | @isLanded()                       | @Boolean |

1. test that the airport contains the plane that is taking off.
2. test that the airport only lets planes that are at the airport takeoff.
3. test that the airport doesn't contain the plane that is landing.
4. test that plane tells if it is landed.
---

#### Extended Acceptance Criteria
---
## User Story 6
```
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy
```
| Objects | Properties     | Messages    | Output   |
| :------ | :------------- | :---------- | :------- |
| airport | weather@String | @takeoff()  | @String  |
| weather | @string        | @isStormy() | @Boolean |

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
| Objects | Properties                  | Messages       | Output  |
| :------ | :-------------------------- | :------------- | :------ |
| airport | airportName@String          |                | @Void   |
| plane   | airport@string(airportName) | @airportName() | @String |
1. test that a landed plane is at a specified airport.

--- 
### Reflection
The src code was initially created with one Airport class to meet the requirements of the accepted criteria. Upon tackling the extended accepted criteria, I found it better to use different classes to complete the task. This led to a lot of refactoring of the code and changing syntax throughout.

If I were to complete this task again, I would initially create the three seperate classes before writing any code. 
With the test code I would make it loosely-coupled and use more mock classes.
Moreover, I would like to make the functions within the classes with less lines of code.

I am happy with my understanding of user stories and domain modelling, however I think I would benefit from more experience working with domain modelling as I found myself going back and changing the values/ names within after creating my code. 