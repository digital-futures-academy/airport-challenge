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

        if (!this.planesStanding.includes(plane)) {
            throw new Error('Plane not at the airport');
        }
        this.planesStanding = this.planesStanding.filter((standingPlane) => {
            standingPlane.id != plane.id
        });

        return `plane took off, bon Voyage!`
    }

    fullAirport() {
        return this.planesStanding.length >= this.airportCapacity;
    };
}
module.exports = Airport;