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
Instructions and Explanation
----------------------------
```
Use specRunner.js file to run all tests for this project.
I followed TDD for every user story but as i moved on fourth user story i realized i have some boolean properties which are actually not needed so i went back on first user story and made changes in domain model and changed code accordingly
then i read all user stories again and made a lot of changes accordingly both in domain model and in code because some functions were doing same thing again so i merged them in same function with some changes.
May be i should have done it in new forked repo because domain models have been changed a lot of times but by the time i realized this it was too late to do every commit again.
But i am happy at end i think i am successful to have clean and single responsibility code with encapsulation and loosely coupled approach.
```

Acceptance criteria
-------------------

## 1st user story
```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```
### Domain Modeling

| Objects    |  Properties                         |     Messages                             | Output      |
|------------|-------------------------------------|------------------------------------------|-------------|
|airport     |planeObject@instanceOfPlaneClass     |landAPlane(Plane@Object)                  |             |
|            |#planesInAirport[@planesObjects]     |addPlaneInAirport(Plane@Object)           |             |
|plane       |planeID@number                       |                                          |             |
|            |                                     |                                          |             |

## 2nd user story
```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```
### Domain Modeling

| Objects    |  Properties        |     Messages   | Output      |
|------------|--------------------|----------------|-------------|
|airport     |airportID@number    |                |             |
|            |capacity@number     |                |             |
|            |                    |                |             |

## 3rd user story
```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```
### domain modeling
| Objects    |  Properties                         |     Messages             | Output      |
|------------|-------------------------------------|--------------------------|-------------|
|airport     |capacity@number                      |landAPlan(Plane@Object)   |             |
|            |#planesInAirport[@planesObjects]     |                          |             |
|            |                                     |                          |             |


## 4th user story
```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```
### domain modeling
| Objects    |  Properties                         |     Messages                         | Output        |
|------------|-------------------------------------|--------------------------------------|---------------|
|airport     |                                     |takeOffPlaneFromAirport(Plane@Object) |message@String |
|            |                                     |                                      |               |

## 5th user story
```
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```
### domain modeling
| Objects    |  Properties                         |     Messages                         | Output              |
|------------|-------------------------------------|--------------------------------------|---------------------|
|airport     |                                     |getPlanesInAirport()                  |Array[@PlaneObjects] |
|            |                                     |                                      |                     |
### explanation for user story five
```
 i think if traffic controller wants to prevent asking airport to land or take off plane when they already landed or taken off, traffic controller should be able to access the list of planes in airport so he can get know the planes in list cannot be landed again and planes not in list cannot be taken off
 ```

Extended Acceptance Criteria
----------------------------

## 1st user story
```
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy
```
### Domain modeling
| Objects    |  Properties                 |     Messages                                           | Output              |
|------------|-----------------------------|--------------------------------------------------------|---------------------|
|weather     |weather@String               |takeOffPlaneFromAirport(Plane@Object)                   |                     |
|            |                             |                                                        |                     |
## 2nd user story
```
As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy
```
### Domain modeling
| Objects    |  Properties                 |     Messages                     | Output              |
|------------|-----------------------------|----------------------------------|---------------------|
|weather     |weather@String               |landAPlan(Plane@Object)           |                     |
|            |                             |                                  |                     |
## 3rd user story
```
As an air traffic controller
To count planes easily
Planes that have landed must be at an airport
```


# classes
```
- there is **Airport** class for airports to store airportId, list of planes in airport and capacity of airport
-have one GETTER *getPlanesInAirport* for list of planes that returns the values of private(encapsulated) property planesInAirport
-also have four methods/functions other then constructor
-*addPlaneInAirport* this method adds planes in list of planes which is private property
-*checkIfPlaneCanAddedInList* this method is called when wants to add more planes in list but we don't want to add one plane multiple times in list so first it checks if list is empty if not then call *addPlaneInList* otherwise find plane already exist in list by iterating through list with loop if plane not found then call *addPlaneInList* method
-*takeOffPlaneFromAirport* this method iterate list of planes through loop to check the plane that needs to take off is still in airport or already take off.if it is in the list then it will delete that plane from list of planes to make sure it has take off and no more in airport
-*landAPlane* tells weather plane can land or no on basis of capacity and already landed planes if they equal means airport is full
- there is class **Plane** having planeID property
```
# files
## src files
- **airport.js** -- for *Airport* class
- **plane.js** -- for *Plane* class

## specRunner
- to store reference for all test files so we run all test one time

## test-framework
- to store assertEqual function to check tests