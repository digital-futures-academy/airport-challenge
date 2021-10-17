Luke Stratta - Airport Challenge
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
How to install the project and run the tests
-------

1. Fork this repo, and clone to your local machine
2. Open your terminal and type `npm install` to install project dependencies
3. 'cd' into the top of the project folder
5. Run your tests by typing `npm test` into your terminal (alternatively, 'cd' into "utils" and run `node specRunner.js`)

How I approached the problem
-------

Using test-driven development, I developed a series of tests that covered all of the acceptance (and extended) criteria from the user stories. I think thought about edge cases where these tests could be caught out if values weren't what they should be, but the test thought the information was correct. I then worked through the acceptance criteria, building code based only on what the test required.

Screenshots of my code in action
-----
Here are a couple of images showing the test code calling the `weather.generateWeather()` function and the code in the Weather.js class file that generates the weather.

<img width="659" alt="Screenshot 2021-10-17 at 22 09 59" src="https://user-images.githubusercontent.com/91621852/137645141-8febc72c-e46e-4975-9ef7-42a5d9a9278b.png">

<img width="298" alt="Screenshot 2021-10-17 at 21 52 39" src="https://user-images.githubusercontent.com/91621852/137644574-39bebda4-ddae-4484-9d83-ddb17dde44b4.png">

Here is the test passing and test failing, with a pass rates of about 20%. 

PLEASE NOTE: For purposes of demostrating `test.xit()` in action in my code, test 13 will be SKIPPED in the source code.
If you would like to include the test in your test runs, please change `test.xit` to `test.it` on like 320 in the Airport.spec.js file.

<img width="448" alt="Screenshot 2021-10-17 at 22 02 44" src="https://user-images.githubusercontent.com/91621852/137644895-6fbff9d7-147c-435f-a8be-33edf0357425.png">

<img width="454" alt="Screenshot 2021-10-17 at 22 02 50" src="https://user-images.githubusercontent.com/91621852/137644897-79d6eda6-376d-4502-bcbf-2efb00b11d48.png">


What I could improve on
----
1. If this was a real-world project, I would ask more questions to the client, such as; Do they want to know what planes are in the air at all times? This would help refine the user stories and provide a more accurate final product.
2. I think my code would benefit from refactoring, in certain areas. There are a couple lines of repeated code (not many!) and the if-else statements are bit wild. With more time and experience, I will be able to research alternatives to these problems and be able to make the code more readable and overall effective.


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


