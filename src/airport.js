class Airport {
    constructor(capacity = 10) {
        this.capacity = capacity;
        this.planes = [];
    }
  
    land(plane) {
        // Land the plane at the airport
        if (this.isFull()) {
            throw new Error('Airport is full');
        }

        if (plane.isLanded) {
            throw new Error('Plane already landed');
        }
        
    }

    takeOff(plane) {
        // Allow the plane to take off from the airport
        if (!plane.isLanded) {
            throw new Error('Plane not landed');
        }
    }

    isFull() {
        // If airport is full
        return this.planes.length >= this.capacity;
    }
}

module.exports = Airport;  

