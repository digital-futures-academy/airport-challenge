# Part I. How to Install and Run
 Clone this repo to your local machine
 ```
 git clone https://github.com/byJingLu/airport-challenge.git
 ```
 Go to test folders
 ```
 cd test
 ```
 Run file `specRunner.js`
 ```
 node specRunner.js
 ```
 

# Part II. Procedure
## Step1. Domain Modeling
### Acceptance Criteria
![](/image/DomainModel1.png)
### Extended Acceptance Criteria
![](/image/DomainModel2.png)
## Step2. Test Driven Develop Procedure
### Acceptance Criteria 1:
Test Case:
```
Test 1 - Land plane1 to empty airport => 1
```
Test Passed:
```
% node landPlane.spec.js
----------------------
Test 1 - Land plane1 to empty airport => 1
Test 1 Plane1 landed to the airport => 1 is true
```
### Acceptance Criteria 2:
Test Case:
```
Test 1 - Override capasity of airport to 50 => 50
```
Test Passed:
```
% node overrideCapacity.spec.js
----------------------
Test 1 - Override capasity of airport to 50 => 50
Test 1 Override capasity of airport to 50 => 50 is true
```
### Acceptance Criteria 3:
Test Cases:
```
Test 1 - Airport's capacity is 2 and have 2 plane => True
Test 2 - Airport's capacity is 20 and have 2 plane => False
```
Test Passed:
```
% node isAirportFull.spec.js
----------------------
Test 1 - Airport's capacity is 2 and have 2 plane => True
Test 1 - Airport's capacity is 2 and have 2 plane => True is true
----------------------
Test 2 - Airport's capacity is 20 and have 2 plane => False
Test 2 - Airport's capacity is 20 and have 2 plane => False is true
```
### Acceptance Criteria 4:
Test Cases:
```
Test 1 - Plane1 take off from Airport['plane1', 'plane2', 'plane3'] => ['plane2', 'plane3']
Test 2 - Plane2 take off from Airport['plane1', 'plane2', 'plane3'] => ['plane1', 'plane3']
```
Test Passed:
```
% node takeOffPlane.spec.js
----------------------
Test 1 - Plane1 take off from Airport['plane1', 'plane2', 'plane3'] => ['plane2', 'plane3']
Test 1 - Plane1 take off from Airport['plane1', 'plane2', 'plane3'] => ['plane2', 'plane3'] is true
----------------------
Test 2 - Plane2 take off from Airport['plane1', 'plane2', 'plane3'] => ['plane1', 'plane3']
Test 2 - Plane2 take off from Airport['plane1', 'plane2', 'plane3'] => ['plane1', 'plane3'] is true
```
### Acceptance Criteria 5:
Test Cases:
```
Test 1 - Plane3 take off from Airport['plane1', 'plane2'] => False
Test 2 - Plane1 take off from Airport['plane1', 'plane2'] => True
Test 3 - Plane1 land to Airport['plane1', 'plane2'] => False
Test 4 - Plane3 land to Airport['plane1', 'plane2'] => True
```
Test Passed:
```
% node checkPlane.spec.js
----------------------
Test 1 - Plane3 take off from Airport['plane1', 'plane2'] => False
Test 1 - Plane3 take off from Airport['plane1', 'plane2'] => False is true
----------------------
Test 2 - Plane1 take off from Airport['plane1', 'plane2'] => True
Test 2 - Plane1 take off from Airport['plane1', 'plane2'] => True is true
----------------------
Test 3 - Plane1 land to Airport['plane1', 'plane2'] => False
Test 3 - Plane1 land to Airport['plane1', 'plane2'] => False is true
----------------------
Test 4 - Plane3 land to Airport['plane1', 'plane2'] => True
Test 4 - Plane3 land to Airport['plane1', 'plane2'] => True is true
```
### Defend Against Edge Cases  
Before plane land or take off, checked in `Criteria 5` should be done.

### Extended Acceptance Criteria 1:
Test Cases:
```
Test 1 - Plane1 take off when weather is stormy => False
Test 2 - Plane1 take off when weather is sunny => True
```
Test Passed:
```
% node checkWeatherTakeOff.spec.js
----------------------
Test 1 - Plane1 take off when weather is stormy => False
Test 1 - Plane1 take off when weather is stormy => False is true
----------------------
Test 2 - Plane1 take off when weather is sunny => True
Test 2 - Plane1 take off when weather is sunny => True is true
```
### Extended Acceptance Criteria 2:
Test Cases:
```
Test 1 - Plane3 land when weather is stormy => False
Test 2 - Plane3 land when weather is sunny => True
```
Test Passed:
```
% node checkWeatherLand.spec.js
----------------------
Test 1 - Plane3 land when weather is stormy => False
Test 1 - Plane3 land when weather is stormy => False is true
----------------------
Test 2 - Plane3 land when weather is sunny => True
Test 2 - Plane3 land when weather is sunny => True is true
```
