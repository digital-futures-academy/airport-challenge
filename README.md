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
* Please write your own README detailing how to install your project, how to run the tests, how you approached the problem and provide screenshots of interacting with your program.
* Please create separate files for every class, module, and spec.

-First user story:
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

Domain model:
Objects          Properties                          Messages               Output
Airport          airportPlanes @Array[@Planes]       landPlane(@Plane)      @Void
Plane            id 

Test 1: Checking that the airport can land a plane using landPlane 

======================
-Second user story:
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

Domain model:
Objects          Properties                   Messages                         Output
Airport          airportCapacity @integer     overrideCapacity(@NewCapacity)   NewCapacity@integer
NewCapacity      @integer

Test 2: Checking that the airport default capacity is overridden when using overrideCapacity, it is expected to have increased to 12

======================
-Third user story:
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

Domain model:
Objects          Properties                          Messages          Output
Airport          airportCapacity @integer            isFull()          @boolean
                 landedPlanes @array(@planes)

Test 3: Checking that airport is full once the airportCapacity has been reached, it is expected to return a boolean

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
Airport          landedPlanes @Array[@PlanesID]     checkIfPlaneInArray(@boolean)   AlreadyAtAirportCannotLand @String
Plane            id                                                                 NotAtAirportCannotTakeOff @String

Test 5: Checking that planes at airport can't land and planes not at airport can't take off

======================
-First extended criteria:
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

Domain model:
Objects          Properties                          Messages               Output
Airport          airportPlanes @Array[@Planes]       landPlane(@plane)      CannotTakeOff @String
                 weather @Boolean
Plane            

Test 6: Checking that planes can't take off, using TakeOffPlane

======================
-Second extended criteria:
As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

Domain model:
Objects          Properties                          Messages               Output
Airport          airportPlanes @Array[@Planes]       landPlane(@plane)      CannotLand @String
                 weather @boolean
Plane            

Test 7: Checking that planes can't land when stormy, using landPlane

======================
-Third extended criteria:
As an air traffic controller
To count planes easily
Planes that have landed must be at an airport

Domain model:
Objects          Properties                          Messages               Output
Airport          airportPlanes @Array[@Planes]                              @Void
Plane            id @DavidJustice                   isAtAirport @Boolean

Test 8: Checking that planes that have landed are within airport object, expect boolean to return true


Steps
-------

2. `npm install` to install project dependencies
3. Convert stories into a representative domain model and test-drive your work.
4. Run your tests using `npm test` or `node specRunner.js`
5. OPTIONAL: [Lint](https://eslint.org/docs/user-guide/getting-started) your source code using `npx eslint src`.
