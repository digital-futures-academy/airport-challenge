class Airport{
    constructor(capacity){
        this._capacity = capacity; 
        this.planes = [];  
    }

    isStormy(arg){
        if (arg === 0){
            return 1 === Math.floor((Math.random() * 10) + 1);
        }
        else if (arg === 1){
            return false; 
        }
        else{
            return true; 
        }
    }
    setCapacity(capacity){
        if(capacity < 1){
            return 'Cannot have less than one plane';
        }
        else if (capacity < this.planes.length){
            return 'More planes than capacity';
        }
        else{
            this._capacity = capacity; 
        }
    }

    land(plane, isStormy = 0){
        isStormy = this.isStormy(isStormy); 
        if (isStormy){
            return 'Landing denied, stormy';
        }
        else if (this.planes.length >= this._capacity){
            return 'Airport Full';
        }
        else if(this.planes.includes(plane)){
            return 'Plane present in airport'; 
        }
        else{
            this.planes.push(plane); 
            return this.planes; 
        }
    }

    takeOff(plane, isStormy = 0){
        isStormy = this.isStormy(isStormy); 
        if (isStormy){
            return 'Landing denied, stormy';
        }
        else if (!this.planes.includes(plane)){
            return 'Plane not present in airport'; 
        }
        else{
            this.planes.splice(this.planes.indexOf(plane), 1); 
            return this.planes; 
        }
    }

}
module.exports =  Airport; 