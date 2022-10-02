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

> As an air traffic controller
>
> So I can get passengers to a destination
>
> I want to instruct the airport to land a plane

| **Objects** | **Properties**            | **Messages** | **Output** |
| :---------- | :------------------------ | :----------- | :--------- |
| Airport     | planesArr @array[objects] | @landPlane   | @string    |

**Proposed test/s**

1. Check that array length has increased since function call and function prints confirmation
2. Check that function continues to work as expected when adding more planes to planesArr

> As the system designer
>
> So that the software can be used for many different airports
>
> I would like a default airport capacity that can be overridden as appropriate

| **Objects** | **Properties**        | **Messages** | **Output** |
| :---------- | :-------------------- | :----------- | :--------- |
| Airport     | capacity @number = 10 | setCapacity  | none       |

**Proposed test/s**

1. Check that capacity value matches the default value supplied when a new airport object is created
2. Check that setCapacity function changes the default capacity value

> As an air traffic controller
>
> To ensure safety
>
> I want to prevent landing when the airport is full

| **Objects** | **Properties** | **Messages**   | **Output** |
| ----------- | -------------- | -------------- | ---------- |
| Airport     | capacity       | capacityFull   | boolean    |
|             | planesArr      | preventLanding | none       |

**Proposed test/s**

1. Check that landPlane prints a message when capacity is reached (planesArr === myAirport.capacity)
2. Check that plane is not added to planesArr if planesArr.length >= myAirport.capacity
3. Check that plane is added to planesArr if planesArr.length < myAirport.capacity
4. If a plane lands, check that landPlane has printed confirmation

> As an air traffic controller
>
> So I can get passengers on the way to their destination
>
> I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

| **Objects** | **Properties** | **Messages** | **Output** |
| :---------- | :------------- | :----------- | :--------- |
| Airport     | planesArr      | @initTakeoff | none       |
|             | capacity       | @initTakeoff | boolean    |

> As an air traffic controller
>
> To avoid confusion
>
> I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

| **Objects** | **Properties** | **Messages**    | **Output** |
| :---------- | :------------- | :-------------- | :--------- |
| Airport     | planesArr      | @hasPlaneLeft   | boolean    |
|             | planesArr      | @hasPlaneLanded | boolean    |
