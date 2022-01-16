const Weather = require('./weather');

class Airport {
    constructor(capacity = 10, forecaster) {
        this.capacity = capacity;
        this.planes = [];
        this.forecaster = forecaster || new Weather();
    }

    arrive(plane) {
        const forecast = this.forecaster.forecast();

        if (forecast === 'stormy')
            throw new Error('Cannot recieve a Plane while weather is stormy.');
        if (this.capacity === this.planes.length)
            throw new Error('Cannot recieve a Plane while capacity is full.');
        if (plane.status !== 'arriving')
            throw new Error('Cannot recieve a Plane which is not arriving.');

        this.planes.push(plane);
    }

    depart(plane) {
        const forecast = this.forecaster.forecast();

        if (forecast === 'stormy')
            throw new Error('Cannot release a Plane while weather is stormy.');

        const idx = this.planes.findIndex((p) => p.id === plane.id);

        if (idx === -1)
            throw new Error('Cannot release a Plane which is not at this Airport.');
        if (plane.status !== 'departing')
            throw new Error('Cannot release a Plane which is not departing.');

        this.planes.splice(idx, 1);
    }

    isFull() {
        return this.capacity === this.planes.length;
    }

    hasPlane(plane) {
        return this.planes.some((p) => p.id === plane.id);
    }
}

module.exports = Airport;
