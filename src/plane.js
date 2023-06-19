class Plane {
    flightNumber;
    landed;
    constructor(flightNumber) {
        this.flightNumber = flightNumber;
        this.landed = false;
    }

    isLanded() { return this.landed }
}
export default Plane;