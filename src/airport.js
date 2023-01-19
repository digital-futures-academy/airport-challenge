const Plane = require(`./Plane`);
const Weather = require("./Weather");

class Airport {

    // In future I would make these properties private
    planesLanded = [];
    capacity = 10;
    weather;
    name;

    // Each airport receives its own named instance of weather, or a default instance. 
    // Would be better as a static method in future
    constructor(weather, name) {
        this.weather = weather;
        this.name = name;
    }

    isItStormy = () => this.weather?.isItStormy();

    // These would be better throwing errors, rather than a log
    landPlane = plane => {
        if (this.isItStormy())
            return console.log(`Landing is not allowed in a storm`);

        if (this.planesLanded.includes(plane))
            return console.log(`${plane.id}: This plane is on the ground.`);

        if (plane instanceof Plane && this.planesLanded.length < this.capacity) {
            this.planesLanded.push(plane);
            plane.setAirport(this.name);
        }
    }

    takeOff = (plane) => {
        if (this.isItStormy())
            return console.log(`Take-off is not allowed in a storm`);

        const indexOfPlane = this.planesLanded.findIndex(planeLanded => planeLanded.id === plane.id);

        if (indexOfPlane > -1) {
            this.planesLanded.splice(indexOfPlane, 1);
            console.log(`${plane.id}: This plane has taken off.`);
            plane.setAirport();
            if (this.planesLanded.length > 0) {
                console.log(`The remaining planes are:`);
                for (let i = 0; i < this.planesLanded.length; i++)
                    console.log(this.planesLanded[i].id);
            }
            else
                console.log(`There are no planes on the ground.`);
        }
        else
            console.log(`${plane.id}: This plane is not at the airport.`);
    }

    changeCapacity = capacity => {
        if (typeof capacity === "number" && capacity > 0 && capacity % 1 === 0)
            this.capacity = capacity;
    }
}

module.exports = Airport;