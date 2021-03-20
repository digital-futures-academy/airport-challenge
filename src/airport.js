class Airport{
    constructor(airportCapacity = 20){
        this.airportCapacity = airportCapacity;
        this._hanger = [];
    }

    land(plane, stormy, cls){
        if(!stormy){
            if(!this.isFull()){
                this._hanger.push(plane);
                cls.flying = false;
                return this._hanger;
            }
            else{
                return 'Airport is full unable to land.';
            }
        }
        else{
            return 'Bad Weather unable to land.';
        }
    }

    takeoff(plane, stormy, cls){
        if(!stormy){
            if(this._hanger.includes(plane)){
                let index = this._hanger.indexOf(plane);
                this._hanger.splice(index, 1);
                cls.flying = true;
                return this._hanger;
            }
            else{
                return 'Plane is not in the airport';
            }
        }
        else{
            return 'Bad Weather unable to takeoff';
        }
    }

    isFull(){
        if(this._hanger.length < this.airportCapacity){
            return false;
        }
        return true;
    }
}

module.exports = Airport;