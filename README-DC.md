# Airport Challenge

``````
         ______
        __\____\___
=  = ==(____DFA____)
           \_____\__________________,-~~~~~~~`-.._
          /     o o o o o o o o o o o o o o o o  |\_
          `~-.__       __..----..__                  )
                `---~~\___________/------------`````
                =  ===(_________)

``````

### -- Deryn Cullen --

## Domain model

```
1.
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```

| **Objects** | **Properties**            | **Messages** | **Output** |
| ----------- | ------------------------- | ------------ | ---------- |
| Airport     | planesArr @array[objects] | @landPlane   | @string    |
|             |                           |              |            |
| Plane       | id                        |              |            |

**Proposed test/s**

1. Check that array length has increased since function call
2. Check that function continues to work as expected when adding more planes to planesArr

```
2.
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```

| **Objects** | **Properties**        | **Messages** | **Output** |
| :---------- | :-------------------- | :----------- | :--------- |
| Airport     | capacity @number = 10 | @setCapacity | none       |
|             |                       |              |            |
| Plane       | id                    |              |            |

**Proposed test/s**

1. Check that capacity value matches the default value supplied when a new airport object is created
2. Check that setCapacity function changes the default capacity value

```
3.
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```

| **Objects** | **Properties** | **Messages**    | **Output** |
| ----------- | -------------- | --------------- | ---------- |
| Airport     | capacity       | capacityReached | @string    |
|             | planesArr      |                 |            |
|             |                |                 |            |
| Plane       | id             |                 |            |

**Proposed test/s**

1. If a plane lands **before capacity** is reached, check that planesArray increases by 1.
2. If a plane lands, check that landPlane has printed confirmation
3. Check that capacityReached message returned when airport capacity is full
4. Check that plane is not added to planesArr when airport capacity is full

```
4.
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```

| **Objects** | **Properties** | **Messages** | **Output** |
| :---------- | :------------- | :----------- | :--------- |
| Airport     | planesArr      | @initTakeoff | none       |
|             | capacity       | @initTakeoff | boolean    |

```
5.
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```

| **Objects** | **Properties** | **Messages**    | **Output** |
| :---------- | :------------- | :-------------- | :--------- |
| Airport     | planesArr      | @hasPlaneLeft   | boolean    |
|             | planesArr      | @hasPlaneLanded | boolean    |
