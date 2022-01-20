const Plane = require("./plane");

class Airport {

    #maxPlaneCapacity;
    #airportID;
    #isFull;

    constructor(maxPlaneCapacity = 10, airportID) {
        this.weatherPossibilities = [`sunny`, `cloudy`, `rainy`, `stormy`];
        this.weather;

        this.landedPlanes = [];
        this.#maxPlaneCapacity = maxPlaneCapacity;

        this.#airportID = airportID;
    }
    land(landingPlane) {
        try {
            if (!landingPlane.planeID && landingPlane.planeID !== '') {
                throw new Error(`${landingPlane} is not a valid Plane. Only planes can land in airports.`);
            }

            if (this.assertIsFull()) {
                throw new Error(`Airport is full, ${landingPlane?.planeID ?? `Plane`} cannot land.`);
            }
            this.landedPlanes.push(landingPlane);
            console.log(`${landingPlane?.planeID ?? `Plane`} has landed!`);

        } catch (err) {
            console.log(err.message);
            return err;
        }

        this.assertIsFull();
    }

    takeOff(leavingPlane) {
        try {
            if (this.landedPlanes.length === 0) {
                throw new Error(`${this?.airportID ?? `This airport`} is currently empty of planes.`);
            }
            else if (!this.landedPlanes.includes(leavingPlane)) {
                throw new Error(`${this.landedPlanes?.planeID ?? `Plane`} is not currently at ${this?.airportID ?? `this Airport.`}`);
            }
            // if (!leavingPlane.planeID && leavingPlane.planeID !== '')
            let planeToRemove = this.landedPlanes.indexOf(leavingPlane);
            this.landedPlanes.splice(planeToRemove, 1);

        } catch (err) {
            console.log(err.message);
            return err;
        }

        this.assertIsFull();
    }

    //Getters & Setters
    getID() {
        return this.#airportID;
    }

    getCapacity() {
        return this.#maxPlaneCapacity;
    }

    getPlanes() {
        return this.landedPlanes;
    }

    getWeather() {
        if (!this.weather) {
            this.setWeather();
        }
        return this.weather;
    }

    setWeather(weatherInput = Math.random()) {
        try {
            if ((typeof weatherInput === "number") && (weatherInput < 1)) {
                let flooredInt = Math.floor(weatherInput * this.weatherPossibilities.length)
                this.weather = this.weatherPossibilities[flooredInt];
            } else if ((typeof weatherInput === "number") && (Math.floor(weatherInput) < this.weatherPossibilities.length)) {
                Math.floor(weatherInput);
                // console.log(Math.floor(weatherInput));
                this.weather = this.weatherPossibilities[Math.floor(weatherInput)];
            } else if ((typeof weatherInput === "string") && (this.weatherPossibilities.includes(weatherInput))) {
                this.weather = this.weatherPossibilities[this.weatherPossibilities.indexOf(weatherInput)];
            } else {
                this.setWeather();
                throw new Error(`'${weatherInput}' is not a valid weather option. Weather set to random.`);
            }
        } catch (err) {
            console.log(err.message);
            return err;
        }


    }

    assertIsFull() {
        this.#isFull = !(this.landedPlanes.length < this.#maxPlaneCapacity);
        return this.#isFull;
    }
}

module.exports = Airport;

// testAir = new Airport();
// testAir.setWeather(Math.random());
// console.log(testAir.weather);
// console.log(Math.floor(Math.random() * 4));