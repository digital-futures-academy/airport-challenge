# Alex Warr's Airport Challenge
This is my solution to the Digital Futures Airport Challenge

## Usage
Clone this repo to your local machine and run `npm install`. `npm audit fix` may also help with any issues that arise.
To run the tests you can use `npm test` or you can run the `test/specRunner.js` directly with `node`.


how to install your project, how to run the tests, how you approached the problem and provide screenshots of interacting with your program.
must have domain modeling in this file.


# Domain Models

### 'canLandPlane'
```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```

| Objects | Properties                    | Messages         | Return Values |
| ---     | ---                           | ---              | ---           |
| airport | planesOnGround @Array[@plane] | landPlane(@plane)| @Void         |
| plane   |                               |                  |               |

### canOverrideDefaultCapacity
```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```

Could be each airport has a defaultCapacity, which can be overwritten.
Could also be that each airport has a capacity, all airports have the same  defaultCapacity and capacity can be set (overridding the defaultCapacity);

| Objects | Properties | Messages | Return Values |
|---|---|---|---|
| airport | defaultCapacity @Int | overrideDefaultCapacity(@Int) | @Void |

Alternatively:

| Objects | Properties | Messages | Return Values |
|---|---|---|---|
| airport|capacity @Int | setCapacity(@Int) | @Void |
|  | defaultCapacity @Int |  |  |