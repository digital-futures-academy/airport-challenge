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

Instructions
---------

* Feel free to use google, your notes, books, etc. but work on your own.
* Keep it SIMPLE - it's not nearly as complicated as it first may look.
* You must [submit your challenge](https://airtable.com/shrUGm2T8TYCFAmjN) by the deadline, wherever you get to.
* Use your own test framework and evidence your test-driven development by committing on passing tests.
* Please write your own README detailing how to install your project, how to run the tests, how you approached the problem and provide screenshots of interacting with your program.
* If you refer to the solution of another coach or student, please put a link to that in your README.
* Please create separate files for every class, module, and spec.

Steps
-------

1. Fork this repo, and clone to your local machine
2. `npm install` to install project dependencies
3. Convert stories into a representative domain model and test-drive your work.
4. Run your tests using `npm test` or `node specRunner.js`
5. [Lint](https://eslint.org/docs/user-guide/getting-started) your source code using `npx eslint src` - Optional but recommended!

Task
-----

We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off.  Here are the user stories that we worked out in collaboration with the client:

#### Acceptance Criteria
```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```

| Objects   | Properties                        | Messages                     | Output  |
| --------- | --------------------------------- | ---------------------------- | ------- |
| `airport` | `planesAtAirport` @ARRAY[@string] | `landPlane(plane` @string`)` | @string |

1. Test that plane is added to array (could test that length increases after call or that array includes plane received)
2. Test that `landPlane` returns a **string** that confirms the plane has landed 

--- 
```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```
| Objects   | Properties             | Messages                             | Output |
| --------- | ---------------------- | ------------------------------------ | ------ |
| `airport` | `capacity` @number = 5 | `setCapacity(newCapacity` @number`)` | N/A    |

1. Test that a default capacity is set to the default supplied when an airport is constructed
2. Test that capacity changes when setCapacity is called


```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```

| Objects   | Properties                        | Messages                     | Output   |
| --------- | --------------------------------- | ---------------------------- | -------- |
| `airport` | `capacity` @number = 5            | `getCapacity()`              | @number  |
| `airport` | `planesAtAirport` @ARRAY[@string] | `landPlane(plane` @string`)` | @string  |
| `airport` |                                   | `isAirportFull()`            | @boolean |

When should `isAirportFull()` return `true`?
- When the length of `planesAtAirport` is greater than or equal to `capacity`

```js
isAirportFull() {
      return planesAtAirport.length >= capacity;
}
```

Working on logic in the method `landPlane` that we have already started to develop.
Need to put a condition on whether the plane is added to the array or not:

In `landPlane(plane)`, if `isAirportFull()` returns `false` then land the plane (i.e perform the existing push).  If `isAirportFull()` returns `true` then return the message.

Need test(s) to check that this happens:

1. Test that if *length* of `planesAtAirport` is `>=` `capacity`, *plane* ***IS NOT*** added to the `planesAtAirport` array
2. Test that `landPlane` returns a **string** saying the airport is full if that is the case


### Fixtures
We need a FULL airport - make capacity 1 and land a plane
In Act, try and land another plane
Assert that: 
- planesAtAirport's length is still 1 (the capacity)
- string returned by landPlane contains FULL


```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```

| Objects   | Properties                        | Messages                        | Output  |
| --------- | --------------------------------- | ------------------------------- | ------- |
| `airport` | `planesAtAirport` @ARRAY[@string] | `takeOffPlane(plane` @string`)` | @string |

1. Test that plane is removed from the planesAtAirport array when passed to `takeOffPlane`
2. Test that `takeOffPlane` returns a **string** confirming that the plane has "taken off"

```
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```

| Objects   | Properties                        | Messages                            | Output   |
| --------- | --------------------------------- | ----------------------------------- | -------- |
| `airport` | `planesAtAirport` @ARRAY[@string] | `takeOffPlane(plane` @string`)`     | @string  |
|           |                                   | `landPlane(plane` @string`)`        | @string  |
|           |                                   | `isPlaneAtAirport(plane` @string`)` | @boolean |

1. Test that `isPlaneAtAirport` returns `true` when **plane** IS in the `planesAtAirport` array
2. Test that `isPlaneAtAirport` returns `false` when **plane** IS NOT in the `planesAtAirport` array
3. Test that `takeOffPlane` returns message saying **plane** has taken off if `isPlaneAtAirport` returned `true`
4. Test that `takeOffPlane` reduces `planesAtAirport` array by removing **plane** that has taken off if `isPlaneAtAirport` returned `true`
5. Test that `takeOffPlane` returns an appropriate **string** if `isPlaneAtAirport` returned `false`
6. Test that **length** of `planesAtAirport` is still same as before if `isPlaneAtAirport` returned `false`
7. Test that `landPlane` returns message saying **plane** has landed if `isPlaneAtAirport` returned `false`
8. Test that `landPlane` adds **plane** to `planesAtAirport` array if `isPlaneAtAirport` returned `false`
9. Test that `landPlane` returns message saying **plane** is already at airport if `isPlaneAtAirport` returned `true`
10. Test that `landPlane` does not add **plane** to `planesAtAirport` if `isPlaneAtAirport` returned `true`


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
