# Aiport Challenge

## Instructions

- Run `npm test` to execute test runner.

## Overview

To complete this challenge I used domain modelling and test-driven-development, incrementally adding features to address each user story in turn. In general I found this to be a very beneficial approach to development as it allowed me to stay confident in my existing code when I went back to refactor and make implementation changes.

If I were to repeat this challenge again, I would look further ahead and try to address all the user stories in a single domain model before I started coding any features. I feel this would limit the amount of refactoring I ultimately had to do. My solution also feels quite complex given the relative simplicity of the task, but I could not see an easier way to satisfy all the user stories. Possibly I should have asked for more clarification on the final user story in particular to try and avoid this.

Below is a basic demo of how the classes work:

```js
const airport = new Airport(); // creates an airport with default capacity 10
const plane = new Plane("1"); // creates a plane with ID of "1"

plane.land(airport); // changes plane's status to "landed" and adds it to airport planes array
plane.takeOff(airport); // change's plane's status to "flying" and removes it from airport planes array

airport.arrive(plane); // ERROR: airport.arrive can only be called by a plane which is landing
airport.depart(plane); // ERROR: airport.depart can only be called by a plane which is taking off
```

## Domain Models / Comments

### User Story 1

```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```

| Objects | Properties     | Messages          | Output  |
| ------- | -------------- | ----------------- | ------- |
| Airport |                | landPlane(@Plane) | @Void   |
| Plane   | status @String | status()          | @String |

### User Story 2

```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```

| Objects | Properties        | Messages          | Output   |
| ------- | ----------------- | ----------------- | -------- |
| Airport | capacity @Integer | capacity()        | @Integer |
|         |                   | landPlane(@Plane) | @Void    |
| Plane   | status @String    | status()          | @String  |

### User Story 3

```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```

| Objects | Properties            | Messages          | Output         |
| ------- | --------------------- | ----------------- | -------------- |
| Airport | capacity @Integer     | capacity()        | @Integer       |
|         |                       | isFull()          | @Boolean       |
|         | planes @Array[@Plane] | planes()          | @Array[@Plane] |
|         |                       | landPlane(@Plane) | @Void          |
| Plane   | status @String        | status()          | @String        |

### User Story 4

```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```

| Objects | Properties            | Messages              | Output         |
| ------- | --------------------- | --------------------- | -------------- |
| Airport | capacity @Integer     | capacity()            | @Integer       |
|         |                       | isFull()              | @Boolean       |
|         | planes @Array[@Plane] | planes()              | @Array[@Plane] |
|         |                       | landPlane(@Plane)     | @Void          |
|         |                       | takeOffPlane(@String) | @Void          |
|         |                       | hasPlane(@String)     | @Boolean       |
| Plane   | id @String            | id()                  | @String        |
|         | status @String        | status()              | @String        |

### User Story 5 & 8

```
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```

Initially I made no domain change. I added new checks in the `landPlane` and `takeOffPlane` functions, and also added the `isFull` test and function which I forgot to implement separately in a previous test cycle.

```
As an air traffic controller
To count planes easily
Planes that have landed must be at an airport
```

At this point I was starting to dislike the way my codebase was organised. All the functionality and tests belonged to the `Airport` class, with the `Plane` not having any responsibility over its own state. As I looked ahead to the extended criteria, I also noticed that the final story required that "Planes that have landed must be at an airport" - I took this to mean that it must be functionally impossible for a plane to enter the "landed" state without first ensuring it is at an airport.

With these two things in mind, I returned to first principles and started test-driving a new implementation using the following domain model:

| Objects | Properties            | Messages          | Output         |
| ------- | --------------------- | ----------------- | -------------- |
| Airport | capacity @Integer     | capacity()        | @Integer       |
|         |                       | isFull()          | @Boolean       |
|         | planes @Array[@Plane] | planes()          | @Array[@Plane] |
|         |                       | arrive(@Plane)    | @Void          |
|         |                       | depart(@Plane)    | @Void          |
|         |                       | hasPlane(@Plane)  | @Boolean       |
| Plane   | id @String            | id()              | @String        |
|         | status @String        | status()          | @String        |
|         |                       | land(@Airport)    | @Void          |
|         |                       | takeOff(@Airport) | @Void          |

### User Story 6 & 7

```
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy
```

| Objects | Properties            | Messages          | Output         |
| ------- | --------------------- | ----------------- | -------------- |
| Airport | capacity @Integer     | capacity()        | @Integer       |
|         |                       | isFull()          | @Boolean       |
|         | planes @Array[@Plane] | planes()          | @Array[@Plane] |
|         |                       | arrive(@Plane)    | @Void          |
|         |                       | depart(@Plane)    | @Void          |
|         |                       | hasPlane(@Plane)  | @Boolean       |
|         | forecaster @Weather   | forecaster()      | @Weather       |
| Plane   | id @String            | id()              | @String        |
|         | status @String        | status()          | @String        |
|         |                       | land(@Airport)    | @Void          |
|         |                       | takeOff(@Airport) | @Void          |
| Weather |                       | forecast()        | @String        |