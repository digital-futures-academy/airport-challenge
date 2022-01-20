My Approach
=================

User Story 1:
---------

#### Acceptance Criteria

As an air traffic controller;
So I can get passengers to a destination;
I want to instruct the airport to land a plane;


#### Nouns and verbs

| Noun                   | Verb     |
| ---------------------- | -------- |
| Air Traffic Controller | instruct |
| Airport                | land     |
| Plane                  |          |
| Passengers             |          |
| Destination            |          |


#### Acceptance Criteria - Elaborated
Before an airplane can land, there are two prerequisite requirements that first must be met:

- The specified airplane must be in the airport's airspace.
- The airport must have capacity.

These two requirements translate to the following acceptance criteria:
1) Attempting to land airplanes not in airspace should return string 'Landing unsuccessful; Airplane cannot be found in airspace'
2) Attempting to land a plane at an airport that is full will output 'Landing unsuccessful; Airport is full'


After the plane has landed we have three further acceptance criteria:
3) Air traffic controller is notified successful landing of airplane 'Landing successful; Airplane now at airport'
4) Array of airplanes at airport is updated to include landed airplane.
5) Array of airplanes in airspace is updated to remove landed airplane.


#### Domain Model

| Objects                | Properties | Messages                           | Output  |
| ---------------------- | ---------- | ---------------------------------- | ------- |
| Air Traffic Controller | -          | instruct(airport.land(tailNumber)) | @String |
| Plane                  | tailNumber |                                    | @String |
| Airport                | -          | land(tailNumber)                   | @String |
|                        | capacity   |                                    | @Number |
|                        | airspace   |                                    | @Array  |
|                        | airplanes  |                                    | @Array  |


User Story 2:
---------

#### Acceptance Criteria

As the system designer;
So that the software can be used for many different airports;
I would like a default airport capacity that can be overridden as appropriate;

#### Nouns and verbs

| Noun            | Verb     |
| --------------- | -------- |
| System Designer | override |
| Airports        |          |


#### Acceptance Criteria - Elaborated

1) Attempting to override capacity with anything other than integer value returns error message
2) Attempting to override capacity to a value lower than the number of airplanes already at airport returns error message
3) Attempting to override capacity with integer value > airplanes at airport returns success message 
4) Overriding capacity successfully changes the value of the capacity property

#### Domain Model

| Objects | Properties | Messages              | Output   |
| ------- | ---------- | --------------------- | -------- |
| Airport | capacity   | override(newCapacity) | @Integer |
|         | airplanes  | airplanes.length()    | @Number  |


User Story 3:
---------

Please note: User Story 3 has already been covered in the prerequisite acceptance criteria outlined in "User Story 1" section.

#### Acceptance Criteria

As an air traffic controller;
To ensure safety;
I want to prevent landing when the airport is full;

User Story 4: 
---------

As an air traffic controller;
So I can get passengers on the way to their destination;
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport;

#### Nouns and verbs

| Noun                   | Verb              |
| ---------------------- | ----------------- |
| Air Traffic Controller | instruct          |
| Airport                | take off, confirm |


#### Acceptance Criteria - Elaborated

1) Instructing a plane to take off when not included in array of airplanes at airport returns error message. 
2) Instructing a plane (that is already at airport) to take off will return 'Take off successful; plane is no longer in the airport'
3) After take off, the plane is removed from the array of planes at airport
4) After take off, the plane is added to airspace

#### Domain Model

| Objects                | Properties | Messages                              | Output  |
| ---------------------- | ---------- | ------------------------------------- | ------- |
| Air Traffic Controller |            | instruct(airport.takeoff(tailNumber)) | @String |
| Plane                  | tailNumber |                                       | @String |
| Airport                | -          | takeOff(tailNumber)                   | @String |
|                        | airplanes  |                                       | @Array  |
|                        | airspace   |                                       | @Array  |

User Story 5: 
---------

As an air traffic controller;
To avoid confusion;
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed;

#### Nouns and verbs

| Noun                   | Verb    |
| ---------------------- | ------- |
| Air Traffic Controller | prevent |
| Airport                | land    |
| Plane                  |         |



#### Acceptance Criteria - Elaborated

1) Instructing a plane to take off when not included in array of airplanes at airport returns error message. (Already covered in 'User Story 4')
2) Instructing a plane that has already landed to land will output error message. 

#### Domain Model (Acceptance criteria 2 only)


| Objects                | Properties | Messages         | Output  |
| ---------------------- | ---------- | ---------------- | ------- |
| Air Traffic Controller |            | prevent          | @String |
| Plane                  | tailNumber |                  | @String |
| Airport                | -          | land(tailNumber) | @String |
|                        | airplanes  |                  | @Array  |


Extended Acceptance Criteria: 
---------

As an air traffic controller;
To ensure safety;
I want to prevent takeoff when weather is stormy;

As an air traffic controller;
To ensure safety;
I want to prevent landing when weather is stormy;

As an air traffic controller;
To count planes easily;
Planes that have landed must be at an airport;

#### Nouns and verbs

| Noun                   | Verb    |
| ---------------------- | ------- |
| Air Traffic Controller | prevent |
| Airport                | takeoff |
| Weather                |         |

#### Acceptance Criteria - Elaborated

1) Attempting to take off in stormy weather outputs error message
2) Attempting to land in stormy weather outputs error message
3) When landing a plane, that plane gets pushed to the airplanes at airport array (Already covered in 'User Story 1' section.)

#### Domain Model 

| Objects                | Properties          | Messages                              | Output   |
| ---------------------- | ------------------- | ------------------------------------- | -------- |
| Air Traffic Controller | -                   | instruct(airport.takeOff(tailNumber)) | @String  |
|                        | -                   | instruct(airport.land(tailNumber))    | @String  |
| Plane                  | tailNumber          | -                                     | @String  |
| Airport                | -                   | takeOff(tailNumber)                   | @String  |
|                        | -                   | land(tailNumber)                      | -        |
|                        | randomWeatherToggle | -                                     | @Boolean |
| Weather                | -                   | isWeatherStormy()                     | @Boolean |


When testing for acceptance criteria 1) and 2), I created both a 'manualStorm' and 'randomWeatherToggle' for the purpose of testing only. Without a 'manualStorm' property, the occurrence of a storm would be random, meaning that the associated tests would also be pass randomly. As such, the manualStorm property allows us to create an instance of airport that always has a storm.

