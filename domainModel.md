Airport Challenge - Domain Modelling
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


#### Acceptance Criteria & Modelling
```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```

| Object | Properties | Message | Output |
| ----------- | ----------- | ----------- | ----------- |
| Airport | planesAtAirport @Array[@string]| landPlane(@plane) | @void|

1. Test that a plane is added to the airport array (i.e length increases).

```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```

| Object | Properties | Message | Output |
| ----------- | ----------- | ----------- | ----------- |
| Airport | capacity @number| setCapacity(newCapacity @number) | @void|

2. Ensure that default capacity is set within the constructor and then test that setCapacity changes when it is called.