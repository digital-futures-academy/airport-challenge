class Airport {
    constructor(capacity = 3){
        this.hangar = [];
        this._capacity = capacity;
        this.isFull = false;
    }

    get capacity() {
        return this._capacity;
    }

    landPlane(plane){
        if(this.hangar.includes(plane)){
            return 'This plane has already landed';
        }

        if(this.checkIfFull()){
            return 'Sorry, unable to land as airport is full';
        }
        this.hangar.push(plane);
        return this.hangar;
    }

    checkIfFull(){
        if(this.hangar.length >= this.capacity){
            this.isFull = true;
        }
        return this.isFull;
    }

    takeOff(plane){
        if(this.hangar.includes(plane)){
            this.hangar.splice(this.hangar.indexOf(plane), 1);
            plane.isFlying();
            return `Plane ${plane.name}, has departed.`;
        } else {
            return 'This plane is not in the aiport';
        }
    }

}

module.exports = Airport;
