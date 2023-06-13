class Airport {
    planesStanding = [];
    airportCapacity = 10;

    landPlane(plane) {
        if (this.fullAirport()) {
            return `Sorry, no room for you to park`
        } else if (plane?.id) {
            this.planesStanding.push(plane)
        }

    }

    fullAirport() {
        return this.planesStanding.length >= this.airportCapacity;
    }
};

module.exports = Airport;