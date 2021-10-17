# Test 1
As an air traffic controller
I want to instruct the airport to land a plane
So I can get passengers to a destination


| Objects     | Properties                             | Messages       | Output                |
| ----------- | ---------------------------------------| ---------------| ------------------    |
| Plane       | planeStatus @ string planeID @ integer | landPlane()    | airportStatus @string |
| Airport     | Plane @string                          | canPlaneLand() | boolean               |




# Test 2
As the system designer
I would like a default airport capacity that can be overridden as appropriate
So that the software can be used for many different airports

| Objects     | Properties                             | Messages                            | Output              |
| ----------- | ---------------------------------------|-------------------------------------| --------------------|
| Plane       | PlaneStatus @ string planeID @ integer | landPlane()                         | planeStatus @string |
| Airport     | numOfPlanes @ integer maxSize @integer | isAirportFull(), increaseCapacity() | boolean             |





# Test 3
As an air traffic controller
I want to prevent landing when the airport is full
To ensure safety


| Objects     | Properties                             | Messages                            | Output                |
| ----------- | ---------------------------------------|-------------------------------------| --------------------  |
| Plane       | planeStatus @ string planeID @ integer | landPlane()                         | airportStatus @string |
| Airport     | numOfPlanes @ integer maxSize @integer | isAirportFull(), canPlaneLand()     | boolean               |



# Test 4
As an air traffic controller
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
So I can get passengers on the way to their destination


| Objects     | Properties                                 | Messages                             | Output              |
| ----------- | -------------------------------------------|--------------------------------------| --------------------|
| Plane       | planeStatus @ string planeID @ integer     | takeOff()                            | planeStatus @string |
| Airport     | numOfPlanes @ integer planeStatus @string  | planeCanTakeOff() isPlaneInAirport() | boolean             |



# Test 5
As an air traffic controller
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
To avoid confusion

| Objects     | Properties                                 | Messages             | Output              |
| ----------- | -------------------------------------------|----------------------| --------------------|
| Plane       | planeStatus @ string planeID @ integer     | isPlaneIdInAirport() | planeStatus @string |
| Airport     | numOfPlanes @ integer planeStatus @string  | planeIdIsInAirport() | boolean             |





