const Plane = require(`./Plane`);
const Weather = require("./Weather");

class Airport {

    // In future I would make these properties private
    planesLanded = [];
    capacity = 10;
    weather;

    // Each airport receives its own named instance of weather, or a default instance
    constructor(weather = new Weather(), id) {
        this.weather = weather;
    }

    isItStormy = () => this.weather.isItStormy?.();

    landPlane = plane => {
        if (this.isItStormy())
            return console.log(`Landing is not allowed in a storm`);

        if (this.planesLanded.includes(plane))
            return console.log(`${plane.id}: This plane is on the ground.`);

        if (plane instanceof Plane && this.planesLanded.length < this.capacity)
            this.planesLanded.push(plane);
    }

    takeOff = (plane) => {
        if (this.isItStormy())
            return console.log(`Take-off is not allowed in a storm`);

        const indexOfPlane = this.planesLanded.findIndex(planeLanded => planeLanded.id === plane.id);

        if (indexOfPlane > -1) {
            this.planesLanded.splice(indexOfPlane, 1);
            console.log(`${plane.id}: This plane has taken off.`);
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
