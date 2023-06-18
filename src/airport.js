class Airport {
    #capacity
    #planesList;
    #weather;

    constructor(capacity = 5) {
        this.#capacity = capacity;
        this.#planesList = [];
        this.#weather;
    }

    landPlane(plane) {
        this.validateLanding(plane);
        this.#planesList.push(plane);
    }

    takeOff(plane) {
        this.validateTakeOff(plane);
        const planeId = plane.getId();
        this.#planesList = this.#planesList.filter((p) => p.getId() !== planeId);
    }

    getPlanesList() {
        return this.#planesList;
    }

    getCapacity() {
        return this.#capacity;
    }

    setCapacity(newCapacity) {
        if (newCapacity < 0) {
            throw new Error(`Capacity cannot be set below 0.`);
        }
        this.#capacity = newCapacity;
    }

    isFull() {
        return this.#planesList.length >= this.#capacity;
    }

    isAtAirport(plane) {
        return this.getPlanesList().includes(plane);
    }

    validateLanding(plane) {
        if (this.isFull()) {
            throw new Error(`The airport is full. Cannot land the plane.`)
        }

        if (this.isAtAirport(plane)) {
            throw new Error(`The plane has already landed.`);
        }

        if (this.#weather && this.#weather.isStormy()) {
            throw new Error(`The plane cannot land due to the stormy weather.`);
        }
    }

    validateTakeOff(plane) {
        if (!this.isAtAirport(plane)) {
            throw new Error(`The plane cannot take off as is not at the airport.`);
        }

        if (this.#weather && this.#weather.isStormy()) {
            throw new Error(`The plane cannot take off due to the stormy weather.`);
        }
    }

    setWeather(newWeatherCondition) {
        this.#weather = newWeatherCondition;
    }

    getLandedPlanes() {
        return this.#planesList;
    }
}

export default Airport;