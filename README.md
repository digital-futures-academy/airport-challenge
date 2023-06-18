# Airport Challenge

``````
         ______
        __\____\___
=  = ==(____DFA____)
           \_____\__________________,-~~~~~~~`-.._
          /     o o o o o o o o o o o o o o o o  |\_
          `~-.__       __..----..__                  )
                `---~~\___________/------------`````
                =  ===(_________)

``````

## Instructions

- Feel free to use google, your notes, books, etc. but work on your own.
- Keep it SIMPLE - it's not nearly as complicated as it first may look.
- You must [submit your challenge](https://airtable.com/shrUGm2T8TYCFAmjN) by the deadline, wherever you get to.
- Use your own test framework and evidence your test-driven development by committing on passing tests.
- Please write your own README detailing how to install your project, how to run the tests, how you approached the problem and provide screenshots of interacting with your program.
- If you refer to the solution of another coach or student, please put a link to that in your README.
- Please create separate files for every class, module, and spec.

## Steps

1. Fork this repo, and clone to your local machine
2. `npm install` to install project dependencies
3. Convert stories into a representative domain model and test-drive your work.
4. Run your tests using `npm test` or `node specRunner.js`
5. OPTIONAL: [Lint](https://eslint.org/docs/user-guide/getting-started) your source code using `npx eslint src`.

## Task

We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off. Here are the user stories that we worked out in collaboration with the client:

#### Acceptance Criteria

##### User Story: 1

>As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

##### Domain Model

```
| Objects  | Properties                    | Messages          | Outputs |
| -------  | ----------------------------- | ----------------- | ------- |
| Airport  | airportPlanes @Array[@Planes] | landPlane(@Plane) | @Void   |
| Plane    | @String                       |                   |         |
```

##### Tests

- [x] 1. After adding a plane to the airport planes list check that the array has increased in length by 1.
- [x] 2. Test that the specific plane passed to addPlane is actually added to the airportPlanes array.
- [x] 3. Prevent adding a plane to the airportPlanes array if it is already there.
- [x] 4. Prevent adding numbers to the list. 
- [x] 5. Prevent adding null to the list.

##### User Story: 2

>As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

##### Domain Model

```
| Objects  | Properties               | Messages                   | Outputs |
| -------  | ------------------------ | -------------------------- | ------- |
| Airport  | airportCapacity @Integer | overrideCapacity(@Integer) | @Void   |
```

##### Tests

- [x] 1. After changing the capacity check that the capacity has changed to the correct number.
- [x] 2. Check that the OverrideCapacity function returns an error if the input is null.

##### User Story: 3

>As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

##### Domain Model

```
| Objects  | Properties                    | Messages                 | Outputs  |
| -------  | ----------------------------- | ------------------------ | -------- |
| Airport  | airportCapacity @Integer      | isAirportFull()          | @boolean |
```
- [x] 1. Check that planes cannot land when the airportCapactiy is full.

##### User Story: 4

>As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

##### Domain Model

```
| Objects  | Properties                    | Messages                     | Outputs  |
| -------  | ----------------------------- | ---------------------------- | -------- |
| Airport  | airportPlanes @Array[@Planes] | takeoffPlane(@Plane)         | @Void   |
|          |                               | checkPlanesAtAirport(@Plane) | @Boolean |
```

##### Tests

- [x] 1. After removing a plane from the airport planes list check that the array has decreased in length by 1.
- [x] 2. Test that plane passed to removePlane is actually removed from the airportPlanes array.
- [x] 3. Prevent removing planes that are not in the airportPlanes array.
- [x] 4. Prevent removing null from the list.

##### User Story: 5

>As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

##### Domain Model

```
Prevent Take-off
| Objects  | Properties                    | Messages             | Outputs  |
| -------  | ----------------------------- | -----------------    | -------- |
| Airport  | AirportPlanes @Array[@Planes] | checkPlaneId(@Plane) | @Boolean |
| Plane    | id @String                    | getId()              | @String  |

Prevent Landing
| Objects  | Properties                    | Messages             | Outputs  |
| -------  | ----------------------------- | -----------------    | -------- |
| Airport  | AirportPlanes @Array[@Planes] | checkPlaneId(@Plane) | @Boolean |
| Plane    | id @String                    | getId()              | @String  |
```

##### Tests

- [x] Ensure that planes can only be removed if they are in the airportPlanes array. 
 (Completed in user story 4 tests.)
- [x] Ensure that planes cannot be added if they are already in the airportPlanes array.
 (Completed in user story 1 tests.)

such as inconsistent states of the system ensuring that planes can only take off from airports they are in;

#### Extended Acceptance Criteria

##### User Story: 5 (was 6)

>As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

##### Domain Model

```
| Objects  | Properties                    | Messages                 | Outputs  |
| -------  | ----------------------------- | ------------------------ | -------- |
| Airport  | AirportPlanes @Array[@Planes] | weatherChecker(@Weather) | @Boolean |
| Weather  | CurrentWeather@Array[@String] | setWeather(@String)      | @Void    |
```

##### Tests
Weather Tests
- [x] 1. Check that the weather object can be set using setWeather().
- [x] 2. Check that the generateWeather() function works, occasionally producing a stormy output.
Airport Tests
- [x] 1. Check that planes are unable to takeoff when the weather is 'stormy'.


You will need to use a random number generator to set the weather (it is normally sunny but on rare occasions it may be stormy). In your tests, you'll need to stub random behaviour to ensure consistent test behaviour.

such as inconsistent states of the system ensuring that planes can only take off from airports they are in; planes that are already flying cannot take off and/or be in an airport; planes that are landed cannot land again and must be in an airport, etc.

##### User Story: 6 (was 7)

>As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

##### Domain Model

```
| Objects  | Properties                     | Messages                 | Outputs  |
| -------  | ------------------------------ | ------------------------ | -------- |
| Airport  | AirportPlanes @Array[@Planes]  | checkWeather(@Weather)   | @Boolean |
| Weather  | currentWeather [@String]       | generateWeather(@String) | @String  |
```

##### Tests

- [x] 1. Check that planes are unable to land when the weather is 'stormy'.

##### User Story: 8

>As an air traffic controller
To count planes easily
Planes that have landed must be at an airport

##### Domain Model

```
| Objects  | Properties                    | Messages              | Outputs  |
| -------  | ----------------------------- | --------------------- | -------- |
| Airport  | AirportPlanes @Array[@Planes] | checkPlaneId(@Plane)  | @Boolean |
```

##### Tests

I believe this has been completed through my other tests and through the use of classes. Ordinarily I would discuss this with the client to clarify.  

You will need to use a random number generator to set the weather (it is normally sunny but on rare occasions it may be stormy). In your tests, you'll need to stub random behaviour to ensure consistent test behaviour.

such as inconsistent states of the system ensuring that planes can only take off from airports they are in; planes that are already flying cannot take off and/or be in an airport; planes that are landed cannot land again and must be in an airport, etc.

Your task is to test drive the creation of a set of classes/objects to satisfy all the above user stories. You will need to use a random number generator to set the weather (it is normally sunny but on rare occasions it may be stormy). In your tests, you'll need to stub random behaviour to ensure consistent test behaviour.

Your code should defend against [edge cases](http://programmers.stackexchange.com/questions/125587/what-are-the-difference-between-an-edge-case-a-corner-case-a-base-case-and-a-b) such as inconsistent states of the system ensuring that planes can only take off from airports they are in; planes that are already flying cannot take off and/or be in an airport; planes that are landed cannot land again and must be in an airport, etc.
