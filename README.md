# Challenge submission

## Project installation and run tests

Should be able to set up the project by doing npm install while located in the challenge directory. From there you can run the tests by doing node specRunner.js in order to run the specRunner file.

## Approach

First step of my approach was to createa simple test framework that compares 2 values similar to the one we used in exercises during our first week. From there I tried to come up with a suitable domain model and ended up with the following:

ADD MODEL

This gave me a solid overview of the sort of properties and methods that I would need to create in order to convert the user requirements into code.

From there I began the process of creating a useful test case in compliance with my domain model and then write source code to pass the test case. Once passed I would move on to creating a new test case and this process was repeated until the project fulfilled the full user requirements.

At the start I thought to myself that alongside the Airport class, I would also like to have a plane class that allows me to create instances of planes that I can store in an airport. Step 1 was to create some test requirements that would work for such a plane class:

![PlaneTest](https://github.com/Neokrieger/airport-challenge/tree/main/CodeSnippets/PlaneTest.png)