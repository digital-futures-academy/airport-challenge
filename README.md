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

Steps to run tests
-------

1. Fork this repo, and clone to your local machine
2. `npm install` to install project dependencies
3. Run the tests using `node specRunner.js`

Task
-----

We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off.  Here are the user stories that we worked out in collaboration with the client:

#### User Story 1
```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

```
#### User story 3 ( extended )
```
As an air traffic controller
To count planes easily
Planes that have landed must be at an airport
```
> User story 3 of the extended criteria was implemented already as part of test 2.
> This can be seen in the airport class where the landPlane uses the ID from the item in the array and is compared in the test against the expected string which would be the plane's ID

| Objects   | Properties                     | Messages              | Output  |
| :-------- | :----------------------------- | :-------------------- | :------ |
| `airport` | `airportPlanes`@ARRAY[@string] | `landPlane(`@plane`)` | @string |
| `plane`   | `flightNumber`@string          | `getFlightNum()`      | @string |

1. Test that the plane is added  to `airportPlanes` by checking that the length of `airportPlanes` increases after calling `landingPlanes(plane)`
2. Test that `landPlane` returns a string that confirms that the plane has landed and is added to `airportPlane`
#### User Story 2
```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```
| Objects   | Properties        | Messages                            | Output |
| :-------- | :---------------- | :---------------------------------- | :----- |
| `airport` | `capacity`@number | `constructor(newCapacity`@number`)` | @void  |

1. Test that the `airport` has a default `capacity` when it is constructed
2. Test that `capacity` increases to the correct amount when the newCapacity is changed

#### User Story 3
```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```
| Objects   | Properties                     | Messages                              | Output   |
| :-------- | :----------------------------- | :------------------------------------ | :------- |
| `airport` | `capacity`@number              | `landPlane(isAirportFull(),`@plane`)` | @string  |
|           | `airportPlanes`@ARRAY[@string] | `isAirportFull()`                     | @boolean |
| `plane`   | `flightNumber`@string          | `getFlightNum()`                      | @string  |

1. Test if `isAirportFull()` returns a truthy value when `airportPlanes.length` matches `capacity`
2. Test if `landPlane()` rejects a landing when `isAirportFull()` returns `true`

#### User Story 4
```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```
| Objects   | Properties                     | Messages                | Output  |
| :-------- | :----------------------------- | :---------------------- | :------ |
| `airport` | `airportPlanes`@ARRAY[@string] | `departPlane(`@plane`)` | @string |
| `plane`   | `flightNumber`@string          | `getFlightNum()`        | @string |

1. Test that the `plane` is removed from `airportPlanes` by checking that the length of `airportPlanes` decreases after calling `departPlane(plane)`
2. Test that `departPlane(plane)` returns a string to confirm that the `plane` has departed and no longer exists in `airportPlanes`

#### User Story 5
```
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```
| Objects   | Properties                     | Messages                            | Output   |
| :-------- | :----------------------------- | :---------------------------------- | :------- |
| `airport` | `airportPlanes`@ARRAY[@string] | `landPlane(isInAirport,`@plane`)`   | @string  |
|           |                                | `departPlane(isInAirport,`@plane`)` | @string  |
|           |                                | `isInAirport(`@plane`)`             | @boolean |
| `plane`   | `flightNumber`@string          | `getFlightNum()`                    | @string  |

1. Test that `isInAirport()` returns true when a `plane` is passed through that already exists in the `airportPlanes` array
2. Test that when you attempt to "land" a plane and it already exists in the airport (`airportPlanes`) it returns a string to state that it had already landed
3. Test that when you attempt to "depart" a plane and it has already departed from the airport (`airportPlanes`) it returns a string to state that it had already departed


### Extended Acceptance Criteria

User story 1 (extended criteria)
```
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy
```
| Objects   | Properties                     | Messages                         | Output   |
| :-------- | :----------------------------- | :------------------------------- | :------- |
| `airport` | `airportPlanes`@ARRAY[@string] | `departPlane(`@plane`, weather)` | @string  |
| `plane`   | `flightNumber`@string          | `getFlightNum()`                 | @string  |
| `Weather` | `stormy`@boolean               | `constructor()`                  | @boolean |
|           |                                | `getWeather()`                   | @boolean |

1. Test that when a weather object is created it randomly generates for stormy to either be true or false
2. Test that when the weather is stormy the `departPlane()` method rejects the plane from departing


User story 2 (extended criteria)
```
As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy
```
| Objects   | Properties                     | Messages                       | Output   |
| :-------- | :----------------------------- | :----------------------------- | :------- |
| `airport` | `airportPlanes`@ARRAY[@string] | `landPlane(`@plane`, weather)` | @string  |
| `plane`   | `flightNumber`@string          | `getFlightNum()`               | @string  |
| `Weather` | `stormy`@boolean               | `constructor()`                | @boolean |
|           |                                | `getWeather()`                 | @boolean |

1. Test that when the weather is stormy the `landPlane()` method rejects the plane from landing 




## Project Review

I have taken away many things from this project. Given that this was my first JavaScript project, I learnt how to make use of classes, test files and also building my own testing framework. Whilst I am aware that it would be much better to make use of testing frameworks that have already been established such as jasmine and jest etc...

Making use of my prior knowledge I may have looked at the project as a complete success but I now realise that my understanding of OOP was not as good as I initially thought. Although I had an understanding of the concepts, I had no actual practice implementing them. Now understanding ways to implement Encapsulation through the use of decoupling and private properties I see that my way of developing this project was definitely not the best way I could have gone about it.

Had I started this project again from the beginning, there are a number of things that I would have done better. It felt as though I may have coded more than necessary for some of the tests which lead to me having already implemented things that pass other tests without having gotten to them. A better approach for me would be to create one passing test at a time or be diligent and make sure I am only implementing code that would barely pass the test set. I would have made use of a testing framework like jasmine that would allow me to make use of more matchers, that could be used in a more appropriate manner and thus allow me to test more facets of the program. I would do more tests - given that the classes have private properties, I should have also tested that t he getters and setters for both classes were working as they should. A way I could have done this would be through the use of the (spyON) function in the jasmine testing framework and checking that the methods had actually been called. I could have further decoupled the classes. There are a few questions that I could ask about my code regarding this such as - does it make sense for the airport class to be responsible for the landing/departing method or would it be more appropriate for that to be a method belonging to the plane class that then reports its state to the airport class after. I should have also further decoupled the tests - the use of mock objects to rectify tightly coupled code rather than creating instances of another class to the one I am testing for.

If I were to continue developing the project there are some additional features that I think would be appropriate to implement. These include:
- More improved validation/ edge case acceptability - should I be able to create an instance of the plane object that has the same ID (flightNumber) twice?
- Implementing a feature for the plane to be able to relay the estimated length of the rest of the journey (if they are at the beginning it should return the full flight time and if in the middle an estimate of half of the time)
- Going further with that flight time feature - changes in weather could change the estimated time - storms increasing it and sunny weather decreasing it


I am happy with my current understanding of user stories and creating domain models from them. However, I often found myself not sticking to the names I had already defined in my models and thus had to go back and refactor the names of my variables so they would match the domain models. I think I still need much more practice on decoupling so that I can more appropriately separate functionality into different classes.