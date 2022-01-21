# Airport Challenge
=================


## 1. Domain Model

This table is a convergence of my user stories into my domain model:

| Object  | Properties                | Methods                      | Output           |
| ------- | ------------------------------- | --------------------------------------- | ---------------- |
| Airport | airStatus@boolean               | landPlane(airStatus)                    | @Boolean         |
|         | airportMaxCapacity@integer      | changeCapacity(airportMaxCapacity       | @Integer         |
|         | currentCapacity@integer         | preventLanding()                        | @Boolean         |
|         |                                 | allowTakeOff(airStatus, planesToLand)   | @Error           |
|         |                                 | lookForPlane()                          | @Boolean/ @error |
| ------- | ------------------------------- | --------------------------------------- | ---------------- |

## Test Framework guide

1.	Test Framework – This is where your assertEquals will always be which outlines generally what your test should be testing on a broader scope.

2.	Source code – where you create all the empty classes with the different functions that you’ll be testing. 

3.	Spec.js - This is where you’ll be creating the hypotheticals tests. Aka a new basket instance to check each function of a basket. A new entry instance to check the functions of the lock. 
You need to state:
1.	Import the test framework, 
2.	Import the class that you’ll be working with from the source code. 
3.	Create a test function with a random name (start with check to remind you what the test is doing).

4.	Create your Arrange, Setup, Report:
Arrange:
1.	Create the test instance of the class that will be tested.
2.	Define your expected value using ‘let expected =…’
Setup:
1.	Define the actual value that should be outputted when the test runs.

Report:
1.	In the report, you want to call the assertEquals function to test that your actual value and expected value are the same which will return a Boolean: 
2.	You should also console.log a string to tell us whether your test was completed e.g., `The item was added to the basket`.

5.	Finally, module.exports the test function so that it can be used in the runner.

4.	TestRunner.js – This is where you need to run your test. You should import the function using const and require. Then you should call the function using the function name and then brackets.


## Creating the test
To create the test, I started by creating a `src` folder and a `test` folder. This is where I stored the TDD files. In the `src` folder, I added an `airportSourceCode.js` file. In the test folder, I added the `Main.js` file; the `airport.spec.js` file; the `testFramework.js` file and lastly; the `testRunner.js` file.
