//const Plane = require("./plane");

class Airport {
    // here's a starting point for you
    constructor(name){
        this.name = name;
        this.planes = [];
        // Default capacity is 20. 
        this.capacity = 20; 
    }

    land (plane) {   
        if (plane.flyingStatus === 'landing'){

            if (this.planes.length < this.capacity) {
                plane.flyingStatus = 'landed';
                this.planes.push(plane);
                return 'The plane has landed.';
            } else {
                return 'Sorry, unable to land, the aiport is full.';
            }

         } else {
            return 'Sorry, that plane can not land at this time'
        }
    }

    changeCapacity(newCapacity){
        this.capacity = newCapacity; 
    }

    takeOff(plane){  
        const planeBay = this.planes.indexOf(plane); 
        const takeOffPlane = this.planes[planeBay];

        if (takeOffPlane.flyingStatus === 'take off'){
            this.planes.splice(planeBay, 1);

            return `Plane ${takeOffPlane.name} has taken off. There are now ${this.planes.length} planes.`;
        } else {
            return "Sorry unavailable for take off."
        }
      
    }
    
}

module.exports = Airport;
