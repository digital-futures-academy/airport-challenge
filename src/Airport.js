class Airport {

    airportPlanes = [];
    airportCapacity = 5;

    landPlane(plane) { 
        if (this.airportPlanes.length >= this.airportCapacity) {
            return new Error('Airport is full!');
        }
        
        else if (isNaN(plane) && !this.airportPlanes.includes(plane)) {
            return (this.airportPlanes = [...this.airportPlanes, plane]);
        }
        
    };

    takeoffPlane(plane) { 
        const index = this.airportPlanes.indexOf(plane);
        if (index !== -1) {
            return this.airportPlanes.splice(index, 1);
        }
        else if (this.airportPlanes.indexOf(plane === -1)) {
            return new Error('This plane is not at the airport');
        }
    }; 

    overrideCapacity(number) {
        if (number === null || (typeof number === 'string')) {
            return new Error('Please enter a number');
        }
        return this.airportCapacity = number;
    };
}

module.exports = Airport;