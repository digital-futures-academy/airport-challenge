class Airport{
    planeList = [];

    landPlane(plane) {
        this.planeList = [...this.planeList, plane];
    }

}

export default Airport;
