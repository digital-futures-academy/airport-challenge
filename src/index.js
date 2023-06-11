const airport = require("./airport");
const plane = require("./plane");

airport.land();
plane.isAtAirport(plane);
airport.isAtCapacity();
airport.setCapacity(100);
airport.isFull();