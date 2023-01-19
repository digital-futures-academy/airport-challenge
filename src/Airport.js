// https://github.com/digital-futures-academy/se-2301-a-demos/blob/main/bobs-bagels-tdd/src/Basket.js
const Airplane = require(`./Airplane`);

class Airport {

    constructor() {
    }

    capacity = 10;
    airportPlanes = [];




    landPlane = (weather, plane) => {
        if (!this.airportPlanes.includes(plane) && this.airportPlanes.length < this.capacity && weather < 0.85 && plane instanceof Airplane && plane.currentAirport == false) {
            console.log("Plane landed!");
            this.airportPlanes.push(plane);
            plane.currentAirport = this;
        }
        else {
            console.log("A plane with that ID has just left the airport or the weather is stormy or the plane is stationed elsewhere or you are not flying a plane.")
        }
    }


    flyPlane = (weather, plane) => {
        //Take off if at airport and return confirmation as a string
        if (this.airportPlanes.includes(plane) && weather < 0.85) {
            console.log("Plane taken flight");
            this.airportPlanes.shift(plane);
        }
        else {
            console.log("A plane with that ID is not currently in the airport or the weather is stormy or you are not flying a plane");
        }
    }
}
module.exports = Airport;





