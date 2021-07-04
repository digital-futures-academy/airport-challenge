class Airport{
    constructor(capacity){
        this._capacity = capacity; 
        this.planes = [];  
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

    takeOff(plane){
        if (!this.planes.includes(plane)){
            return 'Plane not present in airport'; 
        }
        else{
            this.planes.splice(this.planes.indexOf(plane), 1); 
            return this.planes; 
        }
    }

}
module.exports =  Airport; 