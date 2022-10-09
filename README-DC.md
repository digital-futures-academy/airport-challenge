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

| **Objects** | **Properties**                  | **Messages** | **Output** |
| ----------- | ------------------------------- | ------------ | ---------- |
| Airport     | planesAtAirport @array[objects] | @landPlane   | @string    |
|             |                                 |              |            |
| Plane       | id                              |              |            |

**Proposed test/s**

1. Check that array length has increased since function call
2. Check that function continues to work as expected when adding more planes to planesAtAirport

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

| **Objects** | **Properties**  | **Messages**    | **Output** |
| ----------- | --------------- | --------------- | ---------- |
| Airport     | capacity        | capacityReached | @string    |
|             | planesAtAirport |                 |            |
|             |                 |                 |            |
| Plane       | id              |                 |            |

**Proposed test/s**

1. If a plane lands **before capacity** is reached, check that planesAtAirportay increases by one.
2. If a plane lands, check that landPlane has printed confirmation
3. Check that capacityReached message returned when airport capacity is full
4. Check that plane is not added to planesAtAirport when airport capacity is full

```
4.
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```

| **Objects** | **Properties**                | **Messages** | **Output** |
| ----------- | ----------------------------- | ------------ | ---------- |
| Airport     | planesAtAirport               | @initTakeoff | @string    |
|             | planesEnroute @array[objects] |              |            |

**Propsed Tests**

1. Check that initTakeoff returns a confirmation message when a plane leaves the airport
2. Check that initTakeoff reduces planeArray.length by one
3. Check that initTakeoff removes the plane passed to it from planeArray

```
5.
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take off which are not at the airport, or land a plane that's already landed
```

| **Objects** | **Properties**  | **Messages**      | **Output** |
| :---------- | :-------------- | :---------------- | :--------- |
| Airport     | planesAtAirport | @initTakeoff      | @string    |
|             |                 | @landPlane        | @string    |
|             |                 | @planeIsAtAirport | @boolean   |
|             |                 | @getPlaneStatus   | @string    |

**Propsed Tests**

1. Check that when plane is in planesAtAirport array, planeIsAtAirport returns true
2. Check that when plane is **not** in planesAtAirport array, planeIsAtAirport returns false
3. Check that landPlane returns an error message when plane is already at airport
4. Check that landPlane does not land a plane that is already at the airport
5. Check that initTakeoff returns an error message when plane is not at airport
6. Check that initTakeoff does not take-off a plane that is not at the airport
