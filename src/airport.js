class Airport {
    constructor(capacity) {
        this.runway = [];
        this.capacity = capacity || 50;
        this.total = 0;
    
    }

    landPlane(plane) {
        this.runway.push(plane);
        return this.runway;
    }
  
  
    overrideCapacity(planes) {
        if (this.total >= 0) {
            return this.capacity += planes;
        } 
        else {
            return this.capacity;
        }
    }
}
      

module.exports = Airport;
