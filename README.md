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

Steps
-------

1. To run this programme clone the files to your own local repository.
2. Install dependencies with npm install.
3. The test are ran using Jasmine. To run the tests enter the spec directory and use npx jasmine <filename> (i.e. npx jasmine airport.spec.js)

(Note: only some of the extended criteria has been implemented)

Task
-----
```
For context, these are the user stories that have been implemented within the programme:
```

#### Acceptance Criteria
```
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
```

#### Extended Acceptance Criteria
```
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

As an air traffic controller
To count planes easily
Planes that have landed must be at an airport
```

Domain Model
-------

| Object | Properties | Message | Output | Completed |
| ------ | ---------- | ------- | ------ | --------- |
| Airport | airport[array] | | integar | ✅ 
| | |land(plane) | .push [array] | ✅ |
| | | remove(plane) | .splice [array] | ✅ |
| airportCapacity | full(integar) | airportCapacity | (>= array length) string | ✅ |
| | changeCapacity | changeCapacity | string | ✅ 
| countPlanes | [array] | countPlanes | [array] length | ✅ 
 weather | boolean | isStormy | true/false | ✅ 
 | | | | land/remove(plane) | ❌ |
