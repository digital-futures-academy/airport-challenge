class Airport {
    constructor(capacity = 10, planes = []) {
        try {
            if (!(planes instanceof Array) || capacity < 0) throw new Error('Error! Bad input for airport constructor');
            this.planes = planes;
            this.capacity = capacity;
            this.weather = Math.random();
        } catch (err) {
            console.log('Error! Bad input for airport constructor');
        }
    }

    landPlane(plane) {
        if (plane.status === 'landed') return 'Plane cannot land when already landed';
        if (this.isStormy()) return 'Stormy weather. Plane cannot land';
        if (this.isAirportFull()) return 'Airport is full. Unable to land plane';
        this.planes.push(plane);
        plane.status = 'landed';
    }

    takeOff(plane) {
        if (plane.status === 'flying') return 'Plane cannot take off when already flying';
        if (this.isStormy()) return 'Stormy weather. Plane cannot take off';
        this.planes.splice(this.planes.indexOf(plane), 1);
        plane.status = 'flying';
    }

    updateCapacity(extra) {
        this.capacity += extra;
    }

    isAirportFull() {
        return this.planes.length >= this.capacity ? true : false;
    }

    isPlaneAtAirport(plane) {
        if (this.planes.indexOf(plane) < 0) return false;
        return true;
    }

    isStormy() {
        return this.weather <= 0.1 ? true : false;
    }

    countPlanes() {
        return this.planes.length;
    }

}

module.exports = Airport;
