**Airport Challenge**
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

airport-challenge is a JavaScript library, which allows simulation of operating an airport by making planes land and takeoff.


**To install**

Fork this repo, clone to your local machine and install npm.

```sh

git clone git@github.com:zuzanna-maria/airport-challenge.git


```
or

```sh

git clone https://github.com/zuzanna-maria/airport-challenge.git


```


**To run tests**

Navigate to 'spec' directory and install jasmine:

```sh

npm install jasmine

```
then run the following command:

```sh

npx jasmine spec.js

```

**Operating the program**

To land a plane:


![img1](https://github.com/zuzanna-maria/airport-challenge/blob/main/screenshot/img1.png)


To make a plane take off:


![img2](https://github.com/zuzanna-maria/airport-challenge/blob/main/screenshot/img2.png)

To view planes which have been landed at the airport:

![img3](https://github.com/zuzanna-maria/airport-challenge/blob/main/screenshot/img3.png)

If an attempt is made to land more planes than airport capacity allows:

![img4](https://github.com/zuzanna-maria/airport-challenge/blob/main/screenshot/img4.png)

To change airport capacity:

![img5](https://github.com/zuzanna-maria/airport-challenge/blob/main/screenshot/img5.png)

Landed planes display 'true' status:

![img6](https://github.com/zuzanna-maria/airport-challenge/blob/main/screenshot/img6.png)

Planes not landed display 'false' status:

![img7](https://github.com/zuzanna-maria/airport-challenge/blob/main/screenshot/img7.png)

A plane cannot be landed if it is already at an airport:

![img8](https://github.com/zuzanna-maria/airport-challenge/blob/main/screenshot/img8.png)

A plane cannot be landed if its status is 'true' (i.e. landed):

![img9](https://github.com/zuzanna-maria/airport-challenge/blob/main/screenshot/img9.png)

A plane cannot take off if it is not at an airport:

![img10](https://github.com/zuzanna-maria/airport-challenge/blob/main/screenshot/img10.png)

A plane cannot take off if its status is 'false' (i.e. taken off):

![img11](https://github.com/zuzanna-maria/airport-challenge/blob/main/screenshot/img11.png)

The weather conditions can be either "sunny" or "stormy". If no condition is specified by passing an argument to the 'land' or 'takeoff' functions, the weather is randomised. Running these functions without passing an argument to specify the conditions results either in sunny weather (which allows planes to land/take off successfully), or stormy weather (which means planes cannot takeoff/be landed).

![img12](https://github.com/zuzanna-maria/airport-challenge/blob/main/screenshot/img12.png)
![img13](https://github.com/zuzanna-maria/airport-challenge/blob/main/screenshot/img13.png)

For the purposes of obtaining uniform unit test results, the randomness of weather conditions can be stubbed by specifying the desired weather as either "sunny" or "stormy".

![img14](https://github.com/zuzanna-maria/airport-challenge/blob/main/screenshot/img14.png)
![img15](https://github.com/zuzanna-maria/airport-challenge/blob/main/screenshot/img15.png)
