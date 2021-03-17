class Airport {
    constructor(airport_capacity = 2, stormy = false){
        this.airport_capacity = airport_capacity;
        this.current_planes = [];
        this.stormy = stormy;
    }
  
    land(plane_name){
        if(!this.stormy){
            if(this.isfull()){
                this.current_planes.push(plane_name);
                return this.current_planes;
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
        if(this.current_planes.length < this.airport_capacity){
            return true;
        }
        return false;
    }

    takeoff(plane_name){
        if(!this.stormy){
            if(this.avoidConfusion(plane_name)){
                let index = this.current_planes.indexOf(plane_name);
                this.current_planes.splice(index, 1);
                return this.current_planes;
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
        if(this.current_planes.includes(plane_name)){
            return true;
        }
        return false;
    }

    isStormy(stromy){
        this.stormy = stromy;
    }

    currentAmountOfPlanes(){
        return this.current_planes.length;
    }
}

module.exports = Airport;
