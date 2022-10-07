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



Your task is to test drive the creation of a set of classes/objects to satisfy all the above user stories. You will need to use a random number generator to set the weather (it is normally sunny but on rare occasions it may be stormy). In your tests, you'll need to stub random behaviour to ensure consistent test behaviour.

Your code should defend against [edge cases](http://programmers.stackexchange.com/questions/125587/what-are-the-difference-between-an-edge-case-a-corner-case-a-base-case-and-a-b) such as inconsistent states of the system ensuring that planes can only take off from airports they are in; planes that are already flying cannot take off and/or be in an airport; planes that are landed cannot land again and must be in an airport, etc.




## My reflections:

Had I started this again from the beginning there are a number of things I would done better including:
-  Making use of the jasmine testing framework which has many, more appropriate, matchers
-  Doing more tests - given the classes have private properties, I should have also tested that the getters & setters were both called (using spyON), and that they returned the correct values
-  Further decoupling the classes - would the airport class be responsible for the landing/depart function or is it more appropriate for it to belong to the plane class
-  Further decoupling the tests - making use of mock objects to rectify tightly coupled code rather than creating an instance of another class for a different class's tests
-  Improving validation/edge case acceptability - should I be able to create a instance of the plane object with the same ID twice?

I am happy with my current understanding of user stories and creating domain models from them. However, I often found myself not sticking to the names I had already defined in my models and thus had to go back and refactor the names of my variables so they would match the domain models.