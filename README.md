Airport Challenge
=================
How To Use Run This Application.

* Fork this repo, and clone to your local machine.
* Run the command `npm install` to install dependencies.
* cd into airport-challenge.
* To run test npm test .

Reason For This Challenge
-------------------------
IS to learn test driven development

Reflections
------------
* I learnt the importance of test driven development and creating failing test.
* this challenge can can be improved by making the code loosely coupled 
* Test using jasmine, to unite test

Task
-----

We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off.  Here are the user stories that we worked out in collaboration with the client:

#### Acceptance Criteria
```
## Domain Models 

### User story one 

As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

| Objects | Properties                     | Messages                | Output  |
| ------- | ------------------------------ | ----------------------- | ------- |
| airport | planesAtAirport@ARRAY[@string] | landPlane(plane@string) | @string |

### User story two

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

| Objects | Properties        | Messages | Output                           |
| ------- | ----------------- | -------- | -------------------------------- |
| airport | capacity@number=5 |          | setCapacity(newCapacity @number) | n/a |
|         |                   |          |                                  |

### User story three

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

Objects	Properties	Messages	Output

airport
	
capacity@number=5	
setCapacity(newCapacity @number)	
n/a
airport
	planesAtAirport@ARRAY[@string]	landplane(plane@string)	@string


### User story four

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

Objects	Properties	Messages	Output

airport
	
capacity@number=5	
setCapacity(newCapacity @number)	
n/a
airport
	planesAtAirport@ARRAY[@string]	landplane(plane@string)	@string


Objects	Properties	Messages	Output

airport
	
planesAtAirport@ARRAY[@string]	
takeOffPlane(plane@string)	
@string


### User story five

As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

Objects	Properties	Messages	Output

airport	
takeOffPlane(plane@string)		
@string
	landplane(plane @string)		@string
	isPlaneAtAirport(plane@string)		@boolean

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

