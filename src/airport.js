class Airport{
    defaultCapacity = 20;
    planeList = [];

    landPlane(plane) {
        this.planeList = [...this.planeList, plane];
    }

}

export default Airport;
