class Airport {

    constructor(airportCapacity = 1, planeList = []) {
        this.airportCapacity = airportCapacity;
        this.planeList = planeList;
        this.weather = "Clear";
    }

    landPlane = plane => {
        if (!this.isAirportFull() && !this.isPlaneInAirport(plane) && this.checkWeather()) {
            this.planeList.push(plane);
        }
    }

    takeOff = newPlane => {
        if (this.isPlaneInAirport(newPlane) && this.checkWeather()) {
            let newPlaneList = this.planeList.filter((plane) => plane.id !== newPlane.id);
            this.planeList = newPlaneList;
        }
    }

    changeCapacity = newCapacity => {
        this.airportCapacity = newCapacity;
    }

    isAirportFull = () => {
        return (this.airportCapacity <= this.planeList.length) ? true : false;
    }

    isPlaneInAirport = testPlane => {
        return this.planeList.some(plane => plane.id === testPlane.id);
    }

    checkWeather = () => {
        if (this.weather === "Stormy") {
            return false;
        }

        return true;
    }
}

module.exports = Airport;