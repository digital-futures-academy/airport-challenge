class Airport {
    constructor(ID, size) {
        this.ID = ID;
        this.size = [];

    }
    landAirplane(plane) {
        this.size.push(plane);
    };
}



module.exports = Airport;