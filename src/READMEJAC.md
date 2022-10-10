### readme-top
<h3 align="center">AIRPORT-CHALLENGE</h3>

  <p align="center">
    A programme, created following the principles of test-driven development, to control the movement of planes in and out of airports.
    <br />
    <a href="https://github.com/JacDoesJS/airport-challenge.git"><strong>Explore the docs »</strong></a>
    <br />
    <br />
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#About the Project">About the Project</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
### About The Project

This was a first attempt at creating a project using a class object in javaScript, following the principles of test-driven development.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
ABOUT THE PROJECT
<br />


### Built With

* JavaScript https://www.javascript.com/

<p align="right">(<a href="#readme-top">back to top</a>)</p>


GETTING STARTED
<br />

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/JacDoesJS/airport-challenge.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
   to install project dependencies

<br />  
PROJECT STRUCTURE
<br />
Please note that the main project file, "airport.js" is located in the "src" folder. ("Weather" and "Land" will be referred to in the Project Review, below).
<br/>
The test file, "airport.spec.js" is located in the "test" folder.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
<br />

### Roadmap
<br /> 

I have always developed my code in small chunks, ensuring the first tiny bit works, before adding anything of any further complexity. It has been gratifying learning about test-driven development and then being able to apply these methods in this project. I can absolutely see the sense of working in a test driven way, to create better, more secure code.

This is my first attempt at a comprehensive README file. 
<br />

WHAT I WOULD DO DIFFERENTLY IN FUTURE
<br>
The test file is cumbersome in terms of navigation and makes it difficult to read result results in the terminal. I have just learned how to set up a testing environment using npm and Jasmine. I now want to create a project where my code is structured in a loosely-coupled way. Each module would be in its own ".js" file and tested using a single ".spec.js file". Not only would this make for cleaner and more secure code but it would also make the results of testing easier to read and follow. 

I will look at the guidance for commit messages and perhaps leave out "whoop!".

WHERE COULD THIS PROJECT GO NEXT
I originally interpreted the final user story as requiring a random weather generator. I am interested in finding a way to test random variables. Aside from an imaginary world, the weather cannot be controlled by a user, so it feels somehow unrealistic to give them the power! I wrote some code which gives a 50-50 chance of stormy weather. On reflection a 1 in 4 chance seems more appropriate. For interest, the code is below. It can also be seen in the "weather.js" file.

It would be helpful to include an option to set the airport city name, when creating a new airport, so that the user can return a list of, e.g. all planes landed at Manchester airport. Ideally they would be able to return a list of all planes landed at all airports. 

Another further possibility would be to include a time-stamp for each landing and take-off.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


```

 checkWeather() {
        weather = Math.floor(Math.random() * 2) + 1;
        if (weather === 1) {
            conditions = "stormy"
        }
        else {
            conditions = "calm";
        };
    };


```

### Acknowledgements

This is a great README file template:
https://github.com/othneildrew/Best-README-Template


### Contact

Jac McKeigue: jac.mckeigue@outlook.com

<br />
PROBLEM STATEMENTS
<br />
Here below are detailed user stories with their respective domain models and tests.

<p>
As an air traffic controller  
<br>
So I can get passengers to a destination 
<br>  
I want to instruct the airport to land a plane
<br>
</p>

| Objects | Properties                    | Messages           | Output  |
| ------- | ----------------------------- | ------------------ | ------- |
| airport | airportPlanes @ARRAY[@string] | land(plane@string) | @string |

1. Test that plane is added to an array - test array.length increases by 1.
2. Test that land returns a string that confirms the plane has landed.

 <br>
 <br>
As the system designer  

So that the software can be used for many different airports  
I would like a default airport capacity that can be overridden as appropriate

| Objects | Properties                   | Messages             | Output |
| ------- | ---------------------------- | -------------------- | ------ |
| airport | capacity [@number]           | set default capacity | @void  |
| airport | increased capacity [@number] |                      |        |

1. Test that airport returns a default capacity.
2. Test that airport returns increased capacity.

<br>
<br>
As an air traffic controller  

To ensure safety  
I want to prevent landing when the airport is full

| Objects | Properties           | Messages             | Output   |
| ------- | -------------------- | -------------------- | -------- |
| airport | airportPlanes @array | set default capacity | @number  |
|         | capacity [@number]   | checkIfFull()        | @boolean |
| airport | airportPlanes @array | airport full         | @string  |

1. Test whether airport is full.
2. Test whether plane can land.

<br>
<p align="right">(<a href="#readme-top">back to top</a>)</p>
<br>
As an air traffic controller  

So I can get passengers on the way to their destination  
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

| Objects | Properties                    | Messages              | Output  |
| ------- | ----------------------------- | --------------------- | ------- |
| airport | airportPlanes @ARRAY[@string] | takeOff(plane@string) | @string |

1. Test that plane is removed from an array - test array.length decreases by 1.
2. Test that takeOff returns a string that confirms the plane has taken off.

<br>
<br>

As an air traffic controller  
To avoid confusion  
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

| Objects | Properties                    | Messages          | Output   |
| ------- | ----------------------------- | ----------------- | -------- |
| airport | airportPlanes @ARRAY[@string] | conditional check | @boolean |

1. Test whether plane is already in the airport.
2. Test whether plane can take off / land.



#### Extended Acceptance Criteria

```

Note = these next two user stories have been tested in reverse order.
```

As an air traffic controller  
To ensure safety  
I want to prevent take off when weather is stormy

| Objects | Properties         | Messages         | Output   |
| ------- | ------------------ | ---------------- | -------- |
| weather | conditions @string | check conditions | @boolean |
|         |                    | denyTakeOff      | @string  |

1. Test that take off denied when weather is stormy.

<br>
<br>
As an air traffic controller  

To ensure safety  
I want to prevent landing when weather is stormy

| Objects | Properties | Messages         | Output   |
| ------- | ---------- | ---------------- | -------- |
| weather | stormy     | check conditions | @boolean |
|         |            | deny Landing     | @string  |

1. Test that landing denied when weather is stormy.

<br>
<p align="right">(<a href="#readme-top">back to top</a>)</p>
<br>
As an air traffic controller  

To count planes easily  
Planes that have landed must be at an airport

| Objects | Properties           | Messages             | Output  |
| ------- | -------------------- | -------------------- | ------- |
| airport | airportPlanes @array | airportPlanes.length | @number |
| airport | airportPlanes @array | airportPlanes.join   | @string |

1. Test that user can return number and list of planes in an airport
NB I wrote the trackPlanes() method earlier as a way of easily being able to check planes had been added to airports in order that a plane could only take off if it was in an airport, for an earlier test.

<br>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



