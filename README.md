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
* Please write your own README detailing how to install your project, how to run the tests, how you approached the problem and provide screenshots of interacting with your program.
* Please create separate files for every class, module, and spec.

First user story:
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

Domain model:
Objects           Properties                          Messages               Output
Airport           airportPlanes @Array[@Planes]       landPlane(@Plane)      @String
Plane             plane @String

Test 1: Instruct the airport to land a plane using landPlane and expect to display suitable message


Steps
-------

2. `npm install` to install project dependencies
3. Convert stories into a representative domain model and test-drive your work.
4. Run your tests using `npm test` or `node specRunner.js`
5. OPTIONAL: [Lint](https://eslint.org/docs/user-guide/getting-started) your source code using `npx eslint src`.
