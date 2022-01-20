Guide
=================

Note: Please find my approach to airport challenge in the 'my-approach' markdown file. 

Installation:
---------

To install the project, you must:\

1. Fork the repo
2. Clone the repo
3. Go through following steps:

#### Steps

1. Before we can instruct a plane to do something, we must first create our airport instance

An 'Airport' has four properties:

| Property            | Type     | Description                         |
| ------------------- | -------- | ----------------------------------- |
| capacity            | @Integer | Number of planes airport can hold   |
| airspace            | @Array   | Planes in airport's airspace        |
| airplanesAtAirport  | @Array   | Planes already at airport           |
| randomWeatherToggle | @Boolean | Generates a random chance of storms |

Go to user/user-file.js and change the values of the aforementioned values accordingly. It's important to use the correct values for each parameter, otherwise the project is designed to throw an error message. Also, it is required that you set a capacity greater than the number of airplanesAtAirport, otherwise the project will display an error message. 

2. Performing an action:
   
To take off, land or override, we must first decide our desired plane or capacity.\

In the user-file, change the values of 'tailNumber' and 'newCapacity' to your desired inputs. 

3. Run the user-file

Once you have successfully completed steps 1) and 2), open the integrated terminal and enter 'node user-file'. 


Tests
---------

To run the tests, assuming you have forked and cloned the repo, you must:\

1. Open integrated terminal in specRunner
2. Enter 'node specRunner' in terminal
3. The terminal will produce test results



