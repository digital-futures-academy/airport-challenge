
 ## User story 1
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

| Objects   | Properties               | Message                      | Output  |
|-----------|--------------------------|------------------------------|---------|
| Plane    | -Plane(@String)      | -Plane()            | @String |
| Airport   | -Plane @Array[@Plane] | - land(@String) | @Plane |

## User story 2
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

| Objects | Properties                 | Message            | Output   |
|---------|----------------------------|--------------------|----------|
| Airport | -airportCapacity(@Boolean) | -checkAirportCap() | @Boolean |

## User story 3
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

| Objects | Properties                 | Message                      | Output   |
|---------|----------------------------|------------------------------|----------|
| Airport | -Flights @Array[@Flight]   | - searchByFlightNum(@String) | @Flight  |
| Airport | -airportCapacity(@Boolean) | -checkAirportCap()           | @Boolean |

## User story 4
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

| Objects   | Properties               | Message                      | Output   |
|-----------|--------------------------|------------------------------|----------|
|
| Airport   | -Flights @Array[@Flight] | - TakeOff()            | @Boolean |

## User story 5
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

| Objects | Properties               | Message                      | Output   |
|---------|--------------------------|------------------------------|----------|
| Airport | -Planes @Array[@Flight] | - TakeOff()            | @Boolean |

## User story 6
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

| Objects | Properties               | Message           | Output   |
|---------|--------------------------|-------------------|----------|
| Weather | -stromy(@Boolean)        | -checkStromy()    | @Boolean |
| Airport | -Flights @Array[@Flight] | - flightTakeOff() | @Flight  |

## User story 7
As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

| Objects | Properties                | Message        | Output     |
|---------|---------------------------|----------------|------------|
| Weather | stromy(@Boolean)          | -checkStromy() | @Boolean   |
| Airport | - Flights @Array[@Flight] | - flightLand() | - @Boolean |

## User story 8
As an air traffic controller
To count planes easily
Planes that have landed must be at an airport
| Objects    | Properties                   | Message                      | Output      |
|------------|------------------------------|------------------------------|-------------|
| Airport | -Flights @Array[@Flight] | - searchByFlightNum(@String) | @Flight  |

