### Airport Challenge READ ME File

This file will contain the domain models for the user stories as well as any other details related to the airport challenge.



##### User Story 1:

> As an air traffic controller
> I want to instruct the airport to land a plane
> So I can get passengers to a destination

###### Domain Model User Story No. 1 

| Objects           | Properties                    | Message           | Output        |
| ----------------- | ----------------------------- | ----------------- | ------------- |
| Airport           | airportPlanes @Array[@Planes] | land(@Plane)      | @Void         |
| Plane             | id @Number                    | getId()           | @Number       |

**Tests**
    1. Test that plane id is set correctly in the constructor.
    2. Test that airportPlanes array has size one when you land a plane in an empty airport.
    3. Test that the airport is calling the airport's land() method.


##### User Story 2:

> As the system designer
> I would like a default airport capacity that can be overridden as appropriate
> So that the software can be used for many different airports

###### Domain Model User Story No. 2:

| Objects           | Properties                    | Message           | Output        |
| ----------------- | ----------------------------- | ----------------- | ------------- |
| Airport           | airportPlanes @Array[@Planes] | land(@Plane)      | @Void         |
|                   | airportCapacity(@integer)     | getCapacity()     | @Number       |
| Plane             | id @Number                    | getId()           | @Number       |

**Tests**

    1. Test that you can modify airportCapacity.
    2. Test that airport capacity cannot be smaller than the default capacity/another variable which represents the minimum capacity does not necessarily need to be the default value. (I believe there should be a minimum capacity each airport should have to qualify as an airport, at least one for example).
    3. Test that airport calls airport's getCapacity() method.


##### User Story 3:

> As an air traffic controller
> I want to prevent landing when the airport is full
> To ensure safety

###### Domain Model User Story No. 3:

| Objects           | Properties                    | Message                            | Output        |
| ----------------- | ----------------------------- | ---------------------------------- | ------------- |
| Airport           | airportPlanes @Array[@Planes] | land(@Plane)                       | @Void         |
|                   | airportCapacity(@integer)     | getCapacity()                      | @Number       |
|                   |                               | airportIsFull()                    | @Boolean      |
| Plane             | id @Number                    | getId()                            | @Number       |

**Tests**

    1. Test that airport capacity remains at it's maximum when you try to land one more plane.
    2. 


##### User Story 4:

> As an air traffic controller
> I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
> So I can get passengers on the way to their destination

###### Domain Model User Story No. 4:

| Objects           | Properties                    | Message                            | Output        |
| ----------------- | ----------------------------- | ---------------------------------- | ------------- |
| Airport           | airportPlanes @Array[@Planes] | land(@Plane)                       | @Void         |
|                   | airportCapacity(@integer)     | getCapacity()                      | @Number       |
|                   |                               | airportIsFull()                    | @Boolean      |
|                   |                               | takeOff(@Plane)                    | @Void         |
|                   |                               | isPlaneAtAirport(@Plane)           | @Boolean      |
| Plane             | id @Number                    | getId()                            | @Number       |

**Tests**

    1. Test that airport calls airport's takeOff() method.
    2. Test that airportPlanes array has decreased by one when a plane takes off.


##### User Story 5:

> As an air traffic controller
> I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
> To avoid confusion

###### Domain Model User Story No. 5:

| Objects           | Properties                    | Message                            | Output        |
| ----------------- | ----------------------------- | ---------------------------------- | ------------- |
| Airport           | airportPlanes @Array[@Planes] | land(@Plane)                       | @Void         |
|                   | airportCapacity(@integer)     | getCapacity()                      | @Number       |
|                   |                               | airportIsFull()                    | @Boolean      |
|                   |                               | takeOff(@Plane)                    | @Void         |
|                   |                               | isPlaneAtAirport(@Plane)           | @Boolean      |
| Plane             | id @Number                    | getId()                            | @Number       |

**Tests**

    1. Think about this


##### User Story 6:

> As an air traffic controller
> I want to prevent takeoff when weather is stormy
> To ensure safety

###### Domain Model User Story No. 6:

| Objects           | Properties                    | Message                            | Output        |
| ----------------- | ----------------------------- | ---------------------------------- | ------------- |
| Airport           | airportPlanes @Array[@Planes] | land(@Plane)                       | @Void         |
|                   | airportCapacity(@integer)     | getCapacity()                      | @Number       |
|                   |                               | airportIsFull()                    | @Boolean      |
|                   |                               | takeOff(@Plane)                    | @Void         |
|                   |                               | isPlaneAtAirport(@Plane)           | @Boolean      |
| Plane             | id @Number                    | getId()                            | @Number       |
|                   | weather @String               | isStormy(@weather)                 | @Boolean      |

**Tests**

    1. Test if array stays the same if weather isStormy() method is true.
    2. 


##### User Story 7:

> As an air traffic controller
> I want to prevent landing when weather is stormy
> To ensure safety

###### Domain Model User Story No. 7:

| Objects           | Properties                    | Message                            | Output        |
| ----------------- | ----------------------------- | ---------------------------------- | ------------- |
| Airport           | airportPlanes @Array[@Planes] | land(@Plane)                       | @Void         |
|                   | airportCapacity(@integer)     | getCapacity()                      | @Number       |
|                   |                               | airportIsFull()                    | @Boolean      |
|                   |                               | takeOff(@Plane)                    | @Void         |
|                   |                               | isPlaneAtAirport(@Plane)           | @Boolean      |
|                   |                               | prevent(@weather)                  | @Boolean      |
| Plane             | id @Number                    | getId()                            | @Number       |
|                   | weather @String               | isStormy(@weather)                 | @Boolean      |

**Tests**

    1. Think about this


##### User Story 8:

> As an air traffic controller
> Planes that have landed must be at an airport
> To count planes easily

###### Domain Model User Story No. 8:

| Objects           | Properties                    | Message                            | Output        |
| ----------------- | ----------------------------- | ---------------------------------- | ------------- |
| Airport           | airportPlanes @Array[@Planes] | land(@Plane)                       | @Void         |
|                   | airportCapacity(@integer)     | getCapacity()                      | @Number       |
|                   |                               | airportIsFull()                    | @Boolean      |
|                   |                               | takeOff(@Plane)                    | @Void         |
|                   |                               | isPlaneAtAirport(@Plane)           | @Boolean      |
|                   |                               | prevent(@weather)                  | @Boolean      |
| Plane             | id @Number                    | getId()                            | @Number       |
|                   | weather @String               | isStormy(@weather)                 | @Boolean      |

**Tests**

Length of array changes as planes land and take off so its length should be enough to check how many planes there are without the need to add a count method() - so if the other methods work correctly (and these are checked in previous tests) there is no need to do a further test. Moreover the complexity of the property length is O(1) - we cannot make it more efficient than this.


