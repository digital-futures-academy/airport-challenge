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

}
module.exports =  Airport; 