1. first test requires that a basic addPlane() funuction is created to add an object to the airport array. as is regular with all tests an airport instance is created and plane object is created. capacity is set to 1, and an expected of 1 is set because we expect to add one plane to the airport array. the real result is the instance airport array length
i import a testing framework and use the AssertEquals function to compare the expected result and real result to pass (this testing framework technique is used for all tests)

2. Second test requires a default value to Capacity be added, this allows us to enter a Capacity value to the airport instance without having to redeclare Capacity. if a value is not given a default of 0 is set.

the same testing style follows. a Capacity of 3 is set in the instance; an expected of 3 is set; three planes are landed and the result represents airport length. this shows that the capacity has been expanded to three if three planes are found in the array.

3. Third test requires an increase capacity function is made. this has the same process as test 2, however prior to instructions we increase aiport capacity with the increase capacity function after setting a default capacity.

4. fourth test requires a fail condition be added to the addPlane function. a capacity of two is set. A number of planes are added to the airport with an expected condition of true, and actual condition of the add function applied to the airport. if successful a message plus "true" will be the result of the fail condition. 

5. fifth test requires a removePlane function be made. an airport Capacity of 2 is set and 1 planes are added and 1 is removed. the expected result is "true", and the actual result is the remove function aplied to the airport instance. if successful a message plus "true" will be a result of the remove condition.

6. sixth test requires fail condition for the adding a plane already in an airport. capacity of 3 is set and two of the same planes are added. the expected result is "true", and actual is the result of the function upon the instance object. if successful a message plus "true" will be the result of the fail condition

7. seventh test requires a fail condition be made to prevent asking the airport to let planes take-off which are not at the airport. cpacity of 3 was set and a plane was added. the expected result is "true", and actual is the result of the remove function upon the instance object with a plane that has not been previously added. if successful a message plus "true" will be a result of the fail condition.


|| Object ||  Properties     || Message            || Output        ||
||        ||                 ||                    ||               ||
|| Airport||  airport@Array  || AddPlane(IsFull()) || @Boolean      ||
||        ||                 || RemovePlane()      || @Boolean      ||
||        ||                 || IsFull()           || @int          ||
||        ||   Capacity@int  || IncreaseCapacity() || @Boolean      ||

||Plane   || id@int          ||                                       
