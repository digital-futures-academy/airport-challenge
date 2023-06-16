class Airport {
    constructor() {
     this.airport1 = []
    }

    add(plane) {
        this.airport1.push(plane);
        console.log(this.airport1)
        return this.airport1.length;
    }
}
export default Airport;