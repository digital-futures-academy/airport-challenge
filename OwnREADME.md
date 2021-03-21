How to Run Programme

 -Fork this repo, and clone to your local machine
 -npm install to install project dependencies
 
 Programme Behavious

 -There are 3 classes in programme (Airport,Plane,Weather) - although user should only need to use/view Airport and Plane (classes need "requiring" if running programme)

  -To make an Airport named airportname call new Airport('airportname') 
 e.g let heathrow = new Airport('heathrow')

 -To make a Plane name planename call new Plane('planename') 
 e.g let concorde = new Plane('concorde')

 Class Properties - Airport - (heathrow used as example)
    call heathrow.planeList to see an array of the planes currently landed at heathrow

    call heathrow.airportCapacity to see the current capacity of planes at heathrow (the capacity can be changed by calling heathrow.changeCapacity(input) - where input is the new number of planes you wish the capacity to be)

    call heathrow.storminess to see the storminess of weather at heathrow on a scale of 1-20 (a value of 10+ prevents take off and landing at an airport - value can be overridden by calling heathrow.storminess = number if you wish to play God and alter the weather!)

    Plane - (concorde used as example)
    call concorde.isPlaneLanded to see if a plane is landed at an airport or not (true means at airport, false is not at airport)
        
    call concorde.planeIsLandedHere to see which Airport a plane is landed - 'Nowhere' will be returned if plane is not landed

 -To land a Plane into an Airport call airportname.landPlane(planename) 
 e.g to land concorde at heathrow call heathrow.landPlane(planename)
 This call may be rejected if a) the weather is too dangerous
 b) Said plane has already landed at an Airport
 c) Airport capacity is full
 All these scenarios will return an informative string showing reason for refusal

 -To take off a Plane from an Airport call airportname.takeOffPlane(planename)
 e.g to take off concorde from heathrow call heathrow.takeOffPlane(concorde)
 This call may be rejected if a) the weather is too dangerous
 b) this Plane is not landed at specified Airport
 All these scenarios will return an informative string showing reason for refusal


 To run test suite simply run
   node.specRunner.js


My Domain Model for Task

| Object | Properties | Message | Output |
| :------------: |:---------------:| :-----:| :------: |
| Aiport | Land Plane | landPlane() | array,boolean,string |
| Aiport | Planes in Airport | this.planeList | array |
| Aiport | Airport Capacity | this.airportCapacity | number |
| Aiport | Change Capacity | changeCapacity() | number |
| Aiport | Prevent Landing | if statement in landPlane() | string |
| Aiport | Take Off Plane | takeOffPlane()| array,boolean,string |
| Aiport | Don't Land if Landed | if statement in landPlane() | string |
| Aiport | Don't Take Off if not there | if statement in takeOffPlane() | string |
| Plane | Plane's landed status| this.isPlaneLanded | boolean |
| Plane | Where is plane landed | this.planeIsLandedHere | string |

Extension elements

| Object | Properties | Message | Output |
| :------------: |:---------------:| :-----:| :------: |
| Aiport | Prevent Take Off if stormy | if statement in takeOffPlane() | string |
| Aiport | Prevent Landing if stormy | if statement in landPlane() | string |
| Weather | Weather scale for storminess | this.storminess | number |
| Aiport | Specific weather.storminess for each airport | this.storminess | number |



