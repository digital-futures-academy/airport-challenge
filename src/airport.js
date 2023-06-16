class Airport {
    constructor() {
     this.airport1 = []
     this.capacity = 3  //Default capacity is 3
    }

    add(plane) {
        if (this.airport1.length < this.capacity)    
        {
            this.airport1.push(plane);
            //console.log(this.airport1)
            return this.airport1.length;
        }
        {
            return false
        }
    }

    remove(plane) {

        if (this.confirm(plane))
        {
            const index = this.airport1.indexOf(plane);
            this.airport1.splice(index);
            //console.log(this.airport1)
            return this.airport1.length;
        }
    }

    confirm(plane){
        if (this.airport1.includes(plane))   
        {
            return true
        }
            return false
    }

    overrideCapacity(limit)
    {
        this.capacity = limit
        return this.capacity
    }
}
export default Airport;