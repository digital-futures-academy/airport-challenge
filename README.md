# Welcome to the Airport Challenge!

This Javascript program simulates common features associated with an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off. A random number generator is used to set the weather in the matching spec file.


                                    ______
                                    __\____\___
                              =  = ==(____DFA____)
                                    \_____\__________________,-~~~~~~~`-.._
                                    /     o o o o o o o o o o o o o o o o  |\_
                                    `~-.__       __..----..__                  )
                                          `---~~\___________/------------`````
                                          =  ===(_________)


## How to use

In order to run this program, please clone the repository to your local machine.
Make sure you have node.js installed and type `node specRunner.js` in your terminal to run the spec files, which will test the file containing the production code.

## User stories and domain models

* First user story:
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```
Domain model:
Objects          Properties                     Messages               Output
Airport          landedPlanes @Array[@Planes]   landPlane(@Plane)      @Void
Plane            id 
```
Test 1: Checking that the airport can land a plane using landPlane 

* Second user story:
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

``` 
Domain model:
Objects          Properties                   Messages                         Output
Airport          airportCapacity @integer     overrideCapacity(@NewCapacity)   @Void
NewCapacity      @integer
```
Test 2: Checking that the airport default capacity is overridden when inserting a number using overrideCapacity

* Third user story:
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

```
Domain model:
Objects          Properties                          Messages                 Output
Airport          airportCapacity @integer            isFull()                 @boolean
                 landedPlanes @array(@planes)        landPlane(@Plane)        @Void
Plane            id    
``` 
Test 3: Checking that airport is full once the airportCapacity has been reached, and that no planes can land when isFull()

* Fourth user story:
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

```
Domain model:
Objects          Properties                          Messages                   Output
Airport          landedPlanes @array[@Planes]       planeTakeOff(@Plane)        @Void
Plane            id
```
Test 4: Checking that a plane can take off from the airport, using planeTakeOff

* Fifth user story:
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

```
Domain model:
Objects          Properties                          Messages                       Output
Airport          landedPlanes @array[@planes]        isAtAirport(@boolean)          @Void
                                                     landPlane(@Plane)              @Void
                                                     planeTakeOff(@Plane)           @Void
Plane            id                                                                 
```
Test 5: Checking that planes at the airport cannot land, and that planes not at the airport cannot take off

* Sixth user story (extended criteria 1):
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

```
Domain model:
Objects          Properties                    Messages               Output
Airport          weather @Integer              isStormy (@boolean)    @Void
                                               planeTakeOff(@plane)   @Void
Plane            id
```
Test 6: Checking that planes cannot take off when it isStormy()

* Seventh user story (extended criteria 2):
As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy
```
Domain model:
Objects          Properties                    Messages               Output
Airport          weather @Integer              isStormy (@boolean)    @Void
                                               landPlane(@plane)      @Void
Plane            id            
```
Test 7: Checking that planes cannot land when it isStormy()

* Eighth user story (extended criteria 3):
As an air traffic controller
To count planes easily
Planes that have landed must be at an airport

```
Domain model:
Objects          Properties                        Messages                   Output
Airport          landedPlanes @Array[@Planes]     isAtAirport @boolean       @Void
Plane            id                     
```
Test 8: Checking that planes that have landed are stored in the landedPlanes array
