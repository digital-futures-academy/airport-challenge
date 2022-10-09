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

#### Acceptance Criteria
```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```

#### Extended Acceptance Criteria
```
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

As an air traffic controller
To count planes easily
Planes that have landed must be at an airport
```

#### Domain Models
```
| Objects | Properties              | Messages            | Output  |
| ------- | ----------------------- | ------------------- | ------- |
| Airport | - name @String          | - landPlane(@Plane) | - @Void |
| Plane   | - Planes @Array[@Plane] |                     |         |

Test - Check the length of the Planes array to see if it increases after calling the `landPlane` function.

| Objects | Properties             | Messages               | Output  |
| ------- | ---------------------- | ---------------------- | ------- |
| Airport | - airportCapacity @int | - changeCapacity(@int) | - @Void |

Test - Check to see if the function changes the maximum capacity of the airport by comparing the expected outcome with the `airportCapacity` variable.

| Objects | Properties              | Messages          | Output     |
| ------- | ----------------------- | ----------------- | ---------- |
| Airport | - Planes @Array[@Plane] | - isAirportFull() | - @Boolean |

Test - Change the capacity to equal the length of the array to test if 'isAirportFull() returns true.

| Objects | Properties              | Messages          | Output  |
| ------- | ----------------------- | ----------------- | ------- |
| Airport | - Planes @Array[@Plane] | - takeOff(@Plane) | - @Void |

Test - Check to see if the `Planes` array does not contain the `Plane` object anymore.

| Objects | Properties              | Messages                   | Output     |
| ------- | ----------------------- | -------------------------- | ---------- |
| Airport | - Planes @Array[@Plane] | - isPlaneInAirport(@Plane) | - @Boolean |
| Plane   | - id @String            |                            |            |

Test - Check if the `Plane` object id matches with another in the `Planes` array.

```

```
| Objects | Properties              | Messages          | Output     |
| ------- | ----------------------- | ----------------- | ---------- |
| Weather | - Weather @String       | - checkWeather()  | - @Boolean |
| Airport | - Planes @Array[@Plane] | - takeOff(@Plane) | - @Void    |
| Plane   | - name @String          |                   |            |

Test - Given the `Weather` call the `checkWeather` function to not allow the `takeOff` function to execute and then check to see if the `Plane` object is still in the array.

| Objects | Properties              | Messages            | Output     |
| ------- | ----------------------- | ------------------- | ---------- |
| Weather | - Weather @String       | - checkWeather()    | - @Boolean |
| Airport | - Planes @Array[@Plane] | - landPlane(@Plane) | - @Void    |
| Plane   | - name @String          |                     |            |

Test - Given the `Weather` call the `checkWeather` function to not allow the `landPlane` function to execute and then check to see if the `Plane` object was added to the array.

| Objects | Properties              | Messages            | Output  |
| ------- | ----------------------- | ------------------- | ------- |
| airport | - name @String          | - landPlane(@Plane) | - @Void |
|         | - planes @Array[@Plane] |                     |         |
| Plane   | - airport(@String)      |                     |         |

Test - Check to see if the `landPlane` function adds the airport to the `Plane` object to see if that object exists in that particular airport.
```

## Reflections

Had I had the opportunity to start over again, there are numerous things I could have done better:
- After learning about the  Jasmine framework I would make use of that as it makes test driven development more convenient.
- Doing more thorough tests, and to improve the validation and edge cases with further testing.
- For this project to make testing robust I could have added randomisation and proper cleanup to the testing.
- Improve classes using private with getters and setters and other object oriented programming techniques.