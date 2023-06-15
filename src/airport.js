class Airport {

    constructor(airportCapacity, planesStanding) {
        this.airportCapacity = 10;
        this.planesStanding = [];
    }
    landPlane(plane) {
        if (this.fullAirport()) {
            return `Sorry, no room for you to park`;
        } else if (plane?.id && !this.planesStanding.includes(plane)) {
            this.planesStanding.push(plane);
        } else {
            console.log(plane.id, `is already here`);
        }
    }

    orderTakeOff(plane) {
        if (this.planesStanding.includes(plane)) {
            let index = this.planesStanding.indexOf(plane);
            this.planesStanding.splice(index, 1);
            console.log(plane.id, `took off`);
        } else {
            console.log(plane.id, `is not at the airport`);
        }
    }

    fullAirport() {
        return this.planesStanding.length >= this.airportCapacity;
    };
}
module.exports = Airport;