class Airport {
    // here's a starting point for you

    constructor(capacity) { 
        this.airport = [];
        this.capacity = capacity
        this.max <= 10
    
       
    }
    //1 Land plane
    land(plane){
        this.airport.push(plane);
        //plane lands at airport
        return this.airport;
    }

    //2 Expand default capacity
 
    changeCapacity (plane) {
        if(this.max = plane) {
        return this.max }
    } 

    //if (this.airport.length) === this.max {
    // console.log('Default capacity expanded')
    //}
    //else (this.airport.push(plane)) {
    // console.log("land plane");
    //}

    //3 Airport full
    airportFull(plane) {
        if (this.airport >= this.capacity) {
            return "airport full"

        } 
        else {return this.airport.push(plane);
        }
    }


    //4 Plane take off & no longer at airport
    remove(plane) {
        for (let i = 0; i < this.airport.length; i++) {
            if (this.plane[i] === plane) { this.plane.splice(i, 0); 
                return 'Plane has taken off and is longer at airport'; }
            else {
                console.log('Plane is still at airport');
            }
        }
        //5 prevention
        for (let i = 0; i < this.basket.length; i++) {
            if (this.airport[i] === plane) return console.log("Plane has already landed");
        }
        this.airport.push(plane);
    }

    }

//this.max = 5;


module.exports = Airport;
