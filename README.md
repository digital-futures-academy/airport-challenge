# Mousinho-airport-challenge
`mousinho-airport-challenge` is a JavaScript library created to test and display my Test Driven Development skills for module 2 of the Digital Futures Modern Software Engineering course of 2021.

<p>&nbsp;</p>

## How to install this project
- insert install instructions

<p>&nbsp;</p>

## Approach
From the previous test framework workshops I had begun to develop my own test library, `mousinho-testlibrary-mse-2103`,  for use on other projects. 

I developed this framework with the help of a [this](https://softchris.github.io/pages/javascript-understand-testing.html#constructing) article and was able to customise the outputs for each test.

For each user story in this airport challenge, I have taken these steps:

- Created a domain model to visualise what my src code will output. These have been added to this README below.
- Written tests within the `airport.spec.js` file using the `setup`, `execute`, `verify` method. With a focus on my eventual code output.
- Written the src code to get these tests to pass.
- Commited my work.
- Refactored the tests using my custom test library `mousinho-testlibrary-mse-2103`.
- Committed my work.
<p>&nbsp;</p>


## Domain models


### User Story 1
```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```

| Object | Properties | Message | Context | Output |
| ------ | ---------- | ------- | ------- | ------ |
| Airport | hanger @Array | land(plane) | adds plane to hanger, sets plane.flying to false | @Array[@planes] |
|  |  |  | if plane.flying is already false | @String "That plane has already landed" |
|  |  | get hanger() |  |  |
| Plane | flying @boolean | get flying() |  | @boolean |
|  |  | set flying() |  |  |

<p>&nbsp;</p>
<p>&nbsp;</p>

### User Story 2
```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```
| Object | Properties | Message | Context | Output |
| ------ | ---------- | ------- | ------- | ------ |
| Airport | capacity @Int | get capacity() | capacity as constructor parameter with default value. Getter to return value | @Int |
|  |  |  | negative Int passed to constructor | @Error |

<p>&nbsp;</p>
<p>&nbsp;</p>

### User Story 3
```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```
| Object | Properties | Message | Context | Output |
| ------ | ---------- | ------- | ------- | ------ |
| Airport |  | isFull() | if hangar[].length is equal to capacity | @Boolean true |
|  |  |  | if hangar[].length < capacity | @Boolean false |
|  |  | .land(@plane) | isFull | @String cannot land yet, the hangar is full |
|  |  |  | !isFull | @String Successful landing, ${plane} is now in the hangar |
