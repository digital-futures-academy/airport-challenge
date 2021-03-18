# Domain Model
| Object | Messages | Properties | Output |
| System Designer | Capacity() | Capacity(Array) | String |
| Airport Traffic Controller| Land() | Destination(String) | Array |
| | | Full | String@'Sorry this airport is full you can't land here' |
| | | Capacity | Array |
| | | Weather | String |
| | TakeOff()| Weather | String |
| | | LeftAirport | String@'Plane no longer at airport' |
| Weather | Weather | | String |
| | | | |