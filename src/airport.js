class Airport {
    planes = [];
    constructor(capacity1) {
        this.capacity1 = capacity1;
       
    }
    //land
    land(plane) {
        this.planes.push(plane);
        return this.planes;
    }

    //default capacity
    
    capacity(planes) {
        let defaultCapacity = 0;
        let newCapacity;
        if (defaultCapacity < 0) {
            return 'error';
        } else if (defaultCapacity > planes.length) {
            return 'error';
        } else newCapacity = planes;
        return newCapacity;
    }

    //airport full
    airportFull() {
        if (this.planes.length >= this.capacity1) {
            return 'Airport is full';
        } else {
            return 'Space available';
        }
    }

    //plane take off
    takeOff() {
        this.planeList.pop();
        return this.planeList;
    }

    isLanded(landed) {
        if (landed === true) {
            return true;
        } else {
            return false;
        }
    };

    isFlying(flying) {
        if (flying === true) {
            return true;
        } else {
            return false;
        }
    };

    
    
    //avoiding confusion

    prevention(takeOff, land) {
        if (this.capacity1.includes(takeOff.plane)) {
            return 'Error: Plane has already taken off';
        } else if (this.capacity.includes(land.plane)) {
            return 'Error: Plane has already landed';
        } else { 
            return 'No errors here';
        }
    }
    };



module.exports = Airport;
