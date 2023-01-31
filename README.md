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