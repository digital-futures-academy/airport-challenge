class Airport {
    // here's a starting point for you
    constructor() {
        this.planes = [],
        this.capacity = 100,
        this.weather = Math.floor((Math.random() * 100) + 1);
    }

    landPlane(plane) {
        if (plane.hasLanded() === true) {
            return 'This plane has already landed!';
        } else if (this.weather <= 5) {
            return 'It\'s too stormy! No planes can land!';
        } else if (this.planes.length < this.capacity) {
            this.planes.push(plane._name);
            plane.land();
            return this.planes;
        } else {
            return 'Abort landing! The airport is full!';
        }
    }

    capacityOverride(num) {
        this.capacity = num;
        return this.capacity;
    }

    takeOff(plane) {
        if (plane.hasLanded() === false) {
            return 'This plane has already taken off!';
        } else if (this.inAirport(plane) === false) {
            return 'This plane is not in this airport!';
        } else if (this.weather <= 5) {
            return 'It\'s too stormy! No planes can take off!';
        } else {
            let index = this.planes.indexOf(plane._name);
            this.planes.splice(index, 1);
            plane.takeOff();
        }
        return this.planes;
    }

    inAirport(plane) {
        if (this.planes.includes(plane._name)) {
            return true;
        } else {
            return false;
        }
    }
}


module.exports = Airport;
