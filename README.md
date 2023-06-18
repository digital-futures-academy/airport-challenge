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

Steps
-------

1. Fork this repo, and clone to your local machine
2. `npm install` to install project dependencies
3. Convert stories into a representative domain model and test-drive your work.
4. Run your tests using `npm test` or `node specRunner.js`
5. OPTIONAL: [Lint](https://eslint.org/docs/user-guide/getting-started) your source code using `npx eslint src`.


#### Domain Model
```

|  Objects   |  Properties                  |   Messages                        |  Output  |
| ---------- | ---------------------------- | --------------------------------  | -------- |
|  Plane     | @plane_id	              | land(@Airport), take_off(@Airport)| @void    |
|            | @current_location		  |                                   |          |
|            | @status (in_air/landed)      |                                   |          |
 -------------------------------- -------------------------------- -------------------------
|  Airport   | @name	                    | land_plane(@Plane)                | @void    |
|            | @airport_capacity	        | takeoff_plane(@Plane)             |          |
|            | @current_planes[]            | is_full()                         |          |
 -------------------------------- -------------------------------- -------------------------
|  Weather   | @weather_condition           | check_weather()                   | @String  |
