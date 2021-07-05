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

    // Methods
    isFull() {
        return this.planes.length >= this.capacity
    }

    find(plane){
        return this.planes.indexOf(plane)
    }

    land (plane) {  

        if (this.isFull()){
            return 'Sorry, unable to land, the aiport is full.'
        } 
        
        if (plane.flyingStatus === 'landing'){
            // Update the flying status to landing
            plane.landed();
            // Add plane to the plane array
            this.planes.push(plane);
            return 'The plane has landed.';
            } else {
            return 'Sorry, that plane can not land at this time'
        }
    }

    takeOff(plane){  
        if (plane.flyingStatus === 'take off'){
            // Remove plane from the planes array
            this.planes.splice(this.find(plane), 1);
            // Set the flying status of the plane to 'take off'
            plane.takeOff()
            return `Plane ${plane.name} has taken off. There are now ${this.planes.length} planes.`;           
        } else {
            return "Sorry unavailable for take off."
        }
      
    }
    
}

module.exports = Airport;
