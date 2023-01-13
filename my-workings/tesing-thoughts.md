# Testing Plans
Here's where I plan my tests.

### **User Story 1**
```
As an air traffic controller   
So I can get passengers to a destination  
I want to instruct the airport to land a plane
```

**Initial Thoughts**  
1. Need an airport
2. Need a plane
3. Need to be able to land the plane
4. Landing a plane is like 'storing' it in the airport - need a plane list, then
5. The plane list should increase by one when a plane is landed


**Test 1 -** when a ``Plane`` is landed, ``planeList`` should increase by 1


### **User Story 2**
```
As the system designer  
So that the software can be used for many different airports  
I would like a default airport capacity that can be overridden as appropriate
```

**Thoughts**  
1. Airport needs a default capacity
2. The capacity needs to be able to be updated

**Test 2 -** when an ``Airport`` is created, it should have a default capacity of 7