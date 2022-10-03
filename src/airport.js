class Airport {

    constructor() {
        this.arrPlanes = [];
        this.capacity = 3;
    }

    land(plane) {
        if (this.isCapacityFull()) {
            return console.log('Sorry, airport is full.');
        }
        if (this.checkPlaneID(plane)) {
            return console.log('Error: Plane is already at airport. Please double-check your ID number and make a new request to land.');
        }
        else {
            this.arrPlanes.push(plane);
            return console.log(`${plane} cleared for landing!`);
        }
    }

    setCapacity(newCapacity) {
        this.capacity = newCapacity;
        return this.capacity;
    }

    isCapacityFull() {
        if (this.arrPlanes.length >= this.capacity) {
            return true;
        }
    }

    takeOff(planeToTakeOff) {
        if (this.checkPlaneID(planeToTakeOff)) {
            let planeIndex = this.arrPlanes.indexOf(planeToTakeOff);
            this.arrPlanes.splice(planeIndex, 1);
            return console.log(`${planeToTakeOff} cleared for take off`);
        } else {
            return console.log('Error: Plane is currently not at airport. Please double-check your ID number and make a new request to take off.');
        }
    }

    checkPlaneID(plane) {
        if (this.arrPlanes.includes(plane)) {
            return true;
        }
    }

}

module.exports = Airport;
