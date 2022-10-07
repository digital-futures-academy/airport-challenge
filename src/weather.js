let conditions;
let weather;

class Weather {
    constructor() {
        this.conditions = conditions;
    };

    checkWeather() {
        weather = Math.floor(Math.random() * 2) + 1;
        if (weather === 1) {
            conditions = "stormy"
        }
        else {
            conditions = "calm";
        };
    };
};

weatherC = new Weather();
weatherC.checkWeather();


class Airport {

    constructor(capacity = 3) {
        this.airportPlanes = [];
        this.capacity = capacity;
    };

    checkWeather() {
        let weather;
        let conditions;
        weather = Math.floor(Math.random() * 2) + 1;
        if (weather === 1) {
            conditions = "stormy";
        }
        else {
            conditions = "calm"
        }
        return conditions;
    };

    land(plane) {
        //this.checkWeather();
        console.log(this.conditions);
        //this.conditions = "stormy";
        if (this.conditions === "calm") {
            if (this.airportPlanes.includes(plane) === true) {
                console.log(`OOPS, not possible ${plane} is already in the airport!`);
            }
            else {
                console.log(`   **** ${plane} LANDED SAFELY.****`);
                this.airportPlanes.push(plane);
                return true;
            };
        }
        else {
            console.log("ALERT: cannot land due to stormy weather!");
        }
    }

    takeOff(plane) {
        if (this.airportPlanes.includes(plane) === true) {
            this.airportPlanes = this.airportPlanes.filter(value => !plane.includes(value));
            console.log(`   **** ${plane} TOOK OFF!! ****`);
            console.log("Airport contains: " + this.airportPlanes.join(", "));
            return true;
        }
        else {
            console.log(`OOPS, not possible ${plane} is not in the airport!`);
        }
    };

    checkFull() {
        if (this.airportPlanes.length === this.capacity) {
            console.log("Airport contains: " + this.airportPlanes.join(", "));
            return true
        }

    };

};

module.exports = Airport;
