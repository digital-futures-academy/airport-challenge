The Airport Challenge
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

To install the Airport challenge files, fork  the repository from github onto your account. 

Proceed to clone it onto your local machine using whatever programme you typically use (I have used VS Code).

I have used the jasmine test framework to form and run tests for this challenge, to run tests use the terinal to input npm test. This will run the inlaid tests found in Airport.spec.js file.

In order to meet this challenge I broke down each user story to the bare bones and created tests that would do the bare minimum in order to not complicate the code. 

I added in notes as well as made a file of potential code that was created and scrapped. This was due to the code being unneeded, too complex or not fully formed. 

The task criteria was:
------------------------
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


With a extended criteria of:
---------------------------
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy