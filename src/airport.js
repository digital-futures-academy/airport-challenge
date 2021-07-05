class Airport {
    constructor(name,capacity = 20){
        this._name = name;
        this._planes = []; 
        this._capacity = capacity; 
    }

    // Getters
    get name () {
        return this._name;
    }
    get planes () {
        return this._planes;
    }
    get capacity () {
        return this._capacity;
    }
    // Setters 
    set capacity (newCapacity) {
        this._capacity = newCapacity; 
    }

    land (plane) {   
        if (plane.flyingStatus === 'landing'){

            // Should introduce an internal method that checks if the airport is full.

            if (this.planes.length < this.capacity) {
                // The flying status internal property shouuld be set by the plane class. 
                plane.flyingStatus = 'landed';
                // The above line should be amended to call the internal method contained in the plane class. 
                this.planes.push(plane);
                return 'The plane has landed.';
            } else {
                return 'Sorry, unable to land, the aiport is full.';
            }

         } else {
            return 'Sorry, that plane can not land at this time'
        }
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
