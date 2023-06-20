# Airport Challenge

``````
         ______
        __\____\___
=  = ==(____DFA____)
           \_____\__________________,-~~~~~~~`-.._
          /     o o o o o o o o o o o o o o o o  |\_
          `~-.__       __..----..__                  )
                `---~~\___________/------------`````
                =  ===(_________)

``````

## Instructions

1. Fork this repository and then:
```sh
$ git clone https://github.com/<YOUR GITHUB USERNAME>/airport-challenge.git && cd airport-challenge
$ npm install # installs dependencies listed in package.json
```
2. Run the tests from your project root directory. You can run your test suite in a few ways:
```sh
$ npm test
# or run jasmine directly
$ ./node_modules/jasmine/bin/jasmine.js
```
3. To see the project in action run:
```sh
$ node index.cjs
```
4. To lint you project run:
```sh
$ npm run lint
```

To fix linting issues run;
```sh
$ npm run lint:fix
```

## Task

We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off. Here are the user stories that we worked out in collaboration with the client:

#### Acceptance Criteria

```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```

#### Extended Acceptance Criteria

```
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

As an air traffic controller
To count planes easily
Planes that have landed must be at an airport
```

Your task is to test drive the creation of a set of classes/objects to satisfy all the above user stories. You will need to use a random number generator to set the weather (it is normally sunny but on rare occasions it may be stormy). In your tests, you'll need to stub random behaviour to ensure consistent test behaviour.

Your code should defend against [edge cases](http://programmers.stackexchange.com/questions/125587/what-are-the-difference-between-an-edge-case-a-corner-case-a-base-case-and-a-b) such as inconsistent states of the system ensuring that planes can only take off from airports they are in; planes that are already flying cannot take off and/or be in an airport; planes that are landed cannot land again and must be in an airport, etc.

## Domain Modelling and Tests

1.    _As an air traffic controller
      So I can get passengers to a destination
      I want to instruct the airport to land a plane_

      | Objects | Properties                          | Messages          | Outputs |
      | ------- | ----------------------------------- | ----------------- | ------- |
      | Airport | landedPlanes @Array[@Planes]        | landPlane(@Plane) | @Void   |
      | Plane   | aircraftId, aircraftStatus @String  |                   |         |

      ##### Tests
      
      - Returns an empty array for an empty airport;
      - Lands plane to airport using landPlane and expect array (landedPlanes) has increased in length by 1;
      - Test that plane passed to landPlane is actually added to the landedPlanes;
      - A plane without an id property does not land on the airport;
      - A plane without a status property does not land on the airport;
      - Throws an error when a plane with wrong status type attempts to land in the airport;
      - Throws an error when a plane with wrong id type attempts to land in the airport;
      - You are able to land airplane on an airport with existing planes;
      - Plane with id of null is not landing on the airport;
      - Plane status changes from `departed` to `landed` once the plane lands in the airport.

2.    _As the system designer
      So that the software can be used for many different airports
      I would like a default airport capacity that can be overridden as appropriate_

      | Objects | Properties                          | Messages                            | Outputs |
      | ------- | ----------------------------------- | ------------------------------------| ------- |
      | Airport | maxAirportCapacity @Integer         | overrideAirportCapacityBy(@Integer) | @Void   |

      ##### Tests
      
      - MaxAirportCapacity is 10 when the airport is first instantiated;
      - You are able to override maxAirportCapacity from 10 to 1500;
      - You are able to override maxAirportCapacity from 1500 to 1000.

3.    _As an air traffic controller
      To ensure safety
      I want to prevent landing when the airport is full_

      | Objects | Properties                          | Messages        | Outputs |
      | ------- | ----------------------------------- | ----------------| ------- |
      | Airport | landedPlanes @Array[@Planes]        | isAirportFull() | @Void   |
      |         | maxAirportCapacity @Integer          |                 |         |

      ##### Tests
      
      - IsAirportFull returns a boolean;
      - Informs airport is NOT full when 1 plane lands in airport with max capacity of 10;
      - Airport is full when airport is at max capacity;
      - You are not able to land a plane if the airport is full.

4.    _As an air traffic controller
      So I can get passengers on the way to their destination
      I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport_

      | Objects | Properties                         | Messages                                 | Outputs |
      | ------- | -----------------------------------| -----------------------------------------| ------- |
      | Airport | landedPlanes @Array [@Planes]      |  planeTakeOff(aircraftId @String) @Plane | @String |
      | Plane   | aircraftId, aircraftStatus @String |                                          |

      ##### Tests
      
      - Plane takes off using planeTakeOff and expect array (landedPlanes) has decreased in length by 1;
      - Confirms that the plane with id of G-XLEE took off with message: "G-XLEE took off from airport";
      - Tests that the plane that took off from the airport is the plane passed through planeTakeOff.

5.    _As an air traffic controller
      To avoid confusion
      I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed_

      | Objects  | Properties                         | Messages                                          | Outputs  |
      | -------- | -----------------------------------| --------------------------------------------------| -------- |
      | Airport  | landedPlanes @Array [@Planes]      | takeOffChecks(aircraftId), landPlaneChecks(@Plane)| @ Boolean
      
      ##### Tests

      - You are not able to take off a plane which is not at the airport;
      - You are not able to land a plane which is already at the airport;


 6.   _As an air traffic controller
      To ensure safety
      I want to prevent takeoff when weather is stormy_
      
      | Objects | Properties                  | Messages                                 | Outputs  |
      | ------- | ----------------------------|------------------------------------------|----------|
      | Airport |                             | isWeatherStormy(currentWeather) @Weather | @ Error  |
      | Airport |landedPlanes @Array [@Planes]| planeTakeOff(aircraftId)                 | @Void    |
      | Weather |                             | getCurrentWeather()                      | @String  |

      ##### Tests
      - Planes are not able to take off when the weather is stormy and expects length array of (landedPlanes) to be 1;

  7.  _As an air traffic controller
      To ensure safety
      I want to prevent landing when weather is stormy_

      | Objects | Properties                  | Messages                                 | Outputs |
      | ------- | ----------------------------|------------------------------------------|---------|
      | Airport |                             | isWeatherStormy(currentWeather) @Weather | @Error  |
      | Airport |landedPlanes @Array [@Planes]| landPlane(@Plane)                        | @String |
      | Weather |                             | getCurrentWeather()                      | @String |    
      
      ##### Tests

      - Planes land when the weather is clear and expects array of (landedPlanes) to increased in length to 1;
      - Planes are not allowed to land when the weather is stormy and expects length array of (landedPlanes) to be 0;
      - Throws an error when plane attempts to land in stormy weather.

  8.  _As an air traffic controller
      To count planes easily
      Planes that have landed must be at an airport_

      | Objects | Properties               | Messages                      | Outputs           |
      | ------- | -------------------------|-------------------------------|------------------ |
      | Airport |  airportName @String     | getLandedPlanes()             |@Array of @Planes  |
      | Plane   |  landedAtAirport @String |                               |                   |        
   
   ##### Tests

      - Planes that have a landed status are at an airport;