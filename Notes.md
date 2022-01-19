# 1. Generate User Stories based on requirements

As an air traffic controller
I want to instruct the airport to land a plane
So I can get passengers to a destination


# 2. Identify nouns and verbs from user stories

| noun       | verb        |
| ---------- | ----------- |
| Airport    | to instruct |
| Plane      | to land     |
| Passengers | get         |


# 3. Domain Model (Objects, Properties, Messages, Outputs)

| Objects   | Properties              | Messages        | Output                    |
| --------- | ----------------------- | --------------- | ------------------------- |
| Airport   | available @Boolean      | isAvailable()   | @Boolean                  |
|           | planes @Array [@Planes] | getPlanes()     | @Array[@Planes] or @Error |
| Plane     | @Array[@Text, @Text]    | -               | -                         |
| Passenger | passengers @Array       | getPassengers() | @Array                    |