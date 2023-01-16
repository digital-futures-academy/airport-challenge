const Plane = require(`./Plane`);

class Airport {
    
    planesLanded = [];
    capacity = 10;

    landPlane = plane => {
        if (this.planesLanded.includes(plane))
            return console.log(`This plane is on the ground.`);

        if (plane instanceof Plane && this.planesLanded.length < this.capacity) this.planesLanded.push(plane);
    };

    takeOff = plane => {
        const indexOfPlane = this.planesLanded.findIndex(planeLanded => planeLanded.id === plane.id);

        if (indexOfPlane > -1) {
            this.planesLanded.splice(indexOfPlane, 1);
            console.log(`${plane.id} has taken off.`); 
            if (this.planesLanded.length > 0) {
                console.log(`The remaining planes are:`);
                for (let i = 0; i < this.planesLanded.length; i++)
                    console.log(this.planesLanded[i].id);
            }
            else
                console.log(`There are no planes on the ground.`);
        }
    }

    changeCapacity = capacity => {
        if (typeof capacity === "number" && capacity > 0 && capacity % 1 === 0) this.capacity = capacity;
    }
}

module.exports = Airport;
