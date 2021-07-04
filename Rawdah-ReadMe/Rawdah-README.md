1. How to install Project:

- $ git clone git@github.com:rawdah123/airport-challenge.git
- npm install

2. How to run tests:
- node specRunner.js
- or npm test

3. Approach I carried out:

In this airport challenge, for each user story I have:
- Produced a domain model to envision what my src code will output.
- In the Airport.spec.js file I have written tests using the Setup, Execute and Verify method. 
- I have written the code in the src to make these tests pass.

Domain Models:
User story 1:

As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

object | 	properties | 	messages	       |   output
------------------------------------------------------------
Airport	|	           |  airport.land(plane)  | @array plane
-------------------------------------------------------------
Plane	|		        |                       @boolean
 ------------------------------------------------------------                        
         
User story 2:

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate


object  	properties  	messages	     output
------------------------------------------------------
Airport		capacity@int    setCapacity()    int
--------------------------------------------------------
                           
User story 3:
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full


object  	properties  	              messages	         output
------------------------------------------------------------------------------------------
Airport		if plane.length>=capacity    airport.land(plane)   boolean true
-------------------------------------------------------------------------------------------
             isFull                                          @String "sorry airport is full"
--------------------------------------------------------------------------------------------     

User story 4
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

object  	properties  	              messages	         output
------------------------------------------------------------------------------------------
Airport		if plane.length>=capacity    takeOff(plane)     @boolean true
-------------------------------------------------------------------------------------------
            plane included = false                           @String "plane is not here!"
--------------------------------------------------------------------------------------------  


Usery story 5

As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed


object  	properties  	   messages	         output
------------------------------------------------------------------------------------------------
Airport		                   land()           @String "Plane has already landed at the airport"
------------------------------------------------------------------------------------------------
            
                                          
         		
Test Code Layout
--------------------------------------------------------
console.log("Testing User story 1: Airport lands plane");

// Set Up
let airport = new Airport();
let plane = new Plane();

//Execute
airport.land(plane);

// Verify
console.log(assertEquals(airport.planes.length, 1));
--------------------------------------------------------


===========================================
Testing User story 1: Airport lands plane
true
=============================================
