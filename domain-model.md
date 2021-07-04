# Domain Models

## Acceptance Criteria 

### Story 1 
``` 
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
``` 

Nouns|Verbs
---|---
plane|land
airport|

### Story 2 
```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```

Nouns|Verbs 
---|--- 
airport|overridden 

### Story 3
```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```

Nouns|Verbs 
---|---
airport|prevent 

### Story 4 

```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```

Nouns|Verbs
---|---
planes|confirm
airport|take-off

### Story 5 

```
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```
Nouns|Verbs
---|---
planes|land
airport|take-off

### Domain Model(Acceptance)

Object|Properties|Message|Context|Output
---|---|---|---|---
airport|planes @Array[@String]|land(plane)|Airport Not Full and Plane not in airport|@Array[@String]|
||capacity @Number||Airport Full|@String "Airport Full"
||||Plane in airport|@String "Plane present in airport"
|||takeOff(plane)|Plane in airport|@Array[@String]
||||Plane not in airport|@String "Plane not Present in airport"





