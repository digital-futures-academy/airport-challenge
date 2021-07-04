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

Made sure to create a spec class specificall for my Plane objects. In the test I simply attempt to create a plane object and the passing condition checks if the object created has the correct property set to it. With the test created I then wrote some source code to pass the test:

![PlaneSrc](https://github.com/Neokrieger/airport-challenge/tree/main/CodeSnippets/PlaneSrc.png)

Simple piece that will allow me to create a Plane object with a string property for its name and a landed property that will be used later to determine if the plane is currently landed.

With my plane class ready, I repeated this process to create source code for my airport class:

![PlaneSrc](https://github.com/Neokrieger/airport-challenge/tree/main/CodeSnippets/AirportTest.png)

I first created a test which creates a new airport as well as a plane. I call a function called land(@plane) that I have yet to create in my source code. This function should add the plane specified in the parameters. Then the test condition checks if an array located within my airport class contains the correct object.

With the tests ready I began to write some source code within the airport class to pass the tests:

![PlaneSrc](https://github.com/Neokrieger/airport-challenge/tree/main/CodeSnippets/AirportTest.src)

The class does not require much to pass the tests at this stage. I added a constructor with no paramters which creates an array of port that will hold the plane objects. I then created the land(@plane) method which adds the specified plane object to the array.

Once all the tests were passed, I continued creating new tests based on the domain model and then tried to pass the by writing source code. This process was repeated until step by step a suitable program was created which tries to accomplish all user requirements.

To describe the end product, I will go over what the land(@plane) method ended up as at the end of the process:

![PlaneSrc](https://github.com/Neokrieger/airport-challenge/tree/main/CodeSnippets/LandSrc.src)

The land method still takes in a plane objects at this stage though it goes through a number of conditionals before deciding that it should add the object to the array. First the method checks whether the plane trying to land has already landed somewhere else or whether the airport is at maximum capacity. In both cases an appropriate message is logged and the attempt to add the object is cancled. At the next step the method checks if the plane is already present at the port. While writing this I actually noticed that I no longer need this piece of source code written for an earlier test because a later test has made it so that each plane object keeps track of whether it is already landed somewhere or not. Since you cant land in two places simultaniously, the plane being landed would usually mean that it cannnot be present at the current airport. Following this I check if the weather condition and avoid landing the plane in stormy conditions, again giving an appropriate message to the user. Once these conditionals were passed, I add the plane to the port array, give a message that the process was successful, set the planes state as landed and increase the number that keeps track of how many planes have been landed in that airport. 
