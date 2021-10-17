class Airport {
    constructor(capacity) {
        this.planes = [];
        this.capacity = capacity;
       
    }
    //land
    land(plane) {
        this.planes.push(plane);
    }

    //default capacity
    
    defaultCapacity(planes) {
        let defaultCapacity = 0;
        if (defaultCapacity < 0) {
            return 'error';
        } else if (defaultCapacity > planes.length) {
            return 'error';
        } else defaultCapacity += planes;
    }
    
    //airport full
    airportFull() {
        if (this.planes.length >= this.capacity) {
            return 'Airport is full';
        } else {
            return 'Space available';
        }
    }

    //plane take off
    takeOff(plane) {
        this.planes.pop(plane);
        return 'This plane is no longer in the airport';
    }
    //avoiding confusion

    prevention(takeOff, land) {
        if (this.capacity.includes(takeOff.plane)) {
            return 'Error: Plane has already taken off';
        } else if (this.capacity.includes(land.plane)) {
            return 'Error: Plane has already landed';
        } else { 
            return 'No errors here';
        }
    }
}

module.exports = Airport;
