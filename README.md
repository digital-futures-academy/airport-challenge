Airport challenge
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

User stories
------------

#### Acceptance Criteria
```
1.
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

2.
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

3.
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

4.
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

5.
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```

#### Extended Acceptance Criteria
```
6.
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

7.
As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

8.
As an air traffic controller
To count planes easily
Planes that have landed must be at an airport
```

Domain models
-------------

1. Basic domain model features Plane objects and Airport objects, the Airport object contains an array for Planes and a method to land a Plane by pushing it onto the array

| Object  | Properties                 | Messages          | Outputs |
| ------- | -------------------------- | ----------------- | ------- |
| Plane   |                            |                   |         |
| Airport | landedPlanes@Array[@Plane] | landPlane(@Plane) | @Void   |

2. Second domain model features only the addition of a capacity member variable, which will be set by the constructor, and have a default value. I don't think the constructor itself needs to go in the domain model?

| Object              | Properties                                       | Messages                      | Outputs           |
| ------------------- | ------------------------------------------------ | ----------------------------- | ----------------- |
| Plane               |                                                  |                               |                   |
| Airport <br> &nbsp; | landedPlanes@Array[@Plane] <br> capacity@Integer | landPlane(@Plane) <br> &nbsp; | @Void <br> &nbsp; |

3. Third domain model has an isFull method which compares the length of the landedPlanes array to the capacity and prevents landing if it's not less than that

| Object              | Properties                                       | Messages                        | Outputs          |
| ------------------- | ------------------------------------------------ | ------------------------------- | ---------------- |
| Plane               |                                                  |                                 |                  |
| Airport <br> &nbsp; | landedPlanes@Array[@Plane] <br> capacity@Integer | landPlane(@Plane) <br> isFull() | @Void <br> @Bool |

4. Fourth domain model has a takeOff method to remove a plane from the landedPlanes array, and an isLanded method which checks whether a particular plane is landed or not (the idea being that after the plane has been removed, we can run isLanded on that plane to confirm it's gone).

| Object                                      | Properties                                                               | Messages                                                                   | Outputs                                |
| ------------------------------------------- | ------------------------------------------------------------------------ | -------------------------------------------------------------------------- | -------------------------------------- |
| Plane                                       |                                                                          |                                                                            |                                        |
| Airport <br> &nbsp; <br> &nbsp; <br> &nbsp; | landedPlanes@Array[@Plane] <br> capacity@Integer <br> &nbsp; <br> &nbsp; | landPlane(@Plane) <br> isFull() <br> takeOff(@Plane) <br> isLanded(@Plane) | @Void <br> @Bool <br> @Void <br> @Bool |

5. Fifth domain model now gives Plane an ID member and method to access it so we can be sure not to land a Plane that already exists at the airport (verified by matching Plane IDs). Plane object also now keep track themselves of whether they are landed or not

| Object                                      | Properties                                                               | Messages                                                                   | Outputs                                |
| ------------------------------------------- | ------------------------------------------------------------------------ | -------------------------------------------------------------------------- | -------------------------------------- |
| Plane <br> &nbsp;                           | id@String <br> landed@Bool                                               | id() <br> isLanded()                                                       | @String <br> @Bool                     |
| Airport <br> &nbsp; <br> &nbsp; <br> &nbsp; | landedPlanes@Array[@Plane] <br> capacity@Integer <br> &nbsp; <br> &nbsp; | landPlane(@Plane) <br> isFull() <br> takeOff(@Plane) <br> isLanded(@Plane) | @Void <br> @Bool <br> @Void <br> @Bool |

6. There is now a weather object, which contains a string detailing the weather (either sunny or stormy). The weather can be randomly set using the setWeather method, which uses a random number to pick sunny or stormy weather. The takeOff function now takes in a weather object and uses it to check whether the weather is sunny or stormy

| Object                                      | Properties                                                               | Messages                                                                             | Outputs                                |
| ------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | -------------------------------------- |
| Plane <br> &nbsp;                           | id@String <br> landed@Bool                                               | id() <br> isLanded                                                                   | @String <br> @Bool                     |
| Airport <br> &nbsp; <br> &nbsp; <br> &nbsp; | landedPlanes@Array[@Plane] <br> capacity@Integer <br> &nbsp; <br> &nbsp; | landPlane(@Plane) <br> isFull() <br> takeOff(@Plane, @Weather) <br> isLanded(@Plane) | @Void <br> @Bool <br> @Void <br> @Bool |
| Weather                                     | weather@String                                                           | getWeather()                                                                         | @String                                |

7. As before but now the landPlane function also checks the weather is sunny before allowing landing

| Object                                      | Properties                                                               | Messages                                                                                       | Outputs                                |
| ------------------------------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- | -------------------------------------- |
| Plane <br> &nbsp;                           | id@String <br> landed@Bool                                               | id() <br> isLanded()                                                                           | @String <br> @Bool                     |
| Airport <br> &nbsp; <br> &nbsp; <br> &nbsp; | landedPlanes@Array[@Plane] <br> capacity@Integer <br> &nbsp; <br> &nbsp; | landPlane(@Plane, @Weather) <br> isFull() <br> takeOff(@Plane, @Weather) <br> isLanded(@Plane) | @Void <br> @Bool <br> @Void <br> @Bool |
| Weather                                     | weather@String                                                           | getWeather()                                                                                   | @String                                |

8. Plane objects now keep track of which airport they are landed at, which will be null when they are not landed and will be modified by the takeOff and landPlane methods when taking off or landing

| Object                                      | Properties                                                               | Messages                                                                                       | Outputs                                |
| ------------------------------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- | -------------------------------------- |
| Plane <br> &nbsp; <br> &nbsp;               | id@String <br> landed@Bool <br> airport@Airport                          | id() <br> isLanded() <br> airport()                                                            | @String <br> @Bool <br> @Airport       |
| Airport <br> &nbsp; <br> &nbsp; <br> &nbsp; | landedPlanes@Array[@Plane] <br> capacity@Integer <br> &nbsp; <br> &nbsp; | landPlane(@Plane, @Weather) <br> isFull() <br> takeOff(@Plane, @Weather) <br> isLanded(@Plane) | @Void <br> @Bool <br> @Void <br> @Bool |
| Weather                                     | weather@String                                                           | getWeather()                                                                                   | @String                                |