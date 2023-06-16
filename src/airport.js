class Airport {
    #airportCapacity;
    #planesStanding;

    constructor(airportCapacity = 10, planesStanding = []) {
        this.#airportCapacity = airportCapacity;
        this.#planesStanding = planesStanding;
    }

    landPlane(plane) {
        if (!plane?.id) return `Unidentified planes are not allowed at the airport`
        if (this.fullAirport()) {
            return `Sorry, ${plane.id}, no room for you to park!`;
        } else if (!this.#planesStanding.includes(plane)) {
            this.#planesStanding.push(plane);
            return `Welcome to your destination, ${plane.id}`;
        } else {
            return `${plane.id} is already here`;
        }
    }

    orderTakeOff(plane) {
        if (this.#planesStanding.includes(plane)) {
            let index = this.#planesStanding.indexOf(plane);
            this.#planesStanding.splice(index, 1);
            return `${plane.id} took off`;
        } else {
            return `${plane.id} is not at the airport`;
        }
    }

    fullAirport() {
        return this.#planesStanding.length >= this.#airportCapacity;
    };

    set airportCapacity(newAirportCapacity) {
        this.#airportCapacity = newAirportCapacity;
    }

    get airportCapacity() {
        return this.#airportCapacity;
    }

    set planesStanding(newPlanesStanding) {
        this.#planesStanding = newPlanesStanding;
    }

    get planesStanding() {
        return this.#planesStanding;
    }
}

module.exports = Airport;