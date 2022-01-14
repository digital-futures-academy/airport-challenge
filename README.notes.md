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
