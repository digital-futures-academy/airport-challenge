class Airport {
    constructor() {
        this.airportCapacity = 10;
        this.airportPlanes = [];
        this.weatherMapping = {
            1: 'sunny',
            2: 'stormy',
        };
    }

    landPlane(plane) {
        if (this.isStormy()) {
            throw new Error('Cannot land due to stormy weather.');
        }

        if (this.isFull()) {
            throw new Error('Airport is full. Cannot land plane.');
        }

        this.airportPlanes.push(plane);
    }

    setCapacity(capacity) {
        this.airportCapacity = capacity;
    }

    isFull() {
        return this.airportPlanes.length >= this.airportCapacity;
    }

    takeOff(plane) {
        if (this.isStormy()) {
            throw new Error('Cannot take off due to stormy weather.');
        }

        if (!this.isInAirport(plane)) {
            throw new Error('Plane is not in the airport.');
        }

        const index = this.airportPlanes.indexOf(plane);
        this.airportPlanes.splice(index, 1);
    }

    isInAirport(plane) {
        return this.airportPlanes.includes(plane);
    }

    isStormy(randomGenerator = Math.random) {
        return false;
        // const randomNumber = randomGenerator();
        // return randomNumber > 0.5; // 50% chance: true for stormy, false for sunny
    }

    confirmLanding(plane) {
        return this.airportPlanes.includes(plane);
    }
}

module.exports = Airport;