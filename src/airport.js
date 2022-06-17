class Airport
{
    constructor(capacity)
    {
        this.capacity = capacity;
    }
    listOfPlanes = [];

    land(plane)
    {
        if (this.isFull())
        {
            return `Airport is full`
        } else
        {
            this.listOfPlanes.push(plane);
            return plane;
        }

    }
    isFull()
    {
        return this.listOfPlanes.length === this.capacity;

    }
    takeOff()
    {
        this.listOfPlanes.pop();
    }
}

module.exports = Airport;




//check against capacity if the airport can take more planes
//