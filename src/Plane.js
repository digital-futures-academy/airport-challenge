class Plane {
    constructor(planeID, location = 'In flight') {
        this.planeID = planeID;
        this.location = location
    }

    planeLocation = (airport) => {
        if (airport.planesAtAirport.includes(this.planeID)) {
            return this.location = airport.name;
        }
    }
}

module.exports = Plane;