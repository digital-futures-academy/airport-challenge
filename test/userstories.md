### Requirement 1

As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

# User story 1 

| noun      | verb   |
|-----------|--------|
|passengers | get    |
|destination| -      |
|airport    | intruct|
|plane      | land   |

--- 

# Domain model 1

| Objects     | Properties               | Messages          | Output   |
| ----------- | ------------------------ | ----------------- | -------- |
| Passengers  | list @Array              | passengers()      | @Array   |
| Destination | destination @String      | destination()     | @String  |
| Airport     | landed @Boolean          | isLanded          | @Boolean |
| Plane       | list @Array[@Passengers] | plane()           | @Array   |

---

# 4. TDD each user story in order

Test 1 - Call isLanded on airport to test if landed property returns true.



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

Test 2 - Create an airport class that has a capacity 
Test 3 - Create a new airport class which has a new capacity. 


## Requirement 3

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

nouns: airport
verb: landing

objects: airport, plane
properties: capacity @Number
messages: capacity()
output: @Error

Test 4 - Return error when land plane is called due to capacity being full. 


