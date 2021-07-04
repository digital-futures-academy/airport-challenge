## Part 1
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

|Objects|Properties| Messages| Output|
|---| --- | ---| --- |
| Air Traffic Controller |weather @ String| queryTakeOff(plane, airport,weather)| |
| | |queryLanded(plane, airport,weather)| |
| Plane | name @ String | | |
| | flyingStatus @ String | | | 
|Airport | planes @ array | land(@ plane) | @ String |  
| |capacity @ number | changeCapacity(@ number)| @ String|
| | |takeOff(@ plane [@planes])| @String|
| |name @ String| | |

I have assigned a weather property to the Air Traffic Controller class to monitor the weather. This is passes as a parameter to the queryTakeOff() and queryLanding() methods. The weather tag may be set to either 'fine' or 'stormy'. Both query methods check if the weather is stormy and do not allow the plane flying status tags to be changed when this the condition is true. 

Another flyingStatus tag `'landing'` is introduced to modify the land method to only allow planes with the landing tag to land at an airport. 

## Part 2
```
As an air traffic controller
To count planes easily
Planes that have landed must be at an airport
```