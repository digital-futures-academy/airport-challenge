class Airport {

    constructor(listPlanes = [], maxCapacity = 10) {
        this.listPlanes = listPlanes;
        this.maxCapacity = maxCapacity;
    }

    landPlane(plane) {
        const indx = this.findPlane(plane);
        if (indx === -1 && !this.isAirportFull()) {
            this.listPlanes.push(plane);
        } else {
            if (this.isAirportFull()) {
                console.log('Airport at max capacity, cannot land plane');
            } else {
                console.log('Plane is already at airport');
            }
        }
    }

    sendPlane(plane) {
        const indx = this.findPlane(plane);
        if (indx === -1) {
            console.log('Plane does not exist in airport');
        } else {
            this.listPlanes.splice(indx, 1);
        }
    }

    getCurrentCapacity() {
        return this.listPlanes.length;
    }

    setMaxCapacity(capacity) {
        this.maxCapacity = capacity;
    }

    getMaxCapacity() {
        return this.maxCapacity;
    }

    isAirportFull() {
        return this.listPlanes.length === this.maxCapacity;
    }

    isPlaneInAirport(plane) {
        return this.listPlanes.indexOf(plane) !== -1;
    }

    findPlane(plane) {
        return this.listPlanes.indexOf(plane);
    }

}

module.exports = Airport;
