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
| | | Weather | Stormy | String@'Cannot land in stormy weather' |
| | TakeOff()| Weather | Stormy | String@'Cannot take off in stormy weather' |
| | | Airport(String) | | Array |
| | | Airport(String) | Isn't at that airport | String@'Planes can only take off from airports they are in.' |
| | | | Already Taken Off | String@'Can't let a plane take off that's already taken off'|
| Weather | | Conditions()| Acceptable | String |
| | | | Stormy | String |
| Plane | | Status | TakenOff | String |
| | | Status | Landed | String |

# How to use

-To create a new Airport use the Airport class.

-To create a new Plane use the Plane class.

-To create Weather which is necessary to land or take off a plane, use the Weather Class. This randomly generates Weather that is either 'stormy' or 'acceptable' for flying.

-To increase Airport capacity create a System Designer using SystemDesigner class.
Then use:

```systemDesigner.overrideCapacity(airport, size)```

To land a Plane use:

```airport.land(plane, weather)```

Remembering that if the 'weather' is 'stormy', the Plane has already 'landed' or the Airport is 'full', this won't be possible.

To take off a plane use:

```airport.takeOff(plane, weather)```

Remembering that if the Weather is 'stormy', the Plane has already 'takenOff' or the Plane is not at that Airport, this won't be possible.

To check the status of a Plane use:

```console.log(plane.status)```
