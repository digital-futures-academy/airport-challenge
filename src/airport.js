class Airport {
    constructor(airport_capacity = 20, stormy = false){
        this.airport_capacity = airport_capacity;
        this._current_planes = [];
        this.stormy = stormy;
    }
  
    land(plane_name){
        if(!this.stormy){
            if(this.isfull()){
                if(!this.avoidConfusion(plane_name)){
                    this._current_planes.push(plane_name);
                    return this._current_planes;
                }
                else{
                    return 'Plane has already Landed.';
                }
            }
            else{
                return 'Airport is currently full';
            }
        }
        else{
            return 'Bad weather unable to land';
        }
    }
  
    isfull(){
        if(this._current_planes.length < this.airport_capacity){
            return true;
        }
        return false;
    }

    takeoff(plane_name){
        if(!this.stormy){
            if(this.avoidConfusion(plane_name)){
                let index = this._current_planes.indexOf(plane_name);
                this._current_planes.splice(index, 1);
                return this._current_planes;
            }
            else{
                return 'This plane if not currently here';
            }
        }
        else{
            return 'Bad weather unable to take off';
        }
    }

    avoidConfusion(plane_name){
        if(this._current_planes.includes(plane_name)){
            return true;
        }
        return false;
    }

    isStormy(stormy){
        this.stormy = stormy;
    }

    currentAmountOfPlanes(){
        return this._current_planes.length;
    }

    get current_planes(){
        return this._current_planes;
    }
}

module.exports = Airport;
