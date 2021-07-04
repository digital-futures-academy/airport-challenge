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

## Extended Criteria 

### Story 1 

```
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy
```

Nouns|Verbs
---|---
weather|prevent
stormy|takeoff

### Story 2

```
As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy
```

Nouns|Verbs
---|---
weather|prevent
stormy|landing

### Story 3 
```
As an air traffic controller
To count planes easily
Planes that have landed must be at an airport
```
Nouns|Verbs
---|---
planes|landed
airport|


## Domain Model

Object|Properties|Message|Context|Output
---|---|---|---|---
airport|planes @Array[@String]|land(plane)|Airport Not Full and Plane not in airport and not stormy|@Array[@String]|
||capacity @Number||Airport Full|@String "Airport Full"
||||Weather Stormy | @String "Landing denied, stormy"
||||Plane in airport|@String "Plane present in airport"
|||takeOff(plane)|Plane in airport and stormy|@Array[@String]
||||Plane not in airport|@String "Plane not Present in airport"
||||Weather Stormy|@String "Takeoff denied, stormy"





