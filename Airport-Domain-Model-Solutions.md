# Airport Challenge User Story Breakdowns/Domain Models




## User Story 1

```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```
| Objects | Properties                   | Messages            | Outputs |
| ------- | ---------------------------- | ------------------- | ------- |
| Airport | airportPlanes @Array[@Plane] | addPlane(@Plane)    | @Void   |
|         |                              | removePlane(@Plane) | @Void   |
| Plane   | id @String                   | getId()             | @String |


## Tests

1. Need an airport
2. Need to put plane objects into airport
3. Airport planes should increase by 1 when a plane lands

### Test 1 - length of `airportPlanes` array increases by 1 when `addPlane` is called.

### Test 2 - addPlanes should only add Plane instances to `airportList`

### Test 3 - Edge Case: falsy values should not be added to `plane`



## User Story 2
```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

| Objects | Properties                | Messages          | Outputs |
| ------- | ------------------------- | ----------------- | ------- |
| Basket  | basketItems @Array[@Item] | addItem(@Item)    | @Void   |
|         |                           | removeItem(@Item) | @Void   |
| Item    | id @String                | getId()           | @String |


1. Airport needs a default capacity
2.

```

## User Story 3
```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

| Objects | Properties                   | Messages            | Outputs |
| ------- | ---------------------------- | ------------------- | ------- |
| Airport | airportPlanes @Array[@Plane] | addPlane(@Plane)    | @Void   |
|         |                              | removePlane(@Plane) | @Void   |
| Plane   | id @String                   | getId()             | @String |

1. add planes to airport to reach capacity
2. if airportPlanes.length = capacity then addPlanes will not function




Test 1 - 
```

## User Story 4
```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

| Objects | Properties                   | Messages            | Outputs |
| ------- | ---------------------------- | ------------------- | ------- |
| Airport | airportPlanes @Array[@Plane] | addPlane(@Plane)    | @Void   |
|         |                              | removePlane(@Plane) | @Void   |
| Plane   | id @String                   | getId()             | @String |



1. Need a an airport array with at least one plane in it
2. Need to remove plane
Check that the length of the airportPlanes array is reduced by 1

```



## User Story 5
```
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

| Objects | Properties                   | Messages            | Outputs |
| ------- | ---------------------------- | ------------------- | ------- |
| Airport | airportPlanes @Array[@Plane] | addPlane(@Plane)    | @Void   |
|         |                              | removePlane(@Plane) | @Void   |
| Plane   | id @String                   | getId()             | @String |


```