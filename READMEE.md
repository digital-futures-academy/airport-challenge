Airport Challenge Oma
=================
```
         ______
        __\____\___
=  = ==(____OMA____)
           \_____\__________________,-~~~~~~~`-.._
          /     o o o o o o o o o o o o o o o o  |\_
          `~-.__       __..----..__                  )
                `---~~\___________/------------`````
                =  ===(_________)

Process

I started by forking the challenge repository from the DF github - I did this by clicking the fork button on the page.


I then cloned the repo by using a html link from github and following the clone navigation on vs code.


I then opened the command prompt application on my device and typed node --version to check that it installed properly. I also checked npm --version and that threw a 'WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead. 8.11.0' message. - I'll be using node specRunner in the meantime. 


Next, as a starting point for this challenge I began with domain modelling for each of the user stories given. As seem below I created the tables by identifying the nouns(objects), properties of those objects, messages(functions) and lastly output- from each user story.

I then used the code along live share for the "test and testing frameworks" as a template/guide for for TDD
I outlined the three A's - arrange, act, assert, then I ran the node spec runner test and amended the errors accordingly (by defining a few undefined functions that were flagged in the terminal). Once I had a FAIL I attempted*** to refactor in attempt to get the tests to PASS - I left comments and created a folder of screenshots to show my interaction with the program.

Screenshots of interaction with program: https://docs.google.com/document/d/1Dm-779tPiAopdTPqGwsW8JO4odnpQvDvk_g2yI_uVdY/edit?usp=sharing


User Stories

1. As an air traffic controller
So I can get passengers to a destination                
I want to instruct the airport to land a plane           

|Object  |Property            |Messages   |Output|
|airplane|identifier          |get ID     |string|
|airport |planes@array[@plane]|planeLand()|string|


2. As the system designer                                                 
So that the software can be used for many different airports                
I would like a default airport capacity that can be overridden as appropriate

|Object  |Property    |Messages     |Output|
|airplane|capacity@num|setCapacity()|number|
|airport |ID          |get Id       |string|


3. As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full 

|Object  |Property                  |Messages   |Output|
|airplane|ID                        |get ID     |string|
|airport |planesLanded@array[@plane]|planeLand()|error |
|        |capacity@num              |           |number|

4. As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

|Object  |Property                  |Messages      |Output| 
|airplane|planesLanded@array[@plane]|planeTakeoff()|string|
|airport |ID                        |              |string|



5. As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

|Object|Property|Messages|Output|
|-------|--------|--------|-----|
|-------|--------|--------|-----|