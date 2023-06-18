class Airport {
    constructor() {
        this.capacity = 10;
        this.airportPlanes = [];
        this.weather = 'sunny';
    }

    landPlane(plane) {
        if (this.airportFull() || this.weather === 'stormy') {
            this.airportPlanes.pop(plane);


        }
        //plane.landStatus();
        this.airportPlanes.push(plane);
    }

    takeOffPlane(plane) {
        if (this.weather === 'stormy') {
            this.airportPlanes.push(plane);
        }

        this.airportPlanes.pop(plane);
    }

    setWeather(weather) {
        this.weather = weather;
    }

    airportFull() {
        return this.airportPlanes.length >= this.capacity;
    }

    countPlanesAtAirport() {
        return this.airportPlanes.length;
    }


}


export default Airport;
// module.exports = {
//     Airport,
// }