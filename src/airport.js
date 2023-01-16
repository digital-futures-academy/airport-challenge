const Plane = require(`./Plane`);

class Airport {
    
    planesLanded = [];
    capacity = 10;

    landPlane = plane => {
        if (plane instanceof Plane && this.planesLanded.length < this.capacity) this.planesLanded.push(plane);
    };

    takeOff = plane => {
        const indexOfPlane = this.planesLanded.findIndex(planeLanded => planeLanded.id === plane.id);
        console.log(indexOfPlane);

        //if (indexOfPlane) {
            this.planesLanded.splice(indexOfPlane, 1);
       // }
    }

    changeCapacity = capacity => {
        if (typeof capacity === "number" && capacity > 0 && capacity % 1 === 0) this.capacity = capacity;
    }
}

module.exports = Airport;
