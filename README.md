Airport Challenge (Outline can be found in AirportChallenge.md)
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

### Instructions
- Use `npm test` or `node specRunner.js` to execute tests.
- There is also `index.js` which can be run to see an example of randomised weather which will allow a plane to land if it is sunny or alert to a landing error if it is stormy.

### How I approached the project
- I converted each of the user stories into domain models, and planned out the tests I would write to enable TDD.
- I then wrote each of the user stories tests to fail and created production code to create passing tests.
- I also created an index.js to run an instance of randomised weather for the functionality outlined in the extended criteria.

### Reflections
Given more time I would like to:
- Clean up code - some of the airport.js code is too verbose and has too many parameters. Lint code.
- Refactor code so airport, weather and plane properties can be private.
- Greater defense against edge cases (e.g. different weather inputs).
- Write a larger index.js run more of the functionalities of the programme.
- Improved the error functionality so that the programme does not stop unless try&catch statements are implemented in index.js