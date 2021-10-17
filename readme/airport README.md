**For the old README, please follow [this link](../README.md)**

If you are testing this, please follow steps from line 6.
For user story and respective domain models, refer to line 13 and onward.

Steps
-----

1. Fork this repo, and clone to your local machine
2. `npm install` to install project dependencies
3. Run your tests using `npm test` or `node specRunner.js`

If the weather is clear everything should appear green in the terminal, if not then everything should be highlighted red. The chance of it being clear is 7/10, so might need to run it several times to get stormy conditions.

**If you would like to change terminal font colours to default white, please go to [the weather test framework](../test-framework-weather.js)**

Authors notes (Matt H.)
----

I approached the problem with the TDD in mind, creating the user stories from the acceptance criteria to begin with. I then went down the list, adding the user stories as I went to the src and spec files. For the weather acceptance, I chose to add this to the top of the process as it was required for user stories before it in the program.

I did encounter issues creating a different test framework for the weather, which is why it is separated. I might ask questions about this, as i came across a similar issue in bob's bagels pair work.

For the eslint linter, it still has two errors - airport.js and weather.js, line 2 and 5 respectively. Has an issue with the = parameter, once again will ask tomorrow. 

For all images of the process, please go to [Pictures](../Pictures)

Task
-----

We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off.  Here are the user stories that we worked out in collaboration with the client and respective domain models:

### Acceptance Criteria 1
```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```
### User Story

| Objects | Properties | Message         | Output |
| ------- | ---------- | --------------- | ------ |
| Airport | @Array     | addPlane(Plane) | @Array |
| Plane   | @String    |                 |        |

#### Acceptance Criteria 2
```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```

### User Story 2

| Objects | Properties  | Message                               | Output   |
| ------- | ----------- | ------------------------------------- | -------- |
| Airport | @Array      |                                       | @Array   |
|         | airportSize | setAirportSize(airportSize, @integer) | @integer |

### Acceptance Criteria 3
```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```

### User Story 3
| Objects | Properties  | Message  | Output   |
| ------- | ----------- | -------- | -------- |
| Airport | @Array      |          | @Array   |
|         | airportSize | isFull() | @boolean |
|         | planeList   |          | @Array   |
| Plane   | @String     |          |          |

### Acceptance Criteria 4
```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```

### User Story 4
| Objects | Properties | Message            | Output |
| ------- | ---------- | ------------------ | ------ |
| Airport | @Array     | removePlane(Plane) | @Array |
| Plane   | @String    |                    |        |

### Acceptance Criteria 5
```
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```

### User Story 5
| Objects | Properties | Message         | Output   |
| ------- | ---------- | --------------- | -------- |
| Airport | @Array     | addPlane(Plane) | @Array   |
|         |            | isLanded()      | @boolean |
|         |            | isFlying()      | @boolean |
| Plane   | @String    |                 |          |

#### Extended Acceptance Criteria 1
```
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy
```

#### Extended Acceptance Criteria 2
```
As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy
```

#### Extended User Story 1 + 2
| Objects | Properties | Message        | Output   |
| ------- | ---------- | -------------- | -------- |
| Weather | @Array     | isClear(storm) | @boolean |
|         |
#### Extended Acceptance Criteria 3
```
As an air traffic controller
To count planes easily
Planes that have landed must be at an airport
```

### Extended User Story 3
| Objects | Properties                     | Message   | Output   |
| ------- | ------------------------------ | --------- | -------- |
| Airport | @Array                         |           | @Array   |
|         | isAtAirport(landed, atAirport) | landed    | @boolean |
|         |                                | atAirport | @boolean |
| Plane   | @String                        |           |          |

Your task is to test drive the creation of a set of classes/objects to satisfy all the above user stories. You will need to use a random number generator to set the weather (it is normally sunny but on rare occasions it may be stormy). In your tests, you'll need to stub random behaviour to ensure consistent test behaviour.

Your code should defend against [edge cases](http://programmers.stackexchange.com/questions/125587/what-are-the-difference-between-an-edge-case-a-corner-case-a-base-case-and-a-b) such as inconsistent states of the system ensuring that planes can only take off from airports they are in; planes that are already flying cannot take off and/or be in an airport; planes that are landed cannot land again and must be in an airport, etc.
