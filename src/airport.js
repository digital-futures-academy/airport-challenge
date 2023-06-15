
class Airport {
    airportPlanes = [];

    landPlane() { 
        return (this.airportPlanes = [...this.airportPlanes, plane]);
    }

}

module.exports = Airport;
