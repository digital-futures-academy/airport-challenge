class Airport {
    constructor(capacity) {
        this.runway = [];
        this.capacity = capacity || 50;
        this.total = 0;
    
    }

    landPlane(plane) {
        if (this.airportCapacity()) {
            return `Do not land ${plane}`;
        }
        else {
            this.runway.push(plane);
            this.total++;
        }
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

    airportCapacity() {
        if (this.total >= this.capacity){
            return true;
        } 
        else { return false; 
        }
    }

    
}
      

module.exports = Airport;

// let airport = new Airport(2)
// airport = airport.landPlane("plane1")
// console.log(airport)