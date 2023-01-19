Airport Challenge

**User story 1**
--
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

--
Domain modelling:

| Objects   | Properties                | Messages          | Outputs |
| ----------| ------------------------- | ----------------- | ------- |
| plane     | id@string                 | getId()           | @string |
|           |                           |                   |         |
| airport   | Airport @plane[@Item]     |landPlane(@plane)  | @void   |


*Initial Thoughts*
1. Need airport
2. Need plane
3. Plane needs to land in the airport
4. The airport array should increase by 1 when the plane lands

Tests
1. landPlane should only add plane 'instances' to the airport array.
2. Airport array should increase by 1 when landPlane is called
3. Edge Case - falsy values should not be added the airport array.

----------------
**User story 2**
--



--
Domain modelling:





*Initial Thoughts*

1.
2.
3.

-----------------
**User story 3**
--



--
Domain modelling:





*Initial Thoughts*

1.
2.
3.

------------------
**User story 4**
--



--
Domain modelling:





*Initial Thoughts*

1.
2.
3.

----------------
**User story 5**
--



--
Domain modelling:





*Initial Thoughts*

1.
2.
3.