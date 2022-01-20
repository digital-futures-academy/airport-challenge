# 0. Overview

The aim for this project is to create a programme for our users (both air controllers and software developers) to make use of various functions of an airport. It involves writing domain models, unit tests and the actual programme. 

# 1. Domain Modelling

The follow table shows how I attempted to translate user stories into domain models:

| Object  | Properties          | Methods                      | Output           |
| ------- | ------------------- | ---------------------------- | ---------------- |
| Airport | 1. plane @array     | 1. countPlane                | @number          |
|         | 2. capacity @number | 2. changeCapacity            | @number          |
|         | 3. stormy @boolean  | 3. changeWeather()           | @boolean         |
|         |                     | 4. landPlaneToAirport()      | @array OR @error |
|         |                     | 5. takeOffPlaneFromAirport() | @array OR @error |


# 2. Set Up

To kick start TDD for this project, I created 2 folders `src` and `tests`. The former contains a file `Airport.js` in which objects, properties and methods mentioned in Section 1 above were created. On the other hand, the `tests` folder contains various files: 1. `test-framework.js` allows users to assert whether two values are equal to each other. This lays the groundwork for unit testing afterwards; 2. `test-specs.js` specifies all the requirements for each unit within the programme. All expectations were spelled out and all possible edge cases should have been included and tested in this file; 3. `specRunner.js` is where all tests are imported and carried out. All tests should return `true`. 

# 3. Output

The actual programme can be executed in `main.js`. 

First, there are a few important properties in the class `Airport`. `airport.plane` should return an array of planes landed while `airport.capacity` would report the current capacity of the airport. 

In addition, `airport.stormy` is set to false in default, meaning that the weather is good enough for planes to take off. However, weather in real-life is unpredictable. This programme allows the possiblity of having bad weathers. To do so, the `changeWeather()` can be called so that whether there is a storm depends on the result from a random generator: if it returns 1, `airport.stormy` will be change to true; otherwise, it remains false.

There are also other useful functions in this programme. For instance, `countPlane()` allows users to count the number of planes landed at the airport. Software developers can also call teh `changeCapacity()` function to override the default capacity of the airport. `landPlaneToAirport()` takes the name of the plane (@string) as an argument, and will land the plane if the capacity has not been reached. On the other hand, `takeOffPlaneFromAirport` also takes the name of the plane as argument, and will allow the plane to take off if the plane is indeed at the airport AND if there is no storm. 
