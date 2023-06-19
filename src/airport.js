class Airport {
    constructor(name) {
        this.name = name;
        this.capacity = 5;
        this.planesAtAirport = [];
    }


    landPlane(plane) {
        plane.landed = true;
        this.planesAtAirport.push(plane);
        plane.isLanded();
    }

    setAirportCapacity(newCapacity) {
        this.capacity = newCapacity;
    }

    getAirportCapacity() {
        return this.capacity;
    }
}
export default Airport;