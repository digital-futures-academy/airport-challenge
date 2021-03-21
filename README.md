# Instructions
1. Clone this repository to your machine.
2. ``npm install`` to install project dependencies.
3. Run the tests using ``node specRunner.js`` or ``npm test``.

# Domain Model
| Object | Messages | Properties | Context | Output |
|---------------------------|----------|-------------------|------------------|-------------------------|
| System Designer | overrideCapacity() | Capacity | | Integer |
| Airport Traffic Controller| Land() | Airport(String) | Not Full | Array |
| | | Airport(String) | Full |String@'Sorry this airport is full you can't land here' |
| | | | Already Landed | String@'Can't land a plane that's already landed' |
| | | Capacity | | Integer |
| | | Weather | | String |
| | TakeOff()| Weather | | String |
| | | Airport(String) | | Array |
| | | Airport(String) | Does not Exist | String@'Plane not at this airport' |
| | | | Already Taken Off | String@'Can't let a plane take off that's already taken off'|
| Weather | Weather | | | String |
| Plane | Status| Status | TakenOff | String |
| | | Status | Landed | String |