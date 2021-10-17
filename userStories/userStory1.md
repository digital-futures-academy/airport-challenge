# **UserStory 1**

As an air traffic controller<br>
So I can get passengers to a destination<br>
I want to instruct the airport to land a plane<br>

# Objects
- Airport

# Properties
- plane@String

# Messages
- add(`@String`)


# Output
- `@Boolean`
- `@Array`

<br><br>

 # **UserStory 2**

As the system designer<br>
So that the software can be used for many different airports<br>
I would like a default airport capacity that can be overridden as appropriate<br>


# Objects
- Airport

# Properties
- defaultCapacity

# Messages
- defaultCapacity`@Integer`


# Output
- `@Boolean`

<br><br>

# **UserStory 3**

As an air traffic controller<br>
To ensure safety<br>
I want to prevent landing when the airport is full<br>


# Objects
- Airport

# Properties
- isFull

# Messages
- isFull`@Integer`


# Output
- `@Boolean`

<br><br>


# **UserStory 4**

As an air traffic controller<br>
So I can get passengers on the way to their destination<br>
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport<br>


# Objects
- Airport

# Properties
- takeOff

# Messages
- takeOff`@Integer`


# Output
- `@Boolean`
- `@Array`

<br><br>


# **UserStory 5**

As an air traffic controller<br>
To avoid confusion<br>
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed<br>


# Objects
- Airport
- plane`@string`

# Properties
- hasTookOff
- hasLanded

# Messages
- hastakeOff`@Integer`
- hasLanded`@Integer`


# Output
- `@Boolean`
- `@Array`

<br><br>

