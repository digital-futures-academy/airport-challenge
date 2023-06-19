class Airport {
    constructor(name) {
        this.name = name;
        this.planes = [];
    }


    landPlane(plane) {
        plane.landed = true;
        this.planes.push(plane);
        plane.isLanded();
    }
}
export default Airport;