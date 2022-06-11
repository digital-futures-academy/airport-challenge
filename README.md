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

# Domain Modelling 

## Acceptance Criteria

### Requirement 1


```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```

|     Object      |     Messages     |
|-----------------|------------------|
| airport         | landPlane(@plane)    |
| plane           |      |

Rationale 
- Objects: airport and planes are acting on each other so part of the system. Passengers and their destination do not affect the airport or plane so aren't part of the system and therefore don't need to be an object for this story. I don't think an air traffic controller object is needed in this instance as I am assuming they are part of the airport and this would start to add additional complexity. 
- Messages: the requirement relates to an airport instructing a plane to land so this is covered by the landPlane message. The message will accept a plane object as an argument to allow it to act on the plane via the message.

Expanded to:

|     Object      |     Properties  |     Messages               |    Output      |
|-----------------|-----------------|----------------------------|----------------|
| Airport         |                 |landPlane(@Plane) //tell the plane obj to land         |@string //success or failure message    |
| Plane           |state @string // eg. "flying" or "landed"  | land() //change the planes state to "landed"                     | @string // return success/failure message.               |

Added in some further details that I think are necessary:
- Plane.state to manage whether the plane is flying and allow it to have a concept of landing.
- Plane.land() as an internal message that Airport.landPlane() can call to make the plane land.
- Outputs are in addition to the main effect of the function to return some form of success or failure message.

This requirement only talks about one airport and one plane and I am therefore sticking to this model. Implications of future requirements are that there will be many planes. In that case an additional data structure to hold the available planes and an additional message to find the desired plane to land would be needed.
