class Airport {
  
    constructor(x = 6) {
        this.planes = [];
        // airportCapacity refers to airport capacity
        this.capacity = x;
        
   
  
    }
    add(plane) {
        if(this.planes.includes(plane) ) {
            console.log('plane already landed');
            return 'plane already landed';
        }
        if(this.planes.length < this.capacity){
            // insert item into items array
            this.planes.push(plane);
            // return the array
            return this.planes;
        } else return('capacity full');
        {
            return 0;
        }
    }

    remove(plane) {
        // if you remove something that isnt there return 0 and say its not there
        if( this.planes.includes(plane) ){
            //find the item in the array
            const index = this.planes.indexOf(plane);
            console.log(plane + ' ' + 'can now take off');
            //remove it
            this.planes.splice(index, 1);
            console.log(plane + ' '  + 'has taken off');
            //return the array
            return this.planes; 
        } 
        else {
            console.log('can\'t remove plane thats already left and been removed');
            return 0;

        }
    }
}

  


module.exports = Airport;
