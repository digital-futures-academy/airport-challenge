# Alex Warr's Airport Challenge
This is my solution to the Digital Futures Airport Challenge

## Usage
Clone this repo to your local machine and run `npm install`. `npm audit fix` may also help with any issues that arise.
To run the tests you can use `npm test`.


how to install your project, how to run the tests, how you approached the problem and provide screenshots of interacting with your program.
must have domain modeling in this file.


# Domain Models

### canLandPlane
```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```

| Objects | Properties                    | Messages         | Return Values |
| ---     | ---                           | ---              | ---           |
| airport | planesOnGround @Array[@plane] | landPlane(@plane)| @Void         |
| plane   |                               |                  |               |

### canSetCapacity
```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```

| Objects | Properties | Messages | Return Values |
|---|---|---|---|
| airport|capacity @Int | setCapacity(@Int) | @Void |
|  | defaultCapacity @Int |  |  |

### checkCanLand
```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```

| Objects | Properties | Messages | Return Values |
|---|---|---|---|
| airport | capacity @Int | canLand()|@Bool |
| | planesOnGround @Array[@plane]| | |


### letTakeOffAndConfirm
```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```

| Objects | Properties | Messages | Return Values |
|---|---|---|---|
| airport| planesOnGround @Array[@plane] | takeOff(@plane) | @Bool |
| plane | | | |

### preventConfusion
```
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```
| Objects | Properties | Messages | Return Values |
|---|---|---|---|
| airport | | takeOff(@plane)| @error, @bool |
| | | landPlane(@plane) | @error
| plane | | | |

