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

The existing airport class now has a property "capacity", the maximum number of planes stored at an airport. The default capacity is set equal to twenty.  that stores a default capacity. 

In order to overide this default capacity, we introduce the changeCapacity() method, which takes a numerical parameter and will modify the capacity property. 

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

The method takeOff() removed a plane from an array and returns a string confirmation.  However, this string confirmation could be satisfied without the plane actually taking off. As an additional check, we verify that the size of the planes array has been reduced by one. An additional test that could be implemented is to verify the plane is no longer in the airport by checking for an instance in the planes array.

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
Two new classes are introduced, Air Traffic Controller and Plane. The Plane class sets up a plane object , which stores two properties, its name and flying status. 

The flying status may be equal to one of the four possible strings:
```
- 'flying'
- 'landing'
- 'landed' 
- 'take off'
```

The Air Traffic Controller class controls interactions between plane and airport objects. This is done through the two query methods contained within the class:
```
- queryTake Off()
- queryLanding()
```

These will be tested by checking that the land() and takeOff() methods return a unsuccessful string statement if the flying status of the plane is invalid. The query methods allow for invalid tags to be changed under conditions given in the user story. For example a plane that is currently flying and wishes to land, must first call the `quertyLanding()` method to change its flying status to landing. 

|Objects|Properties| Messages| Output|
|---| --- | ---| --- |
| Air Traffic Controller | | queryTakeOff(plane, airport)| |
| | |queryLanding(plane, airport)| |
| Plane | name @ String | | |
| | flyingStatus @ String | | | 
|Airport | planes @ array | land(@ plane) | @ String |  
| |capacity @ number | changeCapacity(@ number)| @ String|
| | |takeOff(@ plane [@planes])| @String|
| |name @ String| | |
