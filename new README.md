# How To Install

Fork the repository and then clone it to your local machine and run `npm install` to install project dependencies

# How to Run the Tests

Run the tests by using `npm test` or `node spec/specRunner.js`

# Approach to the Problem

The approach taken was a test-driven one that attempted to work through each user story one by one. 

This began with domain models which can be found in domainModels.md with the table layout being based on the one found in the [Bob's Bagels demo](https://github.com/digital-futures-academy/bobs-bagels-demo#domain-model).



# How to Interact with the Program

Creates new airport with default capacity of 500 

>`let airport = new Airport();`

Creates new airport with default capacity of 1000

>`let airport = new Airport(1000);`

Creates a new plane object 

>`let plane = new Plane();`

Changes the airport max capacity to 1500

>`airport.overrideCapacity(1500);`

Sets the current capacity of the airport to 750

>`airport.setCurrentCapacity(750)`

Causes the plane object given to land at the airport if possible

>`airport.landPlane(plane);`

Causes the plane object given to takeoff from the airport if possible

>`airport.allowTakeOff(plane);`

Sets the weather to safe (sunny), false sets the weather to unsafe (stormy)

>`airport.setSafeWeather(true);`
