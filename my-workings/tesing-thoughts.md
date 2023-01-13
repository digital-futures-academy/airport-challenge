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