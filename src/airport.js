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
    orderTakeOff(plane) {
        if (this.planesStanding.includes(plane)) {
            let index = this.planesStanding.indexOf(plane);
            this.planesStanding.splice(index, 1);
            return this.planesStanding;
        } else {
            return 'Sorry, I do not recognize that plane';
        }
    }

    fullAirport() {
        return this.planesStanding.length >= this.airportCapacity;
    };
}
module.exports = Airport;