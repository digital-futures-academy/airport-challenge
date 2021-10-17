Airport Challenge

INTRODUCTION

This challenge is to use own test framework and evidence test-driven development of an Airport control traffic system.

HOW TO INSTALL THE PROJECT

Please use these commands in your terminal to install the project

$ git clone https://github.com/christine-banda/airport-challenge.git

npm install

HOW TO RUN THE TESTS

Please use these commands in your terminal to rn the tests

npm test or node specRunner.js

HOW I APPROACHED THE PROBLEM

I approached the problem by identifying Objects, messages and outputs from the user stories and created the Domain Model for each user story.
I then created a test framework for the tests from user story one and wrote the tests. 

I then wrote code to pass the failing tests.

TEST EXAMPLE

User Story 1

As an air traffic controller
I want to instruct the airport to land a plane
So I can get passengers to a destination
			

| Objects | Properties    | Message/functions/methods | Output         |
| ------- | ------------- | ------------------------- | -------------- |
| Plane   | name @String  | -name()                   | @String        |
| Airport | planes @array | -landPlane(plane)         | @Array[@Plane] |

TEST CODE


