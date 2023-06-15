
class Airport {
    airportPlanes = [];

    landPlane(plane) { 
        if (!this.airportPlanes.includes(plane) && isNaN(plane) && (!null)) {
            return (this.airportPlanes = [...this.airportPlanes, plane]);
        }
    }
}

module.exports = Airport;
