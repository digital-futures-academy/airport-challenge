class Airport {
    constructor(capacity = 10) {
        this.capacity = capacity;
        this.planes = [];
    }
  
    land(plane) {
        // Land the plane at the airport
        if (this.isFull()) {
            throw new Error ('Airport is full');
        }

        if (plane.isLanded) {
            throw new Error ('Plane is already landed');
        }

        // Land the plane at the airport
        plane.land();
        this.planes.push(plane);
        
    }

    takeOff(plane) {
        // Allow the plane to take off from the airport
        
        if (!plane.isLanded) {
            throw new Error ('Plane is not landed');
        }
        
        if(!this.planes.includes(plane)) {
            throw new Error('Plane is not at the airport');
        }
        
        plane.takeOff();
        this.planes = this.planes.filter((p) => p !== plane);
    }

    isFull() {
        // If airport is full
        return this.planes.length >= this.capacity;
    }

    setCapacity(newCapacity) {
        this.capacity = newCapacity;
    }
}

module.exports = Airport;  

