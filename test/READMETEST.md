1. 
`User Story`
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

`Breakdown`
| Nouns      | Verbs      | 
| ---------- | -----------|
| Airport    |  Instruct  |
| Plane      |            |

`Domain Model`
| Objects | Properties                     | Messages             | Outputs |
| ------- | -------------------------------| ---------------------| ------- |
| Airport | planesAtAirport @Array[@Plane] | landPlane(@Plane)    | @Void   |
| Plane   |                                |                      |         |
==============================================================================
