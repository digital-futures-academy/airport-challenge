class Plane {

    id;
    status;
    airport;

    constructor(id) {
        this.id = id;
        this.status;
        this.airport = "";
    }

    isLanded() {

    }

    airportName(airportName) {
        this.airport = airportName
    }

}

module.exports = Plane;