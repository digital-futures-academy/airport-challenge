class Airport {
    constructor(name) {
        this.name = name;
        this.capacity = 5;
        this.planes = [];
    }


    landPlane(plane) {
        plane.landed = true;
        this.planes.push(plane);
        plane.isLanded();
    }

    setAirportCapacity(newCapacity) {

    }
}
export default Airport;