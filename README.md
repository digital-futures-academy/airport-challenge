
## To install the project: 

- fork the repository and clone to your local machine. You can do this by cloning typing 'git clone git@github.com:benclayton98/airport-challenge.git'
- run 'npm install' to install project dependencies

## To run tests: 

- either run 'node specreunner.js' or 'npm test'


## My approach:

I began by reading the user stories and creating a domain model from those. I then decided to write a failing test so that I could really understand the problem from a wider perspective before beginning to write source code and passing tests. I split the 5 acceptance criteria into 7 tests. I decided to try and keep the program simple by coding a single class containing 4 methods.   

There is a folder named 'Screenshot Evidence' containing screenshots of me interacting with my program after each failing and passing test.

## Domain Model

|Object|Properties|Message|Output|
|------|----------|-------|------|
|Airport| @Array  | Land()| @string|
|Plane | Capacity | TakeOff|@string|
|Capacity| @integer|isThere()|@boolean
|------|----------|isFull()|@string|
