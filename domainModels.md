# Domain Models

## User Story 1
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane


| Object      | Properties                | Messages              | Output             |
| ----------- | ------------------------- | --------------------- | ------------------ |
| **Airport** | **planes @Array[@Plane]** | **landPlane(@Plane)** | **@Array[@Plane]** |

---

## User Story 2
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

| Object  | Properties               | Messages                       | Output         |
| ------- | ------------------------ | ------------------------------ | -------------- |
| Airport | planes @Array[@Plane]    | landPlane(@Plane)              | @Array[@Plane] |
|         | **maxCapacity @Integer** | **overrideCapacity(@Integer)** | **@Integer**   |

---

## User Story 3
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

| Object  | Properties                    | Messages                         | Output         |
| ------- | ----------------------------- | -------------------------------- | -------------- |
| Airport | planes @Array[@Plane]         | landPlane(@Plane)                | @Array[@Plane] |
|         | maxCapacity @Integer          | overrideCapacity(@Integer)       | @Integer       |
|         | **currentCapacity @ Integer** | **checkIfFull()**                | **@Boolean**   |
|         |                               | **setCurrentCapacity(@Integer)** | **@Integer**   |

---

## User Story 4
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

| Object  | Properties                | Messages                     | Output             |
| ------- | ------------------------- | ---------------------------- | ------------------ |
| Airport | planes @Array[@Plane]     | landPlane(@Plane)            | @Array[@Plane]     |
|         | maxCapacity @Integer      | overrideCapacity(@Integer)   | @Integer           |
|         | currentCapacity @ Integer | checkIfFull()                | @Boolean           |
|         |                           | setCurrentCapacity(@Integer) | @Integer           |
|         |                           | **allowTakeOff(@Plane)**     | **@Array[@Plane]** |
|         |                           | **checkIfLanded(@Plane)**    | **@Boolean**       |

---

## User Story 5
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

| Object  | Properties                | Messages                     | Context            | Output                                   |
| ------- | ------------------------- | ---------------------------- | ------------------ | ---------------------------------------- |
| Airport | planes @Array[@Plane]     | landPlane(@Plane)            | not landed         | @Array[@Plane]                           |
|         | maxCapacity @Integer      | **landPlane(@Plane)**        | **landed**         | **@String "Plane has already landed"**   |
|         | currentCapacity @ Integer | overrideCapacity(@Integer)   |                    | @Integer                                 |
|         |                           | checkIfFull()                |                    | @Boolean                                 |
|         |                           | setCurrentCapacity(@Integer) |                    | @Integer                                 |
|         |                           | allowTakeOff(@Plane)         | at Airport         | @Array[@Plane]                           |
|         |                           | **allowTakeOff(@Plane)**     | **not at Airport** | **@String "Plane isn't currently here"** |
|         |                           | checkIfLanded(@Plane)        |                    | @Boolean                                 |

---

## User Story 6
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

| Object  | Properties                | Messages                     | Context                   | Output                                          |
| ------- | ------------------------- | ---------------------------- | ------------------------- | ----------------------------------------------- |
| Airport | planes @Array[@Plane]     | landPlane(@Plane)            | not landed                | @Array[@Plane]                                  |
|         | maxCapacity @Integer      | landPlane(@Plane)            | landed                    | @String "Plane has already landed"              |
|         | currentCapacity @ Integer | overrideCapacity(@Integer)   |                           | @Integer                                        |
|         | **weather @String**       | checkIfFull()                |                           | @Boolean                                        |
|         |                           | setCurrentCapacity(@Integer) |                           | @Integer                                        |
|         |                           | allowTakeOff(@Plane)         | at Airport and not stormy | @Array[@Plane]                                  |
|         |                           | **allowTakeOff(@Plane)**     | **at Airport and stormy** | **@String "Weather isn't suitable for takeoff** |
|         |                           | allowTakeOff(@Plane)         | not at Airport            | @String "Plane isn't currently here"            |
|         |                           | checkIfLanded(@Plane)        |                           | @Boolean                                        |

---

## User Story 7
As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

| Object  | Properties                | Messages                     | Context                   | Output                                         |
| ------- | ------------------------- | ---------------------------- | ------------------------- | ---------------------------------------------- |
| Airport | planes @Array[@Plane]     | landPlane(@Plane)            | not landed and not stormy | @Array[@Plane]                                 |
|         | maxCapacity @Integer      | **landPlane(@Plane)**        | **not landed and stormy** | **@String "Weather not suitable for landing"** |
|         | currentCapacity @ Integer | landPlane(@Plane)            | landed                    | @String "Plane has already landed"             |
|         | **weather @String**       | overrideCapacity(@Integer)   |                           | @Integer                                       |
|         |                           | checkIfFull()                |                           | @Boolean                                       |
|         |                           | setCurrentCapacity(@Integer) |                           | @Integer                                       |
|         |                           | allowTakeOff(@Plane)         | at Airport and not stormy | @Array[@Plane]                                 |
|         |                           | allowTakeOff(@Plane)         | at Airport and stormy     | @String "Weather isn't suitable for takeoff    |
|         |                           | allowTakeOff(@Plane)         | not at Airport            | @String "Plane isn't currently here"           |
|         |                           | checkIfLanded(@Plane)        |                           | @Boolean                                       |

---

## User Story 8
As an air traffic controller
To count planes easily
Planes that have landed must be at an airport

| Object    | Properties                | Messages                     | Context                   | Output                                      |
| --------- | ------------------------- | ---------------------------- | ------------------------- | ------------------------------------------- |
| Airport   | planes @Array[@Plane]     | landPlane(@Plane)            | not landed and not stormy | @Array[@Plane]                              |
|           | maxCapacity @Integer      | landPlane(@Plane)            | not landed and stormy     | @String "Weather not suitable for landing"  |
|           | currentCapacity @ Integer | landPlane(@Plane)            | landed                    | @String "Plane has already landed"          |
|           | weather @String           | overrideCapacity(@Integer)   |                           | @Integer                                    |
|           |                           | checkIfFull()                |                           | @Boolean                                    |
|           |                           | setCurrentCapacity(@Integer) |                           | @Integer                                    |
|           |                           | allowTakeOff(@Plane)         | at Airport and not stormy | @Array[@Plane]                              |
|           |                           | allowTakeOff(@Plane)         | at Airport and stormy     | @String "Weather isn't suitable for takeoff |
|           |                           | allowTakeOff(@Plane)         | not at Airport            | @String "Plane isn't currently here"        |
|           |                           | checkIfLanded(@Plane)        |                           | @Boolean                                    |
| **Plane** | **airport @Airport**      |                              |                           |                                             |