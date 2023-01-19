# Airport Challenge

``````
         ______
        __\____\___
=  = ==(____DFA____)
           \_____\__________________,-~~~~~~~`-.._
          /     o o o o o o o o o o o o o o o o  |\_
          `~-.__       __..----..__                  )
                `---~~\___________/------------`````
                =  ===(_________)

``````

      ____________________________________________________________
     | Objects | Properties | Message                   | Outputs |
     |---------|------------|---------------------------|---------|
     | Airport | @Array of  | landPlan()                | @Void   |
     |         | planes     | airportCapacity()         | @Integer|
     |         | capacity   | airportCapacityIncrese()  | @Void   |
     |         |            | checkIfFullAirport()      | Boolean |
     |         |            | checIdPlaneInAirport()    | Boolean |
     |         |            | WeatherCondition()        |         |
     | Plane   |  id@str    |  getId()                  | @str    |
     |_________|____________|___________________________|_________|

Steps I follow :

1.  Break the story on pieces on the paper
2.  Create an Airport
3.  Create a Plane
4.  Land a Plane
5.  Crate Capacity
6.  Check the Capacity
7.  Prevent landing when full
8.  Raise the Capacity
9.  Take off a plane and alert the Airport
10. Chek if the plane is in the aiport
11. Create weather (stormy / sunny)
12. Chek the weather for landing
13. Check the weather for takiing off
14. Check if the planes that landed are at the airport

## Task

We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off. Here are the user stories that we worked out in collaboration with the client:

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
