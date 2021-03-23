class Plane {
    constructor(name, flying = true, isInAirport = false){
        this._name = name;
        this._flying = flying;
        this._isInAirport = isInAirport;
    }
    
    get name(){
        return this._name;
    }
    
    get flying(){
        return this._flying;
    }

    land(){
        this._flying = false;
        return this._flying;
    }

    takeOff(){
        this._flying = true;
        return this._flying;
    }

    addToAirport(){
        if(this.flying){
            return `${this.name} is currently in the air.`;
        }
        this._isInAirport = true;
        return this._isInAirport;

    }

    removeFromAirport(){
        if(!this.flying){
            return `${this.name} is still grounded at airport.`;
        }
        this._isInAirport = false;
        return this._isInAirport;
    }
}

module.exports = Plane;