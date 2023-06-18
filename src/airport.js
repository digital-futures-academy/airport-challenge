import weatherStatus from "./weatherStatus.js";

class Airport {
    #airportPlanes = [];
    #defaultCapacity = 5;
    #weather = 'Good';

    land(plane) {
        if (this.airportIsFull() || this.isPlaneAtAirport(plane)) {
            return this.#airportPlanes.length;
        }
        if (!this.weatherValidator()) {
            throw new Error("You cannot land a plane when the weather is stormy.");
        }
        this.#airportPlanes.push(plane);
    }

    getAirportPlaneCount() {
        return this.#airportPlanes.length;
    }

    getCapacity() {
        return this.#defaultCapacity;
    }

    setCapacity(newCapacity) {
        if (newCapacity <= this.getAirportPlaneCount()) {
            throw new Error("This capacity is not valid. Airport capacity cannot be smaller than the number of landed planes in this airport.");
        }
        this.#defaultCapacity = newCapacity;
    }

    airportIsFull() {
        return this.#defaultCapacity === this.#airportPlanes.length;
    }

    takeOff(plane) {
        if (!this.isPlaneAtAirport(plane)) {
            throw new Error("You cannot take off a plane when the airport has 0 planes on land or the plane id is not at the airport.");
        }
        if (!this.weatherValidator()) {
            throw new Error("You cannot take off a plane when the weather is stormy.");
        }
        this.#airportPlanes.splice(this.#airportPlanes.indexOf(plane), 1);

    }

    isPlaneAtAirport(plane) {
        return this.#airportPlanes.includes(plane);
    }

    setWeather(status) {
        this.#weather = status;
    }

    weatherValidator() {
        return this.#weather === weatherStatus.goodWeather;
    }
}

export default Airport;