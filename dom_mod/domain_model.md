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
| Plane | | | |
|Airport | planes @ array | land( @ plane) | None |  

At the moment don't need a plane object, as there are no properties or methods associated with it and it doesn't need to be outputted directly, I think. 

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
| Plane | | | |
|Airport | planes @ array | land(@ plane) | None |  
| |capacity @ number | changeCapacity(@ number)| @ String|