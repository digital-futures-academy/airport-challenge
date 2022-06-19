*****USER STORY 1*****

    As an air traffic controller 
    So I can get passengers to a destination 
    I want to instruct the airport to land a plane


    -object | properties | messages | output -
    ------------------------------------------
    airport | planes@array[@plane] | planeLand(@plane) | @string
      plane | ID                   | getID             | @ID
   



---------------------------------------------------------------------------------------------------------------------

*****USER STORY 2*****

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate 

//Capacity might be object because, remember that your aim is to test that airport capacity can be changed essentially.

  -object | properties | messages | output -
    ------------------------------------------
    airport| capacity@number | changeCapacity() | @number
 
    
*****USER STORY 3***** // From here on i just started writing the domain models categorically like below, it just made more sense to me visually.

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

Class:
Airport
  Properties:
  capacity@number
    Message:
    PreventLanding(fullCapacity) //function
      Output:
      @number
      @string //"airport full/. do not land!"
  

*****USER STORY 4*****

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

Class:
Airport
  Properties;
  planes@array //list of planes at airport. then one plane will be subtracted from that list of planes
    Messages:
    planeFly()
      Output:
      @array
      
Plane
  properties;
  ID
    Messages:
    getID()
      Output:
      @ID

  // instead of making plane class you could just say plane as left airport, or you could make your plane class it would be good practice.


*****USER STORY 5*****

As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

//I cant make sense of this user story at all. 
//main questions you want to ask yourself:
  - is plane at airport yes or no?if not dont ask airport to take off, if yes i presume you ask airport to take off
  - is plane already landed? if yes, dont ask airport. if not, i presume you ask airport


Class:
Airport
  Properties:
  Planes@Array
    Messages:
    preventAsk()
      Output:
      @array
      @string






