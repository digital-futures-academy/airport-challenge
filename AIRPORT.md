## Installation

This repo uses the jasmine framwork so this will need to be installed to run the tests. The command to run the tests is:
```
npm test
```

## User Stories

# Part 1

```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```

| Objects | Properties              | Messages      | Outputs        |
| ------- | ----------------------- | ------------- | -------------- |
| Airport | onGround @Array[@Plane] | getOnGround() | @Array[@Plane] |
|         |                         | land(@Plane)  |                |
| Plane   |                         |               |                |

# Part 2

```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```

| Objects | Properties              | Messages             | Outputs        |
| ------- | ----------------------- | -------------------- | -------------- |
| Airport | onGround @Array[@Plane] | getOnGround()        | @Array[@Plane] |
|         | capacity @Number        | getCapacity()        | @Number        |
|         |                         | setCapacity(@Number) |                |
|         |                         | land(@Plane)         |                |
| Plane   |                         |                      |                |

# Part 3

```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```

| Objects | Properties              | Messages             | Outputs        |
| ------- | ----------------------- | -------------------- | -------------- |
| Airport | onGround @Array[@Plane] | getOnGround()        | @Array[@Plane] |
|         | capacity @Number        | getCapacity()        | @Number        |
|         |                         | setCapacity(@Number) |                |
|         |                         | land(@Plane)         |                |
|         |                         | isFull()             | @Boolean       |
| Plane   |                         |                      |                |

# Part 4

```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```

| Objects | Properties              | Messages             | Outputs        |
| ------- | ----------------------- | -------------------- | -------------- |
| Airport | onGround @Array[@Plane] | getOnGround()        | @Array[@Plane] |
|         | capacity @Number        | getCapacity()        | @Number        |
|         |                         | setCapacity(@Number) |                |
|         |                         | land(@Plane)         |                |
|         |                         | isFull()             | @Boolean       |
|         |                         | takeOff(@Plane)      | @Plane         |
| Plane   | id @String              | getId()              | @String        |

# Part 5

```
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```

| Objects | Properties              | Messages             | Outputs         |
| ------- | ----------------------- | -------------------- | --------------- |
| Airport | onGround @Array[@Plane] | getOnGround()        | @Array[@Plane]  |
|         | capacity @Number        | getCapacity()        | @Number         |
|         |                         | setCapacity(@Number) |                 |
|         |                         | land(@Plane)         | @Null           |
|         |                         | isFull()             | @Boolean        |
|         |                         | takeOff(@Plane)      | @Plane or @Null |
| Plane   | id @String              | getId()              | @String         |

# Part 6

```
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy
```

| Objects | Properties              | Messages             | Outputs         |
| ------- | ----------------------- | -------------------- | --------------- |
| Airport | onGround @Array[@Plane] | getOnGround()        | @Array[@Plane]  |
|         | capacity @Number        | getCapacity()        | @Number         |
|         |                         | setCapacity(@Number) |                 |
|         | weather @Array[@String] | getWeather()         | @Number         |
|         |                         | setWeather(@Number)  | @Number         |
|         |                         | land(@Plane)         | @Null           |
|         |                         | isFull()             | @Boolean        |
|         |                         | takeOff(@Plane)      | @Plane or @Null |
| Plane   | id @String              | getId()              | @String         |

# Part 7

```
As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy
```

| Objects | Properties              | Messages             | Outputs         |
| ------- | ----------------------- | -------------------- | --------------- |
| Airport | onGround @Array[@Plane] | getOnGround()        | @Array[@Plane]  |
|         | capacity @Number        | getCapacity()        | @Number         |
|         |                         | setCapacity(@Number) |                 |
|         | weather @Array[@String] | getWeather()         | @Number         |
|         |                         | setWeather(@Number)  | @Number         |
|         |                         | land(@Plane)         | @Null           |
|         |                         | isFull()             | @Boolean        |
|         |                         | takeOff(@Plane)      | @Plane or @Null |
| Plane   | id @String              | getId()              | @String         |


# Part 8

```
As an air traffic controller
To count planes easily
Planes that have landed must be at an airport
```

| Objects | Properties              | Messages             | Outputs         |
| ------- | ----------------------- | -------------------- | --------------- |
| Airport | onGround @Array[@Plane] | getOnGround()        | @Array[@Plane]  |
|         | capacity @Number        | getCapacity()        | @Number         |
|         |                         | setCapacity(@Number) |                 |
|         | weather @Array[@String] | getWeather()         | @Number         |
|         |                         | setWeather(@Number)  | @Number         |
|         | id @String              | getId                | @String         |
|         |                         | land(@Plane)         | @Null           |
|         |                         | isFull()             | @Boolean        |
|         |                         | takeOff(@Plane)      | @Plane or @Null |
| Plane   | id @String              | getId()              | @String         |
|         | airport @String         | getAirport()         | @String         |
