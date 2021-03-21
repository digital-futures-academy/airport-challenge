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

