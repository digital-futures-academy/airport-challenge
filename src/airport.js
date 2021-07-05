class Airport {
    constructor(capacity) {
        this.runway = [];
        this.capacity = capacity || 50;
        this.total = 0;
    }

    landPlane(plane) {
        for (let i = 0; i < plane.length; i++) {
            if (this.airportChecker(plane[i])) {
                return `${plane} is already in the airport`;
            }
            if (this.airportCapacity()) {
                return `Airport is full. Do not land ${plane}`;
            }
            else {
                this.runway.push(plane[i]);
                this.total++;
            }
            return this.runway;
        }
    }
  
  
    overrideCapacity(planes) {
        if (this.total >= 0) {
            return this.capacity += planes;
        } 
        else {
            return this.capacity;
        }
    }

    airportCapacity() {
        if (this.total >= this.capacity){
            return true;
        } 
        else { return false; 
        }
    }

    takeOff(plane) {
        for (let i = 0; i < plane.length; i++) {
            if (this.airportChecker(plane[i])) {
                return `${plane} has taken off and is no longer in the airport`;
            }
            else if (!this.airportChecker(plane[i])) { 
                return `${plane} cannot take off, it is not in the airport`;
            }
            else {
                const index = this.runway.indexOf(plane);
                this.runway.splice(index, 1);
                this.total--;
            }
            return this.runway;
        }
    }
    
    airportChecker(plane) {
        if (this.runway.includes(plane)) {
            return true;
        }
        else {
            return false;
        }
    }
}
      

module.exports = Airport;
