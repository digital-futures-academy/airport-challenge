const Weather = require('./Weather.js');

class Airport extends Weather {

    airportPlanes = [];
    airportCapacity = 5;

    landPlane(plane) {
        if (this.airportPlanes.length >= this.airportCapacity) {
            return new Error('Airport is full!');
        }
        if (isNaN(plane) && !this.airportPlanes.includes(plane)) {
            if (this.currentWeather == "Stormy") {
                return this.weatherChecker();
            }
        else return (this.airportPlanes = [...this.airportPlanes, plane]);
        }
    };

    takeoffPlane(plane) { 
        const index = this.airportPlanes.indexOf(plane);
        if (index !== -1) {
            if (this.currentWeather === "Stormy") {
                return this.weatherChecker();
            }
        else return this.airportPlanes.splice(index, 1);
        }
        if (this.airportPlanes.indexOf(plane === -1)) {
            return new Error('This plane is not at the airport');
        }
    }; 

    overrideCapacity(number) {
        if (number === null || (typeof number === 'string')) {
            return new Error('Please enter a number');
        }
        return this.airportCapacity = number;
    };

    weatherChecker() {
        return new Error('There is a storm, planes are not permitted for take off or land.');
    }

}

module.exports = Airport;