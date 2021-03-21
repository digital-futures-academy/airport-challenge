# Instructions
1. Clone this repository to your machine.
2. ``npm install`` to install project dependencies.
3. Run the tests using ``node specRunner.js`` or ``npm test``.

# Domain Model
| Object | Messages | Properties | Context | Output |
|---------------------------|----------|-------------------|------------------|-------------------------|
| System Designer | overrideCapacity() | Capacity | | Integer |
| Airport Traffic Controller| Land() | Destination(String) | Not Full | Array |
| | | Destination(String) | Full |String@'Sorry this airport is full you can't land here' |
| | | Capacity | | Integer |
| | | Weather | | String |
| | TakeOff()| Weather | | String |
| | | Destination(String) | Exists | Array |
| | | Destination(String) | Does not Exist | String@'Plane not at this airport' |
| Weather | Weather | | | String |
| Plane | Status| Status | | String |