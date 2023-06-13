class Airport{
    planeList = [];

    landPlane(plane) {
        if (typeof plane == 'string') this.planeList.push(plane);
    }
}

export default Airport;
