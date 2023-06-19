class Airport {

    constructor(name) {
        this.name = name;
        this.weatherType = ['stormy', 'calm'];
        this.capacity = 5;
        this.planesAtAirport = [];
    }


    landPlane(plane) {
        plane.landed = true;
        this.planesAtAirport.push(plane);
        plane.isLanded();
    }

    takeOffPlane(plane) {
        plane.landed = false;
        this.planesAtAirport = this.planesAtAirport.filter(function (planes) {
            return planes !== plane;
        });
        this.planesAtAirport.push(plane);
        plane.isLanded();
    }

    setAirportCapacity(newCapacity) {
        this.capacity = newCapacity;
    }

    getAirportCapacity() {
        return this.capacity;
    }

    checkWeather() {
        // const randomNumber = Math.floor(Math.random() * this.weatherType.length);
        // return this.weatherType[randomNumber];
        const randomWeather = this.weatherType[Math.floor(Math.random() * this.weatherType.length)];
        return randomWeather;

    }

    isPlaneAtAirport(plane) {
        if (plane.landed === true && this.planesAtAirport.includes(plane)) {
            return true;
        } else { return false };
    }
}
export default Airport;