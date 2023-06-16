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
    }

    overrideCapacity(limit)
    {
        this.capacity = limit
        return this.capacity
    }
}
export default Airport;