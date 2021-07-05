Airport Challenge
=================

```
         ______
        __\____\___
=  = ==(____OVDR___)
           \_____\__________________,-~~~~~~~`-.._
          /     o o o o o o o o o o o o o o o o  |\_
          `~-.__       __..----..__                  )
                `---~~\___________/------------`````
                =  ===(_________)

```
## Instructions

Running the tests can be done from anywhere in the file directory by running the command 'npm test' or by running the file with 'node specrunner.js' from the base file.

## Reflections

I believe for the most part that this project went smoothly. However, in order to improve these projects in the future I want to improve my knowledge and understanding of the domain model and TDD. As well as by improving my test implementation. 

Furthermore, I should have looked at the overall project and planned everything more. As I found that when I got to the last user story that I would be better of creating a class for the airplane as well as the airport. This meant that I had to change the implementation for the airport class to accommodate this change.

 
## User stories

```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```
|Object| Properties | Messages | Output
|--------|--------|--------|--------
|Airport|airPlane|canPlaneLand(@bool)|hasPlaneLanded: @string

```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```
|Object| Properties | Messages | Output
|--------|--------|--------|--------
|Airport|airPlane|canPlaneLand(@bool)|hasPlaneLanded: @string
||Capacity(@number)|setCapacity(@number)|currentCapacity(@number)

```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```
|Object| Properties | Messages | Output
|--------|--------|--------|--------
|Airport|airPlane|canPlaneLand(@bool)|hasPlaneLanded: @string
||maxCapacity(@number)|setCapacity(@number)|maxCapacity(@number)
||currentCapacity(@number)|isAirportFull(@bool)|#

```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```
|Object| Properties | Messages | Output
|--------|--------|--------|--------
|Airport|airPlane|canPlaneLand(@bool)|hasPlaneLanded: @string
||maxCapacity(@number)|setCapacity(@number)|maxCapacity: @number
||currentCapacity(@number)|isAirportFull(@bool)|
||planeStatus(@bool)|takeOff(@bool)|planeLocation: @string



```
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```

|Object| Properties | Messages | Output
|--------|--------|--------|--------
|Airport|maxCapacity(@number)|setCapacity(@number)|maxCapacity: @number
||currentCapacity(@number)|isAirportFull(@bool)|
||planeStatus(@bool)|takeOff(@bool)|planeLocation: @string
|Airplane|isPlaneInAir(@bool)|canPlaneLand(@bool)|hasPlaneLanded: @string|
|||setOff(@bool)|
|||land(@bool)|
