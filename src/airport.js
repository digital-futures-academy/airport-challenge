class Airport{
    defaultCapacity = 20;
    planeList = [];

    landPlane(plane) {
        this.planeList = [...this.planeList, plane];
    }

    overrideCapacity(number) {
        if (number !== 0) { return this.defaultCapacity += number };
    }
}

export default Airport;
