class Plane {
    isAtAirport(airport) {
        return airport.parkingLot.includes(this);
    }
}

module.exports = Plane;