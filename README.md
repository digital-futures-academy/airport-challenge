# Instructions
1. Clone this repository to your machine.
2. ``npm install`` to install project dependencies.
3. Run the tests using ``node specRunner.js``

# Domain Model
| Object | Messages | Properties | Output |
|---------------------------|----------|-------------------|-------------------------|
| System Designer | Capacity() | Capacity(Array) | String |
| Airport Traffic Controller| Land() | Destination(String) | Array |
| | | Full | String@'Sorry this airport is full you can't land here' |
| | | Capacity | Array |
| | | Weather | String |
| | TakeOff()| Weather | String |
| | | LeftAirport | String@'Plane no longer at airport' |
| Weather | Weather | | String |
| Plane | Status| Status | String |