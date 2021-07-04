class Airport{
    constructor(capacity){
        this._capacity = capacity; 
        this.planes = [];  
    }
    setCapacity(capacity){
        if (capacity < this.planes.length){
            return 'More planes than capacity';
        }
        else if(capacity < 0){
            return 'Cannot have less than one plane';
        }
        else{
            this._capacity = capacity; 
        }
    }

    land(plane){
        if (this.planes.length >= this._capacity){
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

}
module.exports =  Airport; 