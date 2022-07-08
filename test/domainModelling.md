1)
```
As an air traffic controller
So I can get passengers to a destination
```
| noun    | verb       |
| ------- | ---------- |
| plane   |
| Airport | land plane |

| Object  | Properties         | Messages           | Output  |
| ------- | ------------------ | ------------------ | ------- |
| Plane   | name @String       | getName ()         | @String |
| Airport | planeList[@Planes] | landPlane (@plane) | @String |

2)
````
 As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
`````


| Object  | Properties         | Messages           | Output  |
| ------- | ------------------ | ------------------ | ------- |
| Plane   | name @String       | getName ()         | @String |
| Airport | planeList[@Planes] | landPlane (@plane) | @String |
| Airport | capacity@num       | CheckCapacity()    | @num    |

3)
```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```

| Object           | Properties         | Messages           | Output  |
| ---------------- | ------------------ | ------------------ | ------- |
| Plane            | name @String       | getName ()         | @String |
| Airport          | planeList[@Planes] | landPlane (@plane) | @String |
| preventLanding() | @String            |


4)
```
As an traffic controller 
So that i can get passengers on the way to their destination
I want to instruct the airport to let a plane take off ad confirm that it is no longer in the airport


| Objects    | Properties               | Message                | Output
|Plane       | name@String              | getName()              |@string
|Airport     | planesInAirport[@plane]  | takeoffPlane(@plane)   |@string
                                        | checkPlanesInAirport() |@string


5)
```
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```


| Objects    | Properties               | Message                | Output
|Plane       | name@String              | getName()              |@string
|Airport     | planesInAirport[@plane]  | takeoffPlane(@plane)   |@string
                                        | checkPlanesInAirport () |@string
                                        |takeOffPlanesInAirport()|@string
                                        


