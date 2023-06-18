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
    1. Test that plane id is set correctly in the constructor. - Test done
    2. Test that airportPlanes array has size one when you land a plane in an empty airport. - Test Done
    3. Test that you cannot land a plane with the same id. - Test Done


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
    1. Test to verify that when you create an airport object without specifying capacity, it uses the specified capacity. - Test Done
    2. Test to override the default capacity - test where you create a new airport object and set a custom capacity. Assert that the airport will use that capacity instead of the default one.- Test Done
    3. Test valid capacity values, for example the minimum capacity an airport should have should be at least equal to number of landed planes. - Test done


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

    1. Test that airportPlanes array does not increase in value when you try to land one more plane. - Test Done


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

    1. Test that airportPlanes array has decreased by one when a plane takes off. - Test Done
    2. Test that plane's departure is confirmed by checking its status. - Test Done
    3. Test that you cannot instruct a plane to take off when there are 0 planes in the airport. - Test Done
    4. Test that you cannot instruct a plane to take off if its id is not in the airportPlanes array. - Test Done


##### User Story 5:

> As an air traffic controller
> I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed.
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

    1. Test that you cannot land a plane that's already landed. - This was dealt with previously in --user story 1, test 3--
    2. Test that you cannot take-off a plane that's not in the airport anymore. - This was dealt with in --user story 4, test 4--


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
|                   | weather @String               | weatherStatus(@weather)            | @String       |

**Tests**

    1. Test that you cannot take-off a plane when weather is stormy/bad and as a result you get an error message. - Test Done


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
|                   | weather @String               | weatherStatus(@weather)            | @String       |

**Tests**

    1. Test that you cannot land a plane when weather is stormy/bad and as a result you get an error message. - 


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


