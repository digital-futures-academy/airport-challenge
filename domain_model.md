## Domain Model

```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```

Nouns: passengers, destination, plane, airport
Verbs: instruct, land

We want to create an aiport class that contains a property planes that may be stored as an array (could choose object literal but no need to introduce yet!). If a plane is to land in the airport it will be in the airport. Therefore the method land() should add a plane to the planes array so that it is in the airport. 
