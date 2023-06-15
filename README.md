Airport Challenge
=================

                                    ______
                                    __\____\___
                              =  = ==(____DFA____)
                                    \_____\__________________,-~~~~~~~`-.._
                                    /     o o o o o o o o o o o o o o o o  |\_
                                    `~-.__       __..----..__                  )
                                          `---~~\___________/------------`````
                                          =  ===(_________)


* Please fork this repo and clone to your local machine.
* Please use `node specRunner.js` to test the files.

-First user story:
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

Domain model:
Objects          Properties                          Messages               Output
Airport          landedPlanes @Array[@Planes]        landPlane(@Plane)      @Void
Plane            id 

Test 1: Checking that the airport can land a plane using landPlane 

======================
-Second user story:
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

Domain model:
Objects          Properties                   Messages                         Output
Airport          airportCapacity @integer     overrideCapacity(@NewCapacity)   @Void
NewCapacity      @integer

Test 2: Checking that the airport default capacity is overridden when inserting a number using overrideCapacity

======================
-Third user story:
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

Domain model:
Objects          Properties                          Messages                 Output
Airport          airportCapacity @integer            isFull()                 @boolean
                 landedPlanes @array(@planes)        landPlane(@Plane)        @Void
Plane            id    

Test 3: Checking that airport is full once the airportCapacity has been reached, and that no planes can land when isFull()

======================
-Fourth user story:
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

Domain model:
Objects          Properties                          Messages                   Output
Airport          landedPlanes @array[@Planes]       planeTakeOff(@Plane)        @Void
Plane            id

Test 4: Checking that a plane can take off from the airport, using planeTakeOff

======================
-Fifth user story:
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

Domain model:
Objects          Properties                          Messages                       Output
Airport          landedPlanes @array[@planes]        isAtAirport(@boolean)          @Void
                                                     landPlane(@Plane)              @Void
                                                     planeTakeOff(@Plane)           @Void
Plane            id                                                                 

Test 5: Checking that planes at the airport cannot land, and that planes not at the airport cannot take off

======================
-First extended criteria:
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

Domain model:
Objects          Properties                    Messages               Output
Airport          weather @Integer              isStormy (@boolean)    @Void
                                               planeTakeOff(@plane)   @Void
Plane            id

Test 6: Checking that planes cannot take off when it isStormy()

======================
-Second extended criteria:
As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

Domain model:
Objects          Properties                    Messages               Output
Airport          weather @Integer              isStormy (@boolean)    @Void
                                               landPlane(@plane)      @Void
Plane            id            

Test 7: Checking that planes cannot land when it isStormy()

======================
-Third extended criteria:
As an air traffic controller
To count planes easily
Planes that have landed must be at an airport

Domain model:
Objects          Properties                        Messages                   Output
Airport          landedPlanes @Array[@Planes]     isAtAirport @boolean       @Void
Plane            id                     

Test 8: Checking that planes that have landed are stored in the landedPlanes array
