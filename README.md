Airport Challenge
=================

How to install
--------------
You can install this project by cloning the repository using the git clone command in your terminal followed by git@github.com:hanna-98/airport-challenge.git

How to run the tests
--------------------
To run the tests, run node specRunner or npm test in your terminal. Create new instances of Airport to run the tests independently of each other. For example, in test case 5, we instruct plane 2 to land and we see it has already landed because in test case 3 we instructed the airport to land planes 1, 2 and 3.

Approach
--------
My approach to this challenge was to extract the requirements of the user from the user stories provided and create a domain model to map out the foundations of the testing process. I created one class (Airport()) with three methods (land(), takeOff() and override()) that would carry out the users' requirements. 

**Instructing the airport to land planes A, B and C:**
![screenshot](screenshots/Screenshot%202021-03-21%20at%2009.52.14.png)

**Instructing the airport to let plane B take off and confirming it has left:**
![screenshot](screenshots/Screenshot%202021-03-21%20at%2009.58.02.png)

**Trying to land a plane that is already at the airport:**
![screenshot](screenshots/Screenshot%202021-03-21%20at%2009.58.51.png)

**Instructing the airport to let plane B take off when it has already left:**
![screenshot](screenshots/Screenshot%202021-03-21%20at%2010.00.30.png)

**Overriding airport capacity to be 2 and trying to land a third plane:**
![screenshot](screenshots/Screenshot%202021-03-21%20at%2010.04.35.png)
