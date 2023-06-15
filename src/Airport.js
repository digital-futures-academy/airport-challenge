
class Airport {

    airportPlanes = [];
    airportCapacity = 5;
    

    landPlane(plane) { 
        if (!this.airportPlanes.includes(plane) && isNaN(plane) && (!null) && this.airportPlanes.length < this.airportCapacity) {
            return (this.airportPlanes = [...this.airportPlanes, plane]);
        }
    };

    overrideCapacity(number) {
        if ((number === null) || (typeof String)) {
            return new Error('Only planes can land at the airport!');
        }
        return this.airportCapacity = number;
    };
}

module.exports = Airport;