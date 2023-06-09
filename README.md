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

| Objects | Properties                    | Messages         | Return Value |
| ---     | ---                           | ---              | ---          |
| airport | planesOnGround @Array[@plane] | landPlane(@plane)| @Void        |
| plane   |                               |                  |              |