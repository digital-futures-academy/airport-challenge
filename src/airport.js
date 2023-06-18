class Airport {

    airportPlaneList = [];
    airportCapacity = 5;
    weatherCondition = undefined;
    landingError = new Error(`Landing Error`);
    takeOffError = new Error(`Take off Error`);



    landPlane(plane) {
        if (this.planeInAirport(plane) || this.isAirportFull() === true || this.isStormy()) {
            throw this.landingError;
        } else {
            this.airportPlaneList.push(plane);
        }
    }

    modifyAirportCapacity(newCap) {
        if (Number.isInteger(newCap)) {
            this.airportCapacity = newCap;
        }
    }

    isAirportFull() {
        return this.airportPlaneList.length >= this.airportCapacity ? true : false;
    }

    planeInAirport(plane) {
        return this.airportPlaneList.includes(plane);
    }

    takeOff(plane) {
        if (this.airportPlaneList.includes(plane) && this.isStormy() === false) {
            let planeIndex = this.airportPlaneList.indexOf(plane);
            this.airportPlaneList.splice(planeIndex, 1);
        } else {
            throw this.takeOffError;
        }
    }

    setWeather(weather) {
        if (typeof weather === "string") {
            return this.weatherCondition = weather;
        }
    }

    isStormy() {
        return this.weatherCondition === "stormy";
    }

    planeCounter() {
        return this.airportPlaneList.length;
    }
}

module.exports = Airport 
