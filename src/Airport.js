
class Airport {

    airportPlanes = [];
    airportCapacity = 5;

    // isAirportFull() { 
    //     if (this.airportPlanes.length < this.airportCapacity) {
    //         return new Error('Airport is full!');
    //     }
    // };

    landPlane(plane) { 
        if (this.airportPlanes.length >= this.airportCapacity) {
            return new Error('Airport is full!');
        }
        
        else if (!this.airportPlanes.includes(plane) && isNaN(plane) && (!null)) {
            return (this.airportPlanes = [...this.airportPlanes, plane]);
        }
        
    };

    overrideCapacity(number) {
        if (number === null) {
            return new Error('Please enter a number');
        }
        else return this.airportCapacity = number;
    };
}

module.exports = Airport;