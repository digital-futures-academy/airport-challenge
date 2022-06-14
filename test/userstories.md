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