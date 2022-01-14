# Aiport Challenge

## Instructions

- Run `npm install`.
- Run `npm test` to execute test runner.

## Domain Models

### User Story 1

```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```

| Objects | Properties | Messages | Output |
| ---     | ---        | ---      | ---    |
| Airport | | landPlane(@Plane) | @Void |
| Plane | status @String | status() | @String |

### User Story 2

```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```

| Objects | Properties | Messages | Output |
| ---     | ---        | ---      | ---    |
| Airport | capacity @Integer | capacity() | @Integer |
| | | landPlane(@Plane) | @Void |
| Plane | status @String | status() | @String |

### User Story 3

```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```

| Objects | Properties | Messages | Output |
| ---     | ---        | ---      | ---    |
| Airport | capacity @Integer | capacity() | @Integer |
| | | isFull() | @Boolean |
| | planes @Array[@Plane] | planes() | @Array[@Plane] |
| | | landPlane(@Plane) | @Void |
| Plane | status @String | status() | @String |

### User Story 4

```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```

| Objects | Properties | Messages | Output |
| ---     | ---        | ---      | ---    |
| Airport | capacity @Integer | capacity() | @Integer |
| | | isFull() | @Boolean |
| | planes @Array[@Plane] | planes() | @Array[@Plane] |
| | | landPlane(@Plane) | @Void |
| | | takeOffPlane(@String) | @Void |
| | | hasPlane(@String) | @Boolean |
| Plane | id @String | id() | @String |
| | status @String | status() | @String |

### User Story 5

```
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```

No domain change. Added new checks in the `landPlane` and `takeOffPlane` functions.

Also added the `isFull` test and function which I forgot to implement separately in a previous test cycle.