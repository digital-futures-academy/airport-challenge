class Airport
{
    listOfPlanes = [];

    land(plane)
    {
        this.listOfPlanes.push(plane);
        return plane;

    }
}

module.exports = Airport;
