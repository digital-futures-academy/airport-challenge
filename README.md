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

# Airport Challenge

### Deryn Cullen

## Domain model

> As an air traffic controller
> So I can get passengers to a destination
> I want to instruct the airport to land a plane

| **Objects** | **Properties**     | **Messages** | **Output** |
| :---------- | :----------------- | :----------- | :--------- |
| Airport     | planesArr[{plane}] | @landPlane   | void       |

> As the system designer
> So that the software can be used for many different airports
> I would like a default airport capacity that can be overridden as appropriate

| **Objects** | **Properties** | **Messages** | **Output** |
| :---------- | :------------- | :----------- | :--------- |
| Airport     | capacity       | @setCapacity | number     |

> As an air traffic controller
> To ensure safety
> I want to prevent landing when the airport is full

| **Objects** | **Properties** | **Messages**    | **Output** |
| :---------- | :------------- | :-------------- | :--------- |
| Airport     | capacity       | @capacityFull   | boolean    |
|             | planesArr      | @preventLanding | void       |

> As an air traffic controller So I can get passengers on the way to their destination I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

| **Objects** | **Properties** | **Messages** | **Output** |
| :---------- | :------------- | :----------- | :--------- |
| Airport     | planesArr      | @initTakeoff | void       |
|             | capacity       | @initTakeoff | boolean    |

> As an air traffic controller To avoid confusion I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

| **Objects** | **Properties** | **Messages**    | **Output** |
| :---------- | :------------- | :-------------- | :--------- |
| Airport     | planesArr      | @hasPlaneLeft   | boolean    |
|             | planesArr      | @hasPlaneLanded | boolean    |
