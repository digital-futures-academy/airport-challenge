## Domain Model

---
### Part 1
```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```

Nouns: passengers, destination, plane, airport
Verbs: instruct, land

We want to create an aiport class that contains a property planes that may be stored as an array (could choose object literal but no need to introduce yet!). If a plane is to land in the airport it will be in the airport. Therefore the method land() should add a plane to the planes array so that it is in the airport. 

|Objects|Properties| Messages| Output|
|---| --- | ---| --- |
| Plane | name @ String | | |
|Airport | planes @ array | land( @ plane) | None |  

We don't need a plane object initially, but it was added retroactively during part 5.  

---
### Part 2

```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```

We want to modify the existing airport class that was created in part 1 to contain a property "capacity" that stores a default capacity. We shall define the "capacity" as the maximum number of planes that can be stored at the airport. At the moment, we shall not perform any checks on the planes array as the user story does not have any requirements to do that. It would be reasonable to clarify the user story to check that the number of planes in the aiport does not exceed the capacity. 

We introduce a new property capacity, stored as a numerical value in the class Airport. This is initialised with a value as specified in the user story. In order to overide this default capacity, we introduce the changeCapacity() method, which takes a numerical parameter and will modify the capacity property. 

Our table in part 1 is now updated as follows:

|Objects|Properties| Messages| Output|
|---| --- | ---| --- |
| Plane | name @ String| | |
|Airport | planes @ array | land(@ plane) | None |  
| |capacity @ number | changeCapacity(@ number)| @ String|

The plane object is unmodified and we do not need to change our previous tests. 

---
### Part 3

```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```

We shall change the output of land() to return a string if the airport is full. The condition for an airport to be full is if the current length of the planes array is equal to the airport.capacity property.  

|Objects|Properties| Messages| Output|
|---| --- | ---| --- |
| Plane | name @ String | | |
|Airport | planes @ array | land(@ plane) | @ String |  
| |capacity @ number | changeCapacity(@ number)| @ String|

### Part 4 

```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```

A new method takeOff() is defined which will allow a plane contained with the planes array to be removed. It could then return a string confirmation to the user that the plane has taken off. However, this string confirmation could be satisfied without the plane actually taking off. Therefore instead we shall check the planes array in the airport no longer contains the string of the plane that has taken off, and return a descriptive string that contains the current length of the planes array and the plane that has taken off. This approach may be confusing as a test is not strictly a unit test. 

|Objects|Properties| Messages| Output|
|---| --- | ---| --- |
| Plane | name @ String | | |
|Airport | planes @ array | land(@ plane) | @ String |  
| |capacity @ number | changeCapacity(@ number)| @ String|
| | |takeOff(@ plane [@planes])| @String|

### Part 5 

```
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```

We need to modify land(), takeOff() and the structure of the planes array. We could introduce a plane class with the property of being flying or not. We could store the information of the plane as an object literal instead of an array. Which approach would ensure our program is less tightly coupled? May be easiest to store plane as an object literal so we only have one class??

We have introduced a flying property to the plane object. The planes array will now look like an array of object literals [{name: flyingTag}]. But could I not just write this as an object literal? Also as a plane is now a separate object, if we are thinking in terms of object orientated programming it would be better to have its own class. I will have to run tests to see which is the best implementation. 

|Objects|Properties| Messages| Output|
|---| --- | ---| --- |
| Air Traffic Controller | | queryTakeOff(plane, airport)| |
| | |queryLanded(plane, airport)| |
| Plane | name @ String | | |
| | flyingStatus @ String | | | 
|Airport | planes @ array | land(@ plane) | @ String |  
| |capacity @ number | changeCapacity(@ number)| @ String|
| | |takeOff(@ plane [@planes])| @String|
| |name @ String| | |

Should I put a context line in my table?