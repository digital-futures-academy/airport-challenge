const Weather = require('./weather');

class Airport {
    #capacity;
    #planes = [];
    #forecaster;

    constructor(capacity = 10, forecaster = new Weather()) {
        this.#capacity = capacity;
        this.#forecaster = forecaster;
    }

    arrive(plane) {
        const forecast = this.#forecaster.forecast();

        if (forecast === 'stormy')
            throw new Error('Cannot recieve a Plane while weather is stormy.');
        if (plane.status !== 'arriving')
            throw new Error('Cannot recieve a Plane which is not arriving.');
        if (this.isFull())
            throw new Error('Cannot recieve a Plane while capacity is full.');

        this.#planes.push(plane);
    }

    depart(plane) {
        const forecast = this.#forecaster.forecast();

        if (forecast === 'stormy')
            throw new Error('Cannot release a Plane while weather is stormy.');
        if (plane.status !== 'departing')
            throw new Error('Cannot release a Plane which is not departing.');

        const idx = this.#planes.findIndex((p) => p.id === plane.id);

        if (idx === -1)
            throw new Error('Cannot release a Plane which is not at this Airport.');

        this.#planes.splice(idx, 1);
    }

    isFull() {
        return this.#capacity === this.#planes.length;
    }

    hasPlane(plane) {
        return this.#planes.some((p) => p.id === plane.id);
    }

    get capacity() {
        return this.#capacity;
    }

    get planes() {
        return this.#planes;
    }

    get forecaster() {
        return this.#forecaster;
    }
}

module.exports = Airport;
