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

Instructions
---------

* Feel free to use google, your notes, books, etc. but work on your own.
* Keep it SIMPLE - it's not nearly as complicated as it first may look.
* You must [submit your challenge](https://airtable.com/shrUGm2T8TYCFAmjN) by the deadline, wherever you get to.
* Use your own test framework and evidence your test-driven development by committing on passing tests.
* Please write your own README detailing how to install your project, how to run the tests, how you approached the problem and provide screenshots of interacting with your program.
* If you refer to the solution of another coach or student, please put a link to that in your README.
* Please create separate files for every class, module, and spec.

Steps
-------

1. Fork this repo, and clone to your local machine
2. `npm install` to install project dependencies
3. Convert stories into a representative domain model and test-drive your work.
4. Run your tests using `npm test` or `node specRunner.js`
5. [Lint](https://eslint.org/docs/user-guide/getting-started) your source code using `npx eslint src` - Optional but recommended!

Task
-----

We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off.  Here are the user stories that we worked out in collaboration with the client:

#### Acceptance Criteria
```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```

#### Extended Acceptance Criteria
```
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

As an air traffic controller
To count planes easily
Planes that have landed must be at an airport
```

Your task is to test drive the creation of a set of classes/objects to satisfy all the above user stories. You will need to use a random number generator to set the weather (it is normally sunny but on rare occasions it may be stormy). In your tests, you'll need to stub random behaviour to ensure consistent test behaviour.

Your code should defend against [edge cases](http://programmers.stackexchange.com/questions/125587/what-are-the-difference-between-an-edge-case-a-corner-case-a-base-case-and-a-b) such as inconsistent states of the system ensuring that planes can only take off from airports they are in; planes that are already flying cannot take off and/or be in an airport; planes that are landed cannot land again and must be in an airport, etc.


# Challenge implementation notes

## Requirements, Domain Models and TDD approach
My original approach to requirement analysis, Domain Modelling and testing design seemed incorrect and not focussed on the requirements adding unneeded complexity and reducing clarity.  As a result the Domain Model and TDD tests to meet the core requirements were reconsidered and documented below prior to attempting to implement the testing-coding cycle.

## Core Acceptance Criteria
## Requirement 1
```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```

### Noun and verbs from the user story requirements
|Nouns                  | verbs  |
|-----------------------|--------|
|Air traffic controller*|Get*    |
|Passengers*            |        |
|Destination*           |        | 
|Airport                |Instruct|
|Plane                  |Land    |

For the purposes of domain modelling will ignore those marked with * as these appear to describe context, objects and actions outside the scope of the specific requirement.

### Domain model (Objects, Properties, Messages, Outputs)
|Objects    |Properties       |Messages               |Outputs    |
|-----------|-----------------|-----------------------|-----------|
|Airport    |inAirport[@Plane]|intructToLand(@Plane)  |@void      |
|           |                 |addToInAirport(@Plane) |@void      |
|           |                 |getInAirport()         |inAirport[@Planes]|
|Plane      |state @string    |land()                 |@string    |
|           |planeId @string  |getState()             |@state @string|
|           |                 |getPlaneId()           |@planeId @string|

- Outputs for `instructToLand()` is `@void` as the requirement does not specify any form of output messaging (e.g. success or failure messages). `instructToLand()` will call `addToInAirport()` after landing the plane.
- Although a property to hold the planes in the airport is not explicitly required by the requirement I am considering it implicit to what an Airport needs to do. It is also required by later requirements.  
- Although the requirement does not specify a `state` property I am inferring it is needed to capture that `land()` has done something to the plane e.g. the `Plane` has landed.
- Although the requirement does not specify a `getState()` orto return the `state` string I am inferring it is needed as I intend the `state` to be a private variable to a `Plane` class instances and therefore inaccessible without a getter.

### TDD the user story
#### Plane:
1. The `state` of newly created instance of a Plane is a ***blank string***.
2. On calling `land()` the plane's state changes to ***'landed'***.
3. The `planeId` of a newly created plane without an argument is ***'noID'***.
4. The `planeId` of a newly created plane with a planeId is the ***planeId***.

#### Airport:
1. The length of `inAiport[]` for a newly created Airport is ***0***.
2. `getInAirport()` returns an ***array***.
3. After calling `addToInAirport(mockPlane)`, inAirport.length has ***increased by 1***.
4. After calling `addToInAirport(mockPlane)`, the array inAirport[] contains an object with ***planeId***.
5. On calling `instructToLand(mockPLane)` with a mock plane changes the mock plane's state changes to ***'landed'***.
6. On calling `instructToLand(mockPlane)`, inAirport.length has ***increased by 1***. 

## Requirement 2
```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```

### Noun and verbs from the user story requirements
|Nouns                   |Verbs             |
|------------------------|------------------|
|System designer*        |                  |
|Software*               |                  |
|Airports*               |                  |
|Airport                 |Capacity override |
|default airport capacity|                  |


For the purposes of domain modelling will ignore those marked with * as these appear to describe context, objects and actions outside the scope of the specific requirement.

### Domain model (Objects, Properties, Messages, Outputs)
|Objects  |Properties           |Messages               |Outputs  |
|---------|---------------------|-----------------------|---------|
|Airport  |capacity @number     |setCapacity(@number)   |@void    |
|         |                     |getCapacity()          |@capacity|

- `Capacity` will include a default value that can be overridden when constructing the `Airport`. The requirement states the capacity can be overridden 'as appropriate' so also assuming a `setCapacity()` message is needed to update post-creation.
- `setCapacity()` returns `@void` as no return requirements such as confirmation message are included in the requirment.
- It's assumed that using OOP encapsulation that `capacity` will be a private property and therefore `getCapacity()` is included as a message to allow the capacity value to be checked.

### TDD the user story
#### Airport
1. On calling the `Airport` constructor without an argument, getCapacity() returns the ***default*** capacity. 
2. On calling the `Airport` constructor with a capacity, getCapacity() returns the ***capacity***.
3. After calling `setCapacity(number)`, getCapacity() returns ***number***.

## Requirement 3
```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```

### Noun and verbs from the user story requirements
|Nouns                   |Verbs   |
|------------------------|--------|
|Air traffic controller* | Ensure*|
|Safety*                 |        |
|Airport                 |Prevent |
|Full                    |Landing |

For the purposes of domain modelling will ignore those marked with * as these appear to describe context, objects and actions outside the scope of the specific requirement.

### Domain model (Objects, Properties, Messages, Outputs)
|Objects  |Properties              |Messages               |Outputs  |
|---------|------------------------|-----------------------|---------|
|Airport  |Capacity @number        |instructToLand(@Plane) |@void    |
|         |inAirport[@planes]      |isFull()               |@boolean |


### TDD the user story
#### Airport
1. `isFull()` returns ***false*** if inAirport[].length is less than capacity.
2. `isFull()` returns ***true*** if inAirport[].length is equal to capacity.
3. Calling `instructToLand(mock Plane)` when the airport is under capacity results in the mock Plane state changing to ***'landed'***.
4. Calling `instructToLand(mock Plane)` when the airport is full results in ***no change*** to the mock Plane's state.
5. Calling `instructToLand(mock Plane)` when the airport is full results in ***no change*** to inAirport[].length.


## Requirement 4
```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```

### Noun and verbs from the user story requirements
|Nouns                  | verbs    |
|-----------------------|----------|
|Air traffic controller*| get*     |
|Passengers*            |          |
|Airport                | Instruct |
|Plane                  | Take off |
|                       | Confirm  |

- For the purposes of domain modelling will ignore those marked with * as these appear to describe context, objects and actions outside the scope of the specific requirement.

### Domain model (Objects, Properties, Messages, Outputs)
|Objects  |Properties         |Messages                  |Outputs  |
|---------|-------------------|--------------------------|---------|
|Airport  |inAirport[@Planes] |instructToTakeOff(@Plane) |@string  |
|         |                   |removeFromInAirport(@Plane)|@boolean|
|Plane    |state @string      |takeOff()                 |@void  |
|         |planeId @ string   |getPlaneId()              |@planeId |

- The requirement asks for confirmation that the plane has left the `airport`. The `instructToTakeOff()` will return a string to act as the confirmation. `remonveFromInAirport()` will return a boolean to confirm that it has removed the plane from `inAirport[]`.
- Changing `Plane.state` is not explicitly referenced in the requirement but given the assumptions made regarding updating `Plane.state` for requirement #1 I am considering it implicit in this requirement. 

### TDD the user story
#### Plane
1. On calling `takeOff()` the planes state changes to ***'flying'***.
#### Airport
1. `removeFromInAirport()` changes inAirport[].length by ***minus 1*** when the mockPlane is in inAirport[]. 
2. `removeFromInAirport()` returns ***true*** if it removes a mockPlane from inAirport[].
3. `removeFromInAirport()` ***does not change*** the inAirport[].length if the mockplane is not in the airport.
4. `removeFromInAirport()` returns ***false*** if the mockPlane is not inAirport[].
5. On calling `instructToTakeOff()` with a mock Plane object that is in inAirport[] changes the mock objects state to ***'flying'***.
6. After calling `instructToTakeOff()` for a plane in the airport ***reduces inAirport[].length by 1***. 
7. For a plane in the airport, `instructToTakeOff()` returns the string ***'plane left airport'*** after completing.


## Requirement 5
```
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```

### Noun and verbs from the user story requirements
|Nouns                  | verbs  |
|-----------------------|--------|
|Air traffic controller*| Avoid* |
|Confusion?*            |        |
|Airport                |Prevent |
|Planes                 |Asking  |
|Plane                  |Take-off|
|'not at airport'       |Land    |
|'already landed'       |        |

- 'not at airport' and 'already landed' are not really nouns or verbs but I have included as they seemed important aspects of the requirement.

- For the purposes of domain modelling will ignore those marked with * as these appear to describe context, objects and actions outside the scope of the specific requirement.


### Domain model (Objects, Properties, Messages, Outputs)
|Objects  |Properties         |Messages                  |Outputs  |
|---------|-------------------|--------------------------|---------|
|Airport  |inAirport[@Planes] |isInAirport(@plane)     |@boolean |
|         |                   |instructToTakeOff(@plane) |@string  |
|         |                   |instructToLand(@plane)    |@void    |
|Plane    |state @string      |takeOff()                 |@string  |
|         |planeId @string    |isLanded()                |@boolean |
|         |                   |land()                    |@void    |



### TDD the user story
#### Plane
1. Calling `isLanded()` immediately after land() returns ***true***.
2. Calling `isLanded()` after calling land() followed by takeOff()  returns ***false***.
#### Airport
1. `isInAirport(plane)` returns ***false*** if the plane is NOT in inAirport[].
2. `isInAirport(plane)` returns ***true*** if the plane is in inAirport[].
3. On calling `instructToTakeOff()` on a plane that is not in the airport results in ***no call to the plane's takeOff()*** function.
4. On calling `instructToLand()` on a plane that is already landed results in ***no call of the plane's land()*** function.
5. On calling `instructToLand()` on a plane that is already landed results in ***no change to inAirport[].length***.


