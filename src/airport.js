class Airport {
    planesAtAirport = [];
    capacity;
    weather;

    constructor(capacity = 10) {
        this.capacity = capacity
        this.weather = Math.random();
    }

    landPlane(plane) {
        let foundIndex = this.planesAtAirport.findIndex(planeInAirport => planeInAirport === plane);
        if (foundIndex > -1) return new Error(`${plane} has already landed`);
        if (this.planesAtAirport.length >= this.capacity) return new Error(`Airport full`);
        if (this.isStormy()) return new Error(`The weather is stormy. Cannot land.`)
        this.planesAtAirport = [...this.planesAtAirport, plane];
    }

    takeOff(plane) {
        let foundIndex = this.planesAtAirport.findIndex(planeInAirport => planeInAirport === plane);
        if (foundIndex == -1) return new Error(`${plane} is not at this airport`)
        if (this.isStormy()) return new Error(`The weather is stormy. Cannot takeoff.`)
        this.planesAtAirport.splice(foundIndex, 1)
    }

    isStormy() {
        return this.weather <= 0.2 ? true : false;
    }

    //For testing
    setWeather(weather) {
        return this.weather = weather;
    }
}

module.exports = Airport;


