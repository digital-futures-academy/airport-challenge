## How to run the tests

Right click on the specRunner.js file in the Explorer pannel of VS Code and click Open in Integrated Terminal. In the the terminal type node specRunner.js and all tests will run.


## Domain Models and Tests

I treated each domain model seperately.

1.

```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```

| Objects | Properties                  | Messages          | Outputs  |
| ------  | --------------------------  | --------          | ------   |
| Airport | parkedPlanes @Array[@Plane] | landPlane(@Plane) | @string  |
| Plane   | planeId @number             | getId()           | @number  |

Reasoning: Two objects of Airport and Plane. landPlane() method proposed to add Plane objects to a parkedPlanes array (of Plane objects)
which signafies landed planes at an airport. Also gave Plane object a planeId property that returns a number that uniquely identifies a plane. lanePlane() method will use getId() method as string literal within a string return message that signifies which plane has landed. The planeId number will be set via a constructor.

2.

```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```

| Objects | Properties                 | Messages                    | Outputs|
| ------  | -------------------------- | --------                    | ------ |
| Airport | airportCapacity @number    | setAirportCapacity(@number) | @Void  |

Reasoning: Proposed an airportCapacity property for Aiport objects. This will have a default value set to it by the constructor for this class.
Proposed a setAirportCapacity() method that can allow the default value for the airportCapacity property to be overriden and assigned at the point of the method call on a given Airport object.

3.

```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```

| Objects | Properties                  | Messages                    | Outputs   |
| ------  | --------------------------  | --------                    | ------    |
| Airport | airportCapacity @number     | isAirportFull()             | @boolean  |
|         | parkedPlanes @Array[@Plane] | landPlane()                 | @string   | 
| Plane   |                             |                             |           |


Reasoning: Proposed an isAirportFull() method that returns a boolean value depending on if the length of the parkedPlanes array is equal to
the the value of airportCapacity for an instance of the Aiport of the class. Proposed a landedPlane() method that returns a string to 
signify that a plane can or cannot land depending on the result of the isAirportFull().

4.

```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```

| Objects | Properties                  | Messages                         | Outputs   |
| ------  | --------------------------  | --------                         | ------    |
| Airport | parkedPlanes @Array[@Plane] | takeOffPlane(planeId @number)    | @string   | 
| Plane   | planeId @number             | getID()                          | @number   |

Reasoning: Proposed a planeId property and getID() method for a Plane object that returns a number which represents a unique id each Plane object has. Proposed a takeOffPlane() method that takes planeId as a paramater. It searches for a specific plane with a matching id in the
parkedPlanes array and then pops it from the array. The takeOffPlane method also returns a string to signify the specific plane is no longer at
the airport by using the getID() method for the Plane object and using it for the message it returns via string. 

5.

```
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```

| Objects | Properties                  | Messages                         | Outputs   |
| ------  | --------------------------  | --------                         | ------    |
| Airport | parkedPlanes @Array[@Plane] | takeOffPlane(planeId @number)    | @string   | 
| Airport | parkedPlanes @Array[@Plane] | landPlane(@Plane)                | @string   |
| Airport | parkedPlanes @Array[@Plane] | isPlaneAtAirport(planeId @number)| @boolean  |
| Plane   | planeId @number            | getID()                           | @number   |

Reasoning: Proposed isPlaneAtAirport() method that checks if the specified plane given by it's planeId is at the airport or not by checking to see if a Plane object with a matching planeId value is within the parkedPlanes array, it will return a boolean value. The methods takeOffPlane() and landPlane will have implementation to denote that someone has tried to let a plane take-off which is not at the airport or land a plane that's already landed. This will be returned by a string.