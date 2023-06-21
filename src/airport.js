class Airport{
    capacity = 5;
    planeIds = [];


    landPlane(planeId) {
        if (this.isAirportFull())
            { throw Error('Airport is full') };
        if (this.isPlaneInAirport(planeId)) {
            throw Error(`Plane with Id ${planeId} already in Airport`);
        }
        if (planeId !== null && planeId !== undefined) { this.planeIds = [...this.planeIds, planeId] };
    }

    overrideCapacity(number) {
        if (typeof number === 'number') {
            if (number > -this.capacity) { return this.capacity += number };
            throw Error('Airport capacity cannot be reduced to less than 0')
        };
        throw Error('Not a number');
    }

    isAirportFull() {
        return this.capacity === this.planeIds.length;
    }

    takeOff(planeId) {
        if (this.isPlaneInAirport(planeId)) {
            const index = this.planeIds.indexOf(planeId);
            return this.planeIds.splice(index, 1);
        }
        throw Error(`Plane with Id ${planeId} not in Airport`);
    }

    isPlaneInAirport(planeId) {
        return this.planeIds.includes(planeId);
    }
}

export default Airport;
