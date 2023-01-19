const Plane = require('./plane.js');

// Airport Class
class Airport {

    //* properties and constructor for airport
    constructor(airportID = 'The Airport', airportCapacity = 10,  groundedPlanes = []) {
        this.airportID = airportID;
        this.airportCapacity = airportCapacity;
        this.groundedPlanes = groundedPlanes;
    }// set default values for these properties and they can be set when creating the airport

    //* functions of airport
    isAirportFull() {
        return (this.airportCapacity === this.groundedPlanes.length); // true or false
    }

    changeAirportCapacity(capacity) {
        if (typeof capacity === 'number' && capacity >= this.groundedPlanes.length) {
            this.airportCapacity = capacity; // changes the capacity of the airport only if the input is a number
            console.log(`The capacity of ${this.airportID} has changed to ${this.airportCapacity}.`); // tell the user command has changed the airport capacity
        } else {
            console.log(`Invalid input, ${this.airportID} capacity has not changed.`); // tell the user that the input is invalid and nothing has changed
        }
    }

    getAirportCapacity() {
        console.log(`${this.airportID} has a capacity of ${this.airportCapacity}.`);
        return this.airportCapacity; // returns the value of airportCapacity
    }

    planeExists(plane) {
        return (-1 < this.groundedPlanes.findIndex(airportPlane => airportPlane.planeID === plane.planeID)); // true or false
    }

    getPlanesAtAirport() {
        const planesAtAirport = JSON.stringify(this.groundedPlanes.map(function (plane) {
            return plane['planeID'];
        }));
        console.log(`${[planesAtAirport]} are at ${this.airportID}`);
        return planesAtAirport;
    }
    
    isPlane(plane) {
        this.plane = plane;
        return this.plane.isPlane();
    }

    landPlane(plane) {
        if (this.isPlane(plane) === true && this.isAirportFull() === false && this.planeExists(plane) === false) {
            this.groundedPlanes.push(plane); // adds the plane to the groundedPlanes array if the input is an instance of Plane class
            console.log(`${this.airportID} is not full, ${plane.planeID} has landed. There are ${this.groundedPlanes.length} plane(s) at ${this.airportID}.`); // show message that the plane has landed
        } else if (this.isPlane(plane) === true && this.isAirportFull() === true && this.planeExists(plane) === false) {
            console.log(`${this.airportID} is full, ${plane.planeID} has not landed.`); // show a message that the plane has on landed
        } else if (this.planeExists(plane) === true) {
            console.log(`${plane.planeID} is already at ${this.airportID} and cannot land.`);
        } else {
            console.log(`Invalid input, nothing has landed at ${this.airportID}.`); // message for any invalid inputs put into the system
        }
    }

    takeoffPlane(plane) {
        if (this.isPlane(plane) === true && this.planeExists(plane) === true) {
            this.groundedPlanes.splice(this.groundedPlanes.findIndex(airportPlane => airportPlane.planeID === plane.planeID), 1);
            console.log(`${plane.planeID} has taken off from ${this.airportID}.`);
        } else if (this.isPlane(plane) === true && this.planeExists(plane) === false) {
            console.log(`${plane.planeID} is not at ${this.airportID} and cannot take off.`);
        } else {
            console.log(`Invalid input, nothing has taken off from ${this.airportID}.`); // message for any invalid inputs put into the system
        }
    }
}
  
module.exports = Airport; // export Airport so it can be used in other codes
