## How to install this project
--------------------------------------
1. Fork this repo and clone your forked repo to your local machine
2. On your local machine, navigate to the repo that you cloned in Step1 and install dependencies using:
   ```
   $ npm install
   ```
3. You are now set-up and ready to go!

## How to run the tests
--------------------------------------
- Run tests using `npm test` or `node specRunner`

### **Acceptance Criteria**
--------------------------------------
**User Story 1**
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

**User Story 2**
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

**User Story 3**
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

**User Story 4**
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

**User Story 5**
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

### **Extended Criteria**

**User Story 6**
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

**User Story 7**
As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

**User Story 8**
As an air traffic controller
To count planes easily
Planes that have landed must be at an airport

### **Edge Cases**

**EdgeCase1**
Planes can only take off from airports they are in.

**EdgeCase2**
Planes that are already flying cannot be in an airport

## Domain Model - a first pass
--------------------------------------

| Objects     | Properties          | Messages      | Output                            |
| ----------- | ------------------- | ------------- | --------------------------------- |
| Destination |                     |               |                                   |
| Airport     | capacity@Int        | landPlane()   | "Please land plane X"@String      |
|             | parkingLot@Array    | isFull()      | "Unable to land"@String           |
|             |                     | takeOff()     | "Please take off, plane X"@String |
|             |                     | isAtAirport() | @Boolean                          |
| Plane       | isAtAirport@Boolean |               |                                   |
| Weather     | weather@String      | isStormy()    | @String                           |

This was the domain model that I came up with before I began to write the tests. 

## Domain Model - a second pass

  | Objects | Properties       | Methods               | Outputs         |
  | ------- | ---------------- | --------------------- | --------------- |
  | Plane   |                  | isAtAirport(@Airport) | @Boolean        |
  | Airport | parkingLot@Array | landPlane(@Plane)     | @String, @Array |
  |         | capacity@Int     | isFull()              | @Boolean        |
  |         | randomNum@Int    | takeOff(@Plane)       | @String, @Array |
  |         | weather@String   |                       |                 |

This was the domain model that I ended up following.

## How I approached the challenge
--------------------------------------

I first read through the user stories and came up with a rough domain model before starting to write my first test. Then I wrote one test for each user story. 

For user story 2, I made use of the Airport class constructor to allow the user to override the airport capacity.

For user story 5, I used two unit tests: one to ensure that already landed planes cannot land, and the other to ensure that planes not at the airport cannot take off. 

For user stories 6 and 7, I initally thought of creating a separate class to model the weather since there is no intuitive connection between airports and the weather. But then I realised that it would be simpler to model the weather as a property of the airport class. Although it seemed strange at first glance, I realised this was reasonable after all. This is because only the local weather at the same location as the airport will be relevant for determining whether a plane can land or take off. 

I also ran into a problem with isolating my unit tests, because the test for `landPlane()` had two failing conditions, namely, when either the weather is stormy or the plane that we're telling to land is already at the airport. This meant that my test for user story 1 would occasionally fail due to the weather being set to stormy. To fix this, I overrode the weather property within the test so that it would ignore the weather.

Another difficulty I faced was when I started writing the test case for user story 8. Unlike the previous tests, this one passed right off the bat. I realised that the reason was because my test for user story 1 already covered this test. I wrote the test for user story 1 in a way that modeled the `landPlane(plane)` method by adding the plane that was instructed to land to an array which modeled the capacity at an airport. This naturally ensured that all landed planes are at some airport. And so any code which passed the test for user story 1 would also pass the test for user story 8. But this was more than what user story 1 was looking for and TDD is all about writing the minimum code to pass a test. Yet this was precisely the mistake I had made - my test for user story 1 wasn't simple enough, it led me to write code that would pass test 1 and a test for another user story. 

Luckily, I was able to avert having to make significant changes. I deleted test 8 and refactored test 1 (the test for user story 1) and ensured that it would fail before writing code that passed test 1. Then I wrote a failing test 8 which actually turned out to be what I initially wrote for test 1. Finally, I refactored the source code so that test 8 was also passing.

My final step was to go through the main user stories and refactor them if needed and then to write some unit tests for the mentioned edge cases and check if I had adequately accounted for them.

I finished by tiding everything up and documenting my approach to the challenge in this README file.