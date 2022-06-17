1)
```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```
| noun    | verb        |
| -----   | ----------- |
| plane   |             |
| Airport | land plane  |


| Objects | Properties          | Messages          | Output   |
| ------- | ---------------     | ----------------- | -------- |
| Plane   | name @String        | getName()         | @String  |
| Airport | planesList[@Planes] | landPlane(@plane) | @void    |

2)

```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```


| noun    | verb            |
| -----   | -----------     |
| Airport | change capacity |


| Objects | Properties          | Messages              | Output   |
| ------- | ---------------     | -----------------     | -------- |
| Airport | capacity@number     | setCapacity(@Number)    | @void  |


3)
```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```

| noun    | verb            |
| -----   | -----------     |
| Airport | prevent landing |

| Objects | Properties          | Messages              | Output   |
| ------- | ---------------     | -----------------     | -------- |
| Plane   | name @String        | getName()             | @String  |
| Airport | full@Boolean        | isFull()              | @Boolean |
|         |                     | landPlane(@plane)     | @Error   |


4)
```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```

| noun    | verb            |
| -----   | -----------     |
| Airport | take off plane  |

| Objects | Properties          | Messages              | Output   |
| ------- | ---------------     | -----------------     | -------- |
| Plane   | name @String        | getName()             | @String  |
| Airport |                     | takeOff(@plane)       | @String  |

5)
```
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

```

