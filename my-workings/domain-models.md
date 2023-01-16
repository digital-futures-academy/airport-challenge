# Domain Models and User Stories

```
UPDATES
- addPlane was renamed to land
- removePlane was renamed to takeOff
```

## Acceptance Criteria User Stories

### **User Story 1**
As an air traffic controller   
So I can get passengers to a destination  
I want to instruct the airport to land a plane

**Story Breakdown**  
Nouns: airport, plane  
Verbs: land (add)

| Object  | Properties               | Messages         | Output   |
|---------|--------------------------|------------------|----------|
| Plane   | id @Integer              | getId()          | @Integer |
| Airport | planeList @Array[@Plane] | addPlane(@Plane) | Void     |

---

### **User Story 2**
As the system designer  
So that the software can be used for many different airports  
I would like a default airport capacity that can be overridden as appropriate  

**Story Breakdown**  
Nouns: airport, capacity  
Verbs: override (update)  

| Object  | Properties        | Messages                        | Output |
|---------|-------------------|---------------------------------|--------|
| Airport | capacity @Integer | updateAirportCapacity(@Integer) | Void   |

---

### **User Story 3**
As an air traffic controller  
To ensure safety  
I want to prevent landing when the airport is full  

**Story Breakdown**  
Nouns: airport  
Verbs: (check) - not mentioned in story, but that's what needs doing  

| Object  | Properties               | Messages        | Output   |
|---------|--------------------------|-----------------|----------|
| Airport | capacity @Integer        | isAirportFull() | @Boolean |
|         | planeList @Array[@Plane] |                 |          |

---

### **User Story 4**
As an air traffic controller  
So I can get passengers on the way to their destination  
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport  

**Story Breakdown**  
Nouns: plane, airport  
Verbs: take off (remove), confirm (check)  

| Object  | Properties               | Messages                 | Output   |
|---------|--------------------------|--------------------------|----------|
| Plane   | id @Integer              | getId()                  | @Integer |
| Airport | planeList @Array[@Plane] | removePlane(@Plane)      | Void     |
|         |                          | isPlaneAtAirport(@Plane) | @Boolean |

---

### **User Story 5 - Split**
As an air traffic controller  
To avoid confusion  
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed  

**5.1**  
As an air traffic controller  
To avoid confusion  
I want to prevent asking the airport to let planes take-off which are not at the airport  

**Story Breakdown**  
Nouns: airport, plane  
Verbs: prevent (check)  

**5.2**  
As an air traffic controller  
To avoid confusion  
I want to prevent asking the airport to let planes land which are already at the airport  

**Story Breakdown**  
Same nouns and verbs as before  

Stories were split for my own sake. They have the same domain model
| Object  | Properties               | Messages                 | Output   |
|---------|--------------------------|--------------------------|----------|
| Plane   | id @Integer              | getId()                  | @Integer |
| Airport | planeList @Array[@Plane] | isPlaneAtAirport(@Plane) | @Boolean |


### **Final Domain Model**
As there's a lot of overlap, I want the final thing in one place for an easy reference.

| Object  | Properties               | Messages                 | Output   |
|---------|--------------------------|--------------------------|----------|
| Plane   | id @Integer              | getId()                  | @Integer |
| Airport | planeList @Array[@Plane] | addPlane(@Plane)         | Void     |
|         | capacity                 | isAirportFull()          | @Boolean |
|         |                          | removePlane(@Plane)      | Void     |
|         |                          | isPlaneAtAirport(@Plane) | @Boolean |
