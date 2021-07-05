# Airport Challenge
## Install Project
                $ git clone git@github.com:AamirahV/airport-challenge.git  
                $ npm install
___
## Run Tests
                $ node specRunner.js
___
## Approach
1. Created domain models for each of the user stories. 
2. Used domain models to create functions inside the class Airport.
3. Ran tests using setup, execute and verify, to check if the outcomes are correct (in airport.spec.js).
4. Debugged any coding errors in the source code and ran tests again using `$node specRunner.js` by exporting the src and spec files.
5. Looked for values of 'true' to show the completetion of the task
___
## Domain Models
### User Story 1  
As an air traffic controller  
So I can get passengers to a destination  
I want to instruct the airport to land a plane  
|Object   |Properties      |Messages           |Output          |
|:---     |:---            |:---               |:---            |
|airport  |plane[@string]  |landPlane @string  |plane[@string]  |

#### User Story 1 Code  
    class Airport {
        constructor(capacity) {
            this.runway = [];
      }

    landPlane(plane) {
        this.runway.push(plane[i]);
            return this.runway;
        }
    }


### User Story 2  
As the system designer  
So that the software can be used for many different airports  
I would like a default airport capacity that can be overridden as appropriate  
|Object   |  Properties  |  Messages            |  Output                    |  
|:---     |:---          |:---                  |:---                        |
|airport  |  capacity()  |  overrideCapacity()  |  airport.overrideCapacity()|

#### User Story 2 Code
    class Airport {
        constructor(capacity) {
            this.runway = [];
            this.capacity = capacity || 50;
        }
        overrideCapacity(planes) {
            if (this.total >= 0) {
                return this.capacity += planes;
            } 
            else {
                return this.capacity;
            }
        }
    }

### User Story 3  
As an air traffic controller  
To ensure safety  
I want to prevent landing when the airport is full  
|Object   |Properties  |Messages           |Output             |
|:---     |:---        |:---               |:---               |
|airport  |capacity()  |airportCapacity()  |airport.capacity() |

#### User Story 3 Code
    class Airport {
        constructor(capacity) {
            this.runway = [];
            this.capacity = capacity || 50;
            this.total = 0;
        }

        landPlane(plane) {
            if (this.airportCapacity()) {
                return `Airport is full. Do not land ${plane}`;
            }
            else {
                this.runway.push(plane[i]);
                this.total++;
            }
            return this.runway;
        }
        airportCapacity() {
            if (this.total >= this.capacity){
                return true;
        } 
            else { return false; 
            }
        }
    }
#### User Story 3 Test
Ran into debugging problems in User Story 3 when input = ["Plane A", "Plane B", "Plane C"], result was returning [["Plane A", "Plane B", "Plane C"]]. Resolved the issue by making changes to the source code and spec.  

    const Airport = require("../src/airport.js");
    const assertEquals = require("../src/assertEquals.js");
    let input, input1, input2, input3, output, airport, result, expectedOutput
    //Test 3
    console.log("Test to see if airport doesn't land plane")
    //setup 
    airport = new Airport(2)
    input = ["Plane A"]
    input1 = ["Plane B"]
    input2 = ["Plane C"]
    expectedOutput= ["Plane A", "Plane B"]
    //execute
    result = airport.landPlane(input)
    result1 = airport.landPlane(input1)
    result2 = airport.landPlane(input2)
    output = "Airport is full. Do not land Plane C"
    //result = airport.airportCapacity(input)
    //console.log(result)
    //console.log(result1)
    //console.log(result2)
    //verify
    console.log(assertEquals(result, expectedOutput))
    console.log(assertEquals(result2, output))
### User Story 4  
As an air traffic controller  
So I can get passengers on the way to their destination  
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport  
|Object   |Properties      |Messages          |Output                |
|:---     |:---            |:---              |:---                  |
|airport  |plane[@string]  |takeOff @string   |plane[@string]        |
|         |                |airportChecker()  |takeOff[plane@string] |

#### User Story 4 Code
    class Airport {
        constructor(capacity) {
            this.runway = [];
            this.capacity = capacity || 50;
            this.total = 0;
        }
        takeOff(plane) {
            for (let i = 0; i < plane.length; i++) {
                if (this.airportChecker(plane[i])) {
                    return `${plane} has taken off and is no longer in the airport`;
                }
                else {
                    const index = this.runway.indexOf(plane);
                    this.runway.splice(index, 1);
                    this.total--;
                }
            return this.runway;
            }
        }
        airportChecker(plane) {
            if (this.runway.includes(plane)) {
                return true;
            }
            else {
                return false;
            }
        }  
    }

### User Story 5  
As an air traffic controller  
To avoid confusion  
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed  
|Object   |Properties      |Messages           |Output                      |
|:---     |:---            |:---               |:---                        |
|airport  |plane[@string]  |landPlane @string  |plane[@string]              |
|         |                |takeOff @string    |plane[@string]              |
|         |                |airportChecker()   |land/takeOff[plane@string]  |

#### User Story 5 Code
    class Airport {
        constructor(capacity) {
            this.runway = [];
            this.capacity = capacity || 50;
            this.total = 0;
        }
        landPlane(plane) {
            for (let i = 0; i < plane.length; i++) {
                if (this.airportChecker(plane[i])) {
                    return `${plane} is already in the airport`;
                }
                if (this.airportCapacity()) {
                return `Airport is full. Do not land ${plane}`;
                }
                else {
                    this.runway.push(plane[i]);
                    this.total++;
                }
            return this.runway;
            }
        }
        takeOff(plane) {
            for (let i = 0; i < plane.length; i++) {
                if (this.airportChecker(plane[i])) {
                    return `${plane} has taken off and is no longer in the airport`;
                }
                else if (!this.airportChecker(plane[i])) { 
                    return `${plane} cannot take off, it is not in the airport`;
                }
                else {
                    const index = this.runway.indexOf(plane);
                    this.runway.splice(index, 1);
                    this.total--;
                }
            return this.runway;
            }
        }
    
        airportChecker(plane) {
            if (this.runway.includes(plane)) {
                return true;
            }
            else {
                return false;
            }
        }
    }


### Completetion of Acceptance Criteria 
    $ node airport.spec.js
    Test to see if airport lands plane
    true
    true
    Test to see if airport can be increased
    true
    Test to see if airport doesn't land plane
    true
    true
    Test to see if plane has taken off and is no longer in the airport
    true
    Test to see if a plane is already grounded before asking it to land
    true
    Test to see if a plane is at the airport before telling it to take off
    true
