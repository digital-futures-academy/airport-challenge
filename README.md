**DF Airport Domain Models and Test Cases**

## Domain Model 01

| Objects | Properties                   | Messages          | Outputs |
| ------- | ---------------------------- | ----------------- | ------- |
| Airport | airport1@Array[planes]       | add(@plane)       | @void   |
|         |                              |                   |         |
| Plane   |                              |                   |         |

Test cases for DM 01

Test 1 - `airport1` length increases when `add(plane)` is called.

## Domain Model 02

| Objects | Properties        | Messages                    | Outputs  |
| ------- | ----------------- | -------------------------   | -------- |
| Airport | capacity@integer  | overrideCapacity(@limit)    | @integer |
|         |                   |                             |          |
| Plane   |                   |                             |          |

Test Cases for DM 02:

Test 2 - Test `Airport's` default `capacity`.
Test 3 - `overrideCapacity` can be modified with a new value
Test 4 - `airportCapacity` can only accept integers

## Domain Model 03

| Objects | Properties                   | Messages          | Outputs  |
| ------- | ---------------------------- | ----------------- | -------- |
| Airport | airport1 @Array[planes]      | add(@plane)       | @void    |
|         | capacity @integer            | airport.length()  | @integer |
| Plane   |                              |                   |          |

Test Cases for DM 03:

Test 5 - `add(@plane)` should throw error when `airport.length` returns `capacity`

## Domain Model 04

| Objects | Properties                   | Messages          | Outputs  |
| ------- | ---------------------------- | ----------------- | -------- |
| Airport | airport1 @Array[planes]      | remove(@plane)    | @boolean |
|         | plane(x)                     | confirm(@plane)   | @boolean |
| Plane   |                              |                   |          |

Test Cases for DM 04:

Test 6 - `remove(@plane)` should return `true` when `plane(x)` is inside `airport1[]`
Test 7 - `confirm(@plane)` should return `true` for `plane(x)`

## Domain Model 05

| Objects | Properties                  | Messages          | Outputs  |
| ------- | ----------------------------| ----------------- | -------- |
| Airport | remove(@PlaneX)             | indexOf(@planeX)  | @boolean |
|         | add(@PlaneY)                | indexOf(@planeY)  | @boolean |
| Plane   |                             |                   |          |

Test Cases for DM 05

Test 7 - `add(@plane)` should return `false` when `indexOf` returns `Plane(x)`
Test 8 - `remove(plane)` should return `false` when `indexOf` returns `Plane(x)`
Test 9 - `add(@Plane)` should return `true` when `indexOf` returns `false`
Test 10 - `remove(@Plane)` should return `true` when `idexOf` returns `false`

*Extended Acceptance Criteria*

## Domain Model 06

| Objects | Properties                   | Messages                     | Outputs  |
| ------- | ---------------------------- | -----------------            | -------- |
| Airport | howsTheWeather(weatherInput) | remove(@PlaneX)              | @boolean |
|         |                              |                              |          |  
| Weather | Stormy()                     | howsTheWeather(weatherInput) | @boolean |
|         | Sunny                        | howsTheWeather(weatherInput) | @boolean |
| Plane   |                              |                              |          |

Test Cases for DM 06

Test 11 - remove() should return False when howsTheWeather reports Stormy
Test 12 - remove() should return True when howsTheWeather reports Sunny

## Domain Model 07

| Objects | Properties                   | Messages                     | Outputs  |
| ------- | ---------------------------- | -----------------            | -------- |
| Airport | howsTheWeather(weatherInput) | add(@PlaneX)                 | @boolean |
|         |                              |                              |          | 
| Weather | Stormy()                     | howsTheWeather(weatherInput) | @boolean |
|         | Sunny                        | howsTheWeather(weatherInput) | @boolean |
| Plane   |                              |                              |          |

Test Cases for DM 08

Test 13 - `add(@PlaneX)` should return `False` when `howsTheWeather` reports `Stormy`
Test 14 - `add(@PlaneX)` should return `True` when `howsTheWeather` reports `Sunny`

## Domain Model 08

| Objects | Properties                   | Messages                     | Outputs  |
| ------- | ---------------------------- | -----------------            | -------- |
| Airport | airport1@Array[planes]       | add(@PlaneX)                 | @boolean |
|         |                              | noOfPlanesAtAirport()        | @integer |
| Plane   |                              |                              |          |

Test Cases for DM 09

Test 15 - `noOfPlanesAtAirport` should return `airport1.length`