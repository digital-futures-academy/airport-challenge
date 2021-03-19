## User Stories to Domain Models

#### 1.
```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```

|Objects      | Properties | Messages      | Context     | Output      |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| Airport     | Method(string)|landPlane(plane)|Is the plane at the airport?     |  Array.length = 1    |
| Plane  |      Class   |   plane = New Plane   | Add this plane to airport |             |

#### 2.
```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```

|Objects      | Properties | Messages      | Context     | Output      |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| Airport     | Constructor(int)| get capacity()| Standard capacity = 40|  int  |
| | | | Has the capacity been changed? | int|
| Plane  |    |    |   |             |


#### 3.
```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```

|Objects      | Properties | Messages      | Context     | Output      |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| Airport     |  isFull = Boolean| landPlane(plane) |Check if airport is full before landing plane |  String |
| Plane  |    |    |   |             |


#### 4.
```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```

|Objects      | Properties | Messages    | Context     | Output      |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| Airport     |  Airport array| takeOff(plane) | Check that plane is no longer in airport|  Array |
| Plane  |    |    |   |             |

#### 5.
```
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```

|Objects      | Properties | Messages    | Context     | Output      |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| Airport     |  | takeOff(plane) | Check if plane is in the airport | String  |
| | | land(plane) | Check if plane has already landed| String|
| Plane  |    |    |   |             |
