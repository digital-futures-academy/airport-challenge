Airport Challenge
=================

```
         ______
        __\____\___
=  = ==(____DFA____)
           \_____\__________________,-~~~~~~~`-.._
          /     o o o o o o o o o o o o o o o o  |\_
          `~-.__       __..----..__                  )
                `---~~\___________/------------`````
                =  ===(_________)

```

#### Acceptance Criteria
```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

| Objects | Properties                | Messages          | Outputs |
| ------- | ------------------------- | ----------------- | ------- |
| Airport | LandedList@Array[@Plane]  | addPlane(@Plane)  | @Void   |
| Plane   | id @Integer               |                   | @Void   |


As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

| Objects | Properties                | Messages          | Outputs |
| ------- | ------------------------- | ----------------- | ------- |
| Airport | LandedList@Array[@Plane]  | varyCapacity(     | @Void   |
|         |                           |  @Integer)        |         |
| Plane   | id @Integer               |                   | @Void   |

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

| Objects | Properties                | Messages          | Outputs |
| ------- | ------------------------- | ----------------- | ------- |
| Airport | LandedList@Array[@Plane]  | isFullCheck(      | @Boolean|
|         | airportCapacity @Integer  |  @Plane)          |         |
| Plane   | id @Integer               |                   |         |

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

| Objects | Properties                | Messages          | Outputs |
| ------- | ------------------------- | ----------------- | ------- |
| Airport | LandedList@Array[@Plane]  | removePlane(      | @Void   |
|         |                           |  @Plane)          |         |
|         |                           |  checkList(@Plane)| @Boolean|
| Plane   |  id @Integer              |                   |         |


As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

| Objects | Properties                | Messages          | Outputs |
| ------- | ------------------------- | ----------------- | ------- |
| Basket  | LandedList@Array[@Plane]  | isPlaneThere(     | @Boolean|
|         |                           |  @Plane)          |         |
|         |                           |                   |         |
| Plane   |  id @Integer              |                   |         |

```

#### Extended Acceptance Criteria
```
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

| Objects | Properties                | Messages          | Outputs |
| ------- | ------------------------- | ----------------- | ------- |
| Airport | LandedList@Array[@Plane]  | removePLane(      | @Boolean|
|         |                           | @Plane, @Weather) |         |
|Weather  |  weather @String          |                   |         |
| Plane   |  id @Integer              |                   | @Void   |

As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

| Objects | Properties                | Messages          | Outputs |
| ------- | ------------------------- | ----------------- | ------- |
| Airport | LandedList@Array[@Plane]  | addPLane(         | @Boolean|
|         |                           | @Plane, @Weather) |         |
|Weather  |  weather @String          |                   |         |
| Plane   |  id @Integer              |                   | @Void   |

As an air traffic controller
To count planes easily
Planes that have landed must be at an airport

| Objects | Properties                | Messages          | Outputs |
| ------- | ------------------------- | ----------------- | ------- |
| Airport | LandedList@Array[@Plane]  | countPlane()      | @Integer|
| Plane   | id @Integer               |                   | @Void   |

```


