Airport Challenge
=================

```
         ______
        __\____\___
=  = ==(____DFA____)
           \_____\__________________,-~~~~~~~`-.._
          /     o o o o o o o o o o o o o o o o  |\_
          `~-.__       __..----..__                  )
                `---~~\___________/------------`````
                =  ===(_________)

```

Installation Of The project
---------
Use the https link for this project to clone it, via version control, to an IDE or code editor of your choice, for e.g. Visual Studio or Visual Studio Code. Make sure you can successfully open all the files stored within the root folder (airport-challenge) of the cloned project.

Running Tests
---------
Open your terminal (bash command line is also fine) and use the cd command to navigate to the root folder of the project. From there, type the following command: node specRunner.js then press enter to run all the test cases that operate within plane.spec.js and airport.spec.js which are both stored in the spec folder. The results will be displayed on your terminal, each result set will consist of the name of the test as well as true (passed the test) or false (failed the test). Feel free to browse the files within the spec folder to inspect the test-based code.

Approaching The Problem
---------
My initial approach was to produce a representation of each user story via extracting relevant nouns and verbs (divided between air traffic controller and system designer) as well as continuously updating the current representation according to the user story I was working on at the time. This proved to be fruitful because after completing that, I used it to develop a functional representation table to further clarify the behaviours of the objects and include their properties. As a result, I gained a much clearer understanding of how the objects were going to operate, the data they can access, and the data they will store. Following this, I used Miro to create a sequence diagram which is based on the functional representation. As part of the domain model, a sequence diagram is vital for illustrating the various data flows between the components of the program and thus greatly aids with speeding up the implementation stage because the code you develop is based on it instead of from scratch without a point of reference. Additionally, you are much less likely to be confused or make errors assuming that the diagram and tables are sensible. After completing the sequence diagram, I moved onto development (via Visual Studio) to structure my folders and files and used the diagram and representation tables to implement the required source code logic and test code which utilises the assertEquals function as the test framework. Furthermore, I made sure to stage, commit and push my changes to the remote repository after applying each user story (evidencing test-driven development) and/or making noteworthy updates such as installing and configuring ESLint for my project. It can be used to avoid bugs and improve the overall quality of code by reporting patterns found within code.

Representation of user stories: [Representation of user stories.docx](https://github.com/thekosiguy/airport-challenge/files/6762520/Representation.of.user.stories.docx)

Sequence diagram: https://miro.com/app/board/o9J_l8UKtaw=/

Screenshots
---------
Results of running specRunner js (after writing all source and test code)

![Results of running specRunner js (after writing all source and test code)](https://user-images.githubusercontent.com/17404715/124434201-7ccd4a80-dd6b-11eb-957f-c219121353c2.PNG)

Results of running plane spec js and airport spec js (after writing all source and test code)

![Results of running plane spec js and airport spec js (after writing all source and test code)](https://user-images.githubusercontent.com/17404715/124434214-80f96800-dd6b-11eb-8ba9-6be6705a65b9.PNG)

Running airport js - logging the temporary instance of Airport

![Running airport js - logging the temporary instance of Airport](https://user-images.githubusercontent.com/17404715/124434236-88207600-dd6b-11eb-9404-61902bffa844.PNG)

airport js - temporary instance of Airport

![airport js - temporary instance of Airport](https://user-images.githubusercontent.com/17404715/124434248-8ce52a00-dd6b-11eb-8a2e-0ff84aaf1b8a.PNG)

Running plane js - logging the temporary instance of Plane

![Running plane js - logging the temporary instance of Plane](https://user-images.githubusercontent.com/17404715/124434267-9373a180-dd6b-11eb-9e1e-599e606026fe.PNG)

plane js - temporary instance of Plane

![plane js - temporary instance of Plane](https://user-images.githubusercontent.com/17404715/124434280-98385580-dd6b-11eb-965a-fec4f350fab8.PNG)

(eslintrc.js) - added eslint recommended and a rule for single quote

![( eslintrc js) - added eslint recommended and a rule for single quotes](https://user-images.githubusercontent.com/17404715/124434394-be5df580-dd6b-11eb-92cb-0283484c3629.PNG)

airport js - running eslint (without extending to google within  eslintrc js

![airport js - running eslint (without extending to google within  eslintrc js)](https://user-images.githubusercontent.com/17404715/124434641-08df7200-dd6c-11eb-8ac7-97b09539db32.png)
