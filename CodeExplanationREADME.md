## Read Me file to explain how the code should be run:

In the submission there a three Classes (Airport, Plane and Weather) which are located in the src folder and the corresponding tests are in the test folder. All tests are imported to the specRunner.js file and that can be run to see if the tests pass.

Starting with the Plane class, this class has two private properties (name (of the plane) and landed (boolean whether the plane is landed or in flight)). Tests have been done to see if the name is define when creating and instance and in the correct type (string), the landed status is initially false by default as Planes must be in an Airport when landed. Three methods are used in this class (getName(), isLanded(), changeLandingStatus()) which are hopefully self-explanatory :). 

The Weather class has a single private property called weather which is assigned to 1 of 5 possible string values randomly when a new instance of the Weather class is created. A single method is used called getForecast() which returns one of these values. For testing purposes, the random aspect of this code can be controlled by using getForecast(0) to return the value of 'Stormy'.

Finally the more complicated Airport class which has two properties (capacity (how many planes can be at the Airport, default value os 5) and planesArray (A list of the names of the planes)). Additionally, there are two methods landPlane() and takeOffPlane(). These will push/remove the name of the plane respectively and change its landing status, as long as the specified criteria are met (e.g can't land if already at the Airport and can't takeoff a plane that isn't in the airport). These method do require object arguments Plane and Weather.

An example how to run the code are given below:

# Example 1:
```js 

const airport1 = new Airport(capacity = 10);
const airplane1 = new Plane('Ed\'s Plane');
const weather = new Weather();

airport1.landPlane(airplane1, weather);

//If not stormy the plane will land and can recheck the weather and see if we can remove the plane

const newWeather = new Weather(); //
airport1.takeOffPlane(airplane1, newWeather)
```