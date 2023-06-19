class Airport {
    constructor(name) {
        this.name = name;
        this.capacity = 5;
        this.weatherType = ['stormy', 'calm']
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
        const randomNumber = Math.floor(Math.random() * 2);
        return this.weatherType[randomNumber];
    }

    isPlaneAtAirport(plane) {
        if (plane.landed === true && this.planesAtAirport.includes(plane)) {
            return true;
        } else { return false };
    }
}
export default Airport;