### Requirement 1

As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

# User story 1 

| noun      | verb   |
|-----------|--------|
|airport    | land   |

--- 

# Domain model 1

| Objects     | Properties               | Messages            | Output   |
| ----------- | ------------------------ | -----------------   | -------- |
| Airport     | airportList @Array       | airportList.length  | @Boolean |

---

# 4. TDD each user story in order

Test 1 - Check that airportList array has a length greater than 0 after landing a plane


### Requirement 2 

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

Nouns: airports, capacity
Verb: override

objects: Airport
Property: capacity @Number
Messages: capacity(), newCapacity()
Output: Number

Test 2 - Create a new capacity value for an airport class. 



## Requirement 3

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

nouns: airport
verb: landing

objects: airport, plane
properties: capacity @Number, airportList@Array
messages: capacity(), landPlane()
output: @Error

Test 3 - Return error when land plane is called due to capacity being full. 


### Requirement 4

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

nouns: airport, plane
verbs: instruct, take off

objects: airport, plane
properties: airportList @Array
messages: planeTakeoff()
output: @Boolean (is array empty: true)

Test 4 - Call a method that removes the last landed plane from the airport and then confirm that it is no longer in the airportList array


### Requirement 5

As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

nouns: airport, plane
verbs: take-off, land

objects: airport, plane
properties: airportList@Array
messages: planeTakeoff(), landPlane();
output: Error 

Test 5 - Receive error message when attempting to take-off a plane that is not in airportList. 
Test 6 - Recieve error message when attempting to land a plane that is already in airportList. 

### Requirement 6 
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

nouns: weather
verb: take-off

objects: airport, weather
properties: airportList@Array, weather@String
messages: planeTakeoff()
output: Boolean

Test 7 - After setting a new variable named weather to `stormy`, planeTakeoff() should return an error. (first, weather must be set to `clear` so a plane can land in the airport before it can be held back due to stormy weather.)

### Requirement 7 
As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

nouns: weather
verb: landing

objects: airport, weather
properties: airportList@Array, weather@String
messages: landPlane()
output: Boolean

Test 8 - After setting a new variable named weather to `stormy`, landPlane() should return an error.


### Requirement 8 
As an air traffic controller
To count planes easily
Planes that have landed must be at an airport

nouns: plane, airport
verbs: count

object: planes, airport
properties: aiportList @Array, airportList.length @Number
messages: landPlane()
Output: Number

Test 9 - Return a number for number of planes in airport that have landed