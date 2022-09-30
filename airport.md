## Solution For the Airport Challange

1. Fork the Airport Challnge repo into your github Account
2. Clone into your local directory.
3. Open a Terminal and run the npm install command to download the dependencies.

## Domain Modelling

### User Story 1

1. As an air traffic controller
2. So I can get passengers to a destination
3. I want to instruct the airport to land a plane

**Domain Modelling for User Story 1**

As a Ait Traffic Controller
I want to land a plane to the Airport.

| **Object** | **Properties**                | **Message**        | **output** |
| ---------- | ----------------------------- | ------------------ | ---------- |
| Airport    | planesAtAirport@Array[@plane] | landPlane[@String] | @String    |

**Run the File**
Include the spec file to specRunner.js , and then run the code with node specRunner.js

## Domain Modelling

### User Story 2

1. As the system designer
2. So that the software can be used for many different airports
3. I would like a default airport capacity that can be overridden as appropriate

**Domain Modelling for User Story 2**

As a System Manager
I would like to override the airport capacity

| **Object** | **Properties**                | **Message**            | **output** |
| ---------- | ----------------------------- | ---------------------- | ---------- |
| Airport    | capacity[@int] const or final | overrideCapacity[@int] | @int       |

**Run the File**
Include the spec file to specRunner.js , and then run the code with node specRunner.js
