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

Intro
---------


How it works
----------


How to Install
-------


How to use

-------


-------------------------------------------------
Functional Representation Domain Model 
---

| Object | Properties | Message | Context | Output 
|----------|-------------|-------------|-----------|----------
|Airport | plane@str| landPlane |  | @str ' you are free to land'
|Airport | plane@str| landPlane | dont land, airport full |  'Sorry you cannot land plane yet'@str
|Airport | defaultCapacity@int| changeDefaultCapacity |  | defaultCapacity@int
|Airport | currentCapacity@int| isAirportFull| airport full  | 'Sorry airport is full plane cannot land'@ str
|Airport | plane@str| isAirportFull | airport not full  | ' you are free to land' @str
|Airport | location@str| takeOff | location = airport |  ' plane still in airport'@str
|Airport | location@str| takeOff | location != airport |  'Plane is no longer at airport'@str
|Airport | location@str| takeOff | plane takeOff already | 'Sorry you cannot take off again'@ str
