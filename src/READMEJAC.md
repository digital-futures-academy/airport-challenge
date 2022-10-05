#### AIRPORT-CHALLENGE
```
DESCRIPTION

A programme, created by using test driven development, to control the movement of planes in and out of airports.
```
 <br />
As an air traffic controller  

So I can get passengers to a destination   
I want to instruct the airport to land a plane


| Objects | Properties                    | Messages           | Output  |
| ------- | ----------------------------- | ------------------ | ------- |
| airport | airportPlanes @ARRAY[@string] | land(plane@string) | @string |

1. Test that plane is added to an array - test array.length increases by 1.
2. Test that land returns a string that confirms the plane has landed.

 <br />
As the system designer  

So that the software can be used for many different airports  
I would like a default airport capacity that can be overridden as appropriate

| Objects | Properties                   | Messages             | Output |
| ------- | ---------------------------- | -------------------- | ------ |
| airport | capacity [@number]           | set default capacity | @void  |
| airport | increased capacity [@number] |                      |        |

1. Test that airport returns a default capacity.
2. Test that airport returns increased capacity.

 <br />
As an air traffic controller  

To ensure safety  
I want to prevent landing when the airport is full

| Objects | Properties           | Messages             | Output   |
| ------- | -------------------- | -------------------- | -------- |
| airport | airportPlanes @array | set default capacity | @number  |
|         | capacity [@number]   | checkIfFull()        | @boolean |
| airport | airportPlanes @array | airport full         | @string  |

1. Test whether airport is full.
2. Test whether plane can land.

 <br />
As an air traffic controller  

So I can get passengers on the way to their destination  
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

| Objects | Properties                    | Messages              | Output  |
| ------- | ----------------------------- | --------------------- | ------- |
| airport | airportPlanes @ARRAY[@string] | takeOff(plane@string) | @string |

1. Test that plane is removed from an array - test array.length decreases by 1.
2. Test that takeOff returns a string that confirms the plane has taken off.

 <br />

As an air traffic controller  
To avoid confusion  
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

| Objects | Properties                    | Messages          | Output   |
| ------- | ----------------------------- | ----------------- | -------- |
| airport | airportPlanes @ARRAY[@string] | conditional check | @boolean |

1. Test whether plane is already in the airport.
2. Test whether plane can take off / land.

```
#### Extended Acceptance Criteria

Note = these next two user stories have been tested in reverse order.
```

As an air traffic controller  
To ensure safety  
I want to prevent take off when weather is stormy

| Objects | Properties         | Messages         | Output   |
| ------- | ------------------ | ---------------- | -------- |
| weather | conditions @string | check conditions | @boolean |
|         |                    | denyTakeOff      | @string  |

1. Test that take off denied when weather is stormy.

 <br />
As an air traffic controller  

To ensure safety  
I want to prevent landing when weather is stormy

| Objects | Properties | Messages         | Output   |
| ------- | ---------- | ---------------- | -------- |
| weather | stormy     | check conditions | @boolean |
|         |            | deny Landing     | @string  |

1. Test that landing denied when weather is stormy.

 <br />
As an air traffic controller  

To count planes easily  
Planes that have landed must be at an airport

| Objects | Properties           | Messages             | Output  |
| ------- | -------------------- | -------------------- | ------- |
| airport | airportPlanes @array | airportPlanes.length | @number |
| airport | airportPlanes @array | airportPlanes.join   | @string |

1. Test that user can return number and list of planes in an airport