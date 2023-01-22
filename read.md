As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

Domain Model

| Objects | Properties                   | Messages               | Outputs |
| ------- | ---------------------------- | ---------------------- | ------- |
| Airport | arrivedPlanes @Array[@Plane] | planesOnGround(@Plane) | @Void   |
|         |                              |                        |         |
