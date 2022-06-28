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

| noun  | verb        |
| ----- | ----------- |
|Airport| Land        |
|Plane  |             |
|       |             |
|       |             |

---

| Objects   | Properties                        | Messages                     | Output  |
| --------- | --------------------------------- | ---------------------------- | ------- |
| `airport` | `planesAtAirport` @ARRAY[@string] | `landPlane(plane` @string`)` | @string |

1.Test that plane is added to array (could test that legnth increases after call or that array includes plane received)
2.Test that landPlane returns a string that confirms the plane has landed 

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

| Objects   | Properties             | Messages                             | Output |
| --------- | ---------------------- | ------------------------------------ | ------ |
| `airport` | `capacity` @number = 5 | `setCapacity(newCapacity` @number`)` | N/A    |

1. Test that a default capacity is set to the default supplied when an airport is constructed
2. Test that capacity changes when setCapacity is called


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



#### Monaires TDD Planning 

As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

| noun            | verb             |
| -----           | -----------      |
|                 |                  |
| Airport         | Instruct -needs register         |
| Plane           | Land             |
|                 |                  |

### Domain Model 
| Objects  | Properties     | Messages         | Output        |
| -------  | ---------------| ---------------- | --------      |
| Airplane |PlaneID         |                  | Id@string     |
|          |                |                  |               |
| Airport  |PlaneList@Array | landPlane()      |@Boolean       |  
|          |                | planelanded()    |@stringarray   |
|          |                |                  |               |

-Airport needs to store a list of planes 
-Plane needs to land 
# TDD

Failing test - but what for?

**Airport** test the function of `arePlanesLanded` and get an array of planes to make sure that the planes have arrived at the airport 

**Plane** test a newly created `plane` and display an `planeID`



### Conclusions
// In the plane class-perhaps a id class could have also worked because it might have helped give a single responsibility just to the id?.
//I struggled to get the first plane test to pass so I did whatever I could to make it pass 
// I had to change a few things to make the test pass such as adding functions that were neither in my TDD or my ODD. This is because I found that doing three tests for one user story was too much. 






                    
                  
                    
