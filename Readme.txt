To install the project: fork the repository and clone to your local machine; 
run 'npm install' to install project dependencies

To run tests: either run 'node specreunner.js' or 'npm test'

I approached the problem by working through the given user stories in order first by writing a failing test 
to test for the expected outcome and then by writing source code so that the test passes by the code performing 
the correct operation to produce the expected outcome. I started simple by writing methods that simply allowed for
a plane to land, takeoff and to change the airport capacity. These methods then became more complex as further 
requirements were added including those to stop planes landning at a full airport, stop planes landing that are
already landed, planes taking off that haven't landed, and to add in the random weather condition. 