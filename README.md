Airport Challenge
-----
We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off.  Here are the user stories that we worked out in collaboration with the client.

#### Installation
***
* Clone the repository:
git clone https://github.com/dariastnl/airport-challenge.git

* Change into the project directory and test folder:
cd ../airport-challenge/test>

* Install the dependencies:
npm install

* Run:
node.js airport.spec.js

#### Approach
***
The Airport Challenge is implemented in JavaScript using Node.js. 

It consists of two main classes: Airport and Plain. 
* The Airport class is responsible for landing and taking off planes, checking the airport's capacity and handling stormy weather conditions.
* The Plane class is responsible for representing a plane and validating its ID, ensuring that the object has a valid ID.

Using the framework, the tests cover various scenarios such as landing a plane, overriding the airport capacity, checking if the airport is full, taking off a plane, preventing unwanted actions, and handling stormy weather.

The airport.spec.js file is responsible for running tests, ensuring that they are functioning correctly.

And the testing framework, which is a crucial component in the testing process. 
It runs all the tests, reporting the results.

#### User stories & Domain Models
```
1. As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

| Objects | Properties                    | Messages            | Outputs |
| ------- | ----------------------------- | ------------------- | ------- |
| Airport | airportPlanes @Array[@Plane]  | landPlane (@Plane)  | @Void   |
|         |                               |                     |         |
| Plane   | id @String                    |                     |         |

2. As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

| Objects   | Properties               | Messages                   | Outputs  |
| --------- | ------------------------ | -------------------------- | -------- |
| Airport   | airportCapacity @Integer | setCapacity(@Integer)      | @Void    |

3. As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

| Objects   | Properties                            | Messages               | Outputs    |
| --------- | ------------------------------------- | ---------------------- | ---------- |
| Airport   | airportCapacity @Integer              | isFull()               | @Boolean   |

4. As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

| Objects   | Properties                            | Messages                               | Outputs  |
| --------- | ------------------------------------- | -------------------------------------- | -------  |
| Airport   | airportPlanes @Array[@Plane]          | takeOff(@Plane)                        | @Void    |
|           |                                       | isInAirport()                          | @Boolean |
|           |                                       |                                        |          |
| Plane     | id @String                            |                                        |          |

5. As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

| Objects | Properties                   | Messages                           | Outputs       |
| ------- | ---------------------------- | -----------------------------      | ------------- |
| Airport | airportPlanes @Array[@Plane] | takeOff(@Plane), landPlane(@Plane) | @Void         |
|         |                              | isInAirport(@Plane)                | @Boolean      |
| Plane   | id @String                   |                                    |               |
```

#### Extended
***
```
6. As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

| Objects   | Properties            | Messages                      | Outputs  |
| --------- | --------------------- | ----------------------------- | -------  |
| Airport   | weather @String       | takeOff(@Plane)               | @Boolean |
|           |                       | isStormy(@boolean)            |          |
| Plane     | id @String            |                               |          |

7. As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

| Objects   | Properties            | Messages                      | Outputs  |
| --------- | --------------------- | ----------------------------- | -------  |
| Airport   | weather @String       | landPlane(@Plane)             | @Boolean |
|           |                       | isStormy(@boolean)            |          |
| Plane     | id @String            |                               |          |

As an air traffic controller
To count planes easily
Planes that have landed must be at an airport

| Objects   | Properties                   | Messages                       | Outputs |
| --------- | -------------------------    | ------------------------------ | ------- |
| Airport   | airportPlanes: Array[@Plane] | landPlane(Plane)               | @Void   |
|           |                              | confirmLanding(Plane)          |         |
| Plane     | id: String                   |                                |         |
```

#### Output
```
Test 1:
Land a plane at the airport using landPlane and expect airportPlanes array to increase in length to 1
------------------------------------------------------------------------------------------------------
1 plane landed at the airport: true
Result: PASS

Test 2
Set airport capacity to 30 using setCapacity and expect airportCapacity to be updated
------------------------------------------------------------------------------------------------------
Test 2: Airport capacity set to 30: true
Test 2: PASS

Test 3
Check if the airport is full using isFull and expect a boolean value
------------------------------------------------------------------------------------------------------
Test 3: Can a plane be landed?: true
Test 3: PASS

Test 4:
A plane takes off, and it is confirmed that it is no longer in the airport
------------------------------------------------------------------------------------------------------
Plane is not in the airport after take off: true
Result: PASS

Test 5:
Prevent taking off a plane not in the airport and prevent landing a plane that is already in the airport
------------------------------------------------------------------------------------------------------
Prevented taking off a plane not in the airport: true
Prevented landing a plane already in the airport: true
Result: PASS

Test 6:
Prevent taking off when weather is stormy
------------------------------------------------------------------------------------------------------
Prevented taking off when weather is stormy: true
Result: PASS

Test 7:
Prevent landing when weather is stormy
------------------------------------------------------------------------------------------------------
Prevented landing when weather is stormy: true
Result: PASS

Test 8:
Planes that have landed must be at an airport
------------------------------------------------------------------------------------------------------
Plane is confirmed to be at the airport after landing: true
Result: PASS
```

#### Author
***
Daria Stanilevici
If you have any questions, feel free to contact me at Discord: charmingyou
