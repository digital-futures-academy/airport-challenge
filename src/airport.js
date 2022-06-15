class Airport
{
    constructor(capacity)
    {
        this.capacity = capacity;
    }
    listOfPlanes = [];

    land(plane)
    {
        this.listOfPlanes.push(plane);
        return plane;

    }
}

module.exports = Airport;
