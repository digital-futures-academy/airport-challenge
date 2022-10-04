class Airport {
    arrPlanes;
    capacity;
    weather;

    constructor() {
        this.arrPlanes = [];
        this.capacity = 3;
        this.weather = Math.random();
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
        if (this.checkPlaneID(planeToTakeOff) && this.checkWeather()) {
            let planeIndex = this.arrPlanes.indexOf(planeToTakeOff);
            this.arrPlanes.splice(planeIndex, 1);
            return console.log(`The weather is sunny, ${planeToTakeOff} cleared for take off`);
        } else if (!this.checkWeather()) {
            return console.log('Alert: The weather is stormy, we are unable to allow take off due to the severe weather conditions.');
        } else if (!this.checkPlaneID(planeToTakeOff)) {
            return console.log('Error: Plane is currently not at airport. Please double-check your ID number and make a new request to take off.');
        }
    }

    checkPlaneID(plane) {
        if (this.arrPlanes.includes(plane)) {
            return true;
        }
    }

    checkWeather() {
        if (this.weather >= 0.2) {
            return true;
        }
    }
}

module.exports = Airport;
