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

Task
-----

We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off.  Here are the user stories that we worked out in collaboration with the client:


# Domain Modelling:

## User Story 1
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

| Objects   | Properties                | Messages          | Outputs |
| ----------| ------------------------- | ----------------- | ------- |
| Plane     | id@number                 | createId()        | @number |
|           |                           |                   |         |
| Airport   | planes @Array             |landPlane(@plane)  | @void   |

## User Story 2

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

| Objects   | Properties                | Messages          | Outputs |
| ----------| ------------------------- | ----------------- | ------- |
| Airport   | capacity @Int             | airportCapacity() | @Int    |

## User Story 3

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

| Objects   | Properties                | Messages          | Outputs |
| ----------| ------------------------- | ----------------- | ------- |
| Airport   | planes [@plane]           | landPlane(@plane) |@String  |
|           | capacity @Int             | airportCapacity() |@Int     |

## User Story 4

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport


| Objects   | Properties                | Messages           | Outputs |
| ----------| ------------------------- | -----------------  | ------- |
| Plane     | id @number                |    createId()      | @Int    |
|           |                           |                    |         |
| Airport   | planes [@plane]           |takeOffPlane(@plane)| @String |

## User Story 5

As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

| Objects   | Properties                | Messages           | Outputs |
| ----------| ------------------------- | -----------------  | ------- |
| Plane     | id @number                |      createId()    |@Int     |
|           |                           |                    |         |
| Airport   | planes [@plane]           |takeOffPlane(@plane)| @String |

## User Story 6

As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

| Objects   | Properties                | Messages           | Outputs |
| ----------| ------------------------- | -----------------  | ------- |
| Airport   |  currentWeather@String    | checkWeather()     | @String |
|           |                           |                    |         |
| Airport   | planes [@plane]           |takeOffPlane(@plane)| @Void   |

## User Story 7

As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

| Objects   | Properties                | Messages           | Outputs |
| ----------| ------------------------- | -----------------  | ------- |
| Airport   |  currentWeather@String    | checkWeather()     | @String |
|           |                           |                    |         |
| Airport   | planes [@plane]           |landPlane(@plane)   | @Void   |

## User Story 8

As an air traffic controller
To count planes easily
Planes that have landed must be at an airport

| Objects   | Properties                | Messages           | Outputs |
| ----------| ------------------------- | -----------------  | ------- |
| Plane     |   id @Int                 |createId()          | @Int    |
|           |                           |                    |         |
| Airport   | planes [@plane]           |landPlane(@plane)   | @Void   |


![Test 1](https://user-images.githubusercontent.com/109703832/216161188-c2b3fa9b-0ffe-465f-88c5-315fd0172f2b.png)
![Test 2](https://user-images.githubusercontent.com/109703832/216161219-2de7c0a8-07ad-4856-b015-33c5554613a1.png)
![Test 3](https://user-images.githubusercontent.com/109703832/216161240-b6871380-badc-407f-bac8-c3283db968c1.png)
![Test 4](https://user-images.githubusercontent.com/109703832/216161258-6e560bac-3a72-42bd-aff
![Test 5](https://user-images.githubusercontent.com/109703832/216161272-aa75739c-69a2-4e3f-b1ba-11a038d3ea29.png)
7-6201849e0492.png)

![Test 6](https://user-images.githubusercontent.com/109703832/216161333-e95e0b03-c947-4579-bec7-dbe6d8cefbb6.png)
![Test 7](https://user-images.githubusercontent.com/109703832/216161348-a4a239be-f94a-4ab9-a601-f92ba633dac0.png)
![Test 8](https://user-images.githubusercontent.com/109703832/216161369-797fb6d9-e339-4a97-9127-4bbfd6cc3497.png)
![Test 9](https://user-images.githubusercontent.com/109703832/216161378-c3f0b4e6-180e-4c32-bcc3-bb2a8f85011e.png)
