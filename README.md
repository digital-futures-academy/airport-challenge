Airport Challenge
=================

```
         ______
        __\____\___
=  = ==(____DFA____)
           \_____\__________________,-~~~~~~~`-.._
          /     o o o o o o o o o o o o o o o o  |\_
          `~-.__       __..----..__                  )
                `---~~\___________/------------`````
                =  ===(_________)

```
This is a simple simulation of an air traffic control system, implemented in JavaScript. The system includes models for planes, airports, and weather conditions.

-------

#### Installation
1. Clone this repository by running the following command in your terminal:
  ```git clone https://github.com/ace18zz/airport-challenge.git```

2. Navigate into the project directory:
  ``` cd airport-challenge```
3. Install the necessary dependencies:
  ``` npm install```
4. Install Jasmine globally if you haven't done so already:
  ``` npm install -g jasmine ```
#### Tests
This project uses Jasmine for testing. You can run the tests with the following command:
  ```npm test```

#### Domain Model
```

|  Objects   |  Properties                  |   Messages                        |  Output  |
| ---------- | ---------------------------- | --------------------------------  | -------- |
|  Plane     | @plane_id	            | land(@Airport), take_off(@Airport)| @void    |
|            | @current_location	    |                                   |          |
|            | @status (in_air/landed)      |                                   |          |
 -------------------------------- -------------------------------- -------------------------
|  Airport   | @name	                    | land_plane(@Plane)                | @void    |
|            | @airport_capacity	    | takeoff_plane(@Plane)             |          |
|            | @current_planes[]            | is_full()                         |          |
 -------------------------------- -------------------------------- -------------------------
|  Weather   | @weather_condition           | check_weather()                   | @String  |
