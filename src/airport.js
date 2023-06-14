class Airport{
    defaultCapacity = 20;
    planeList = [];

    landPlane(plane) {
        this.planeList = [...this.planeList, plane];
    }

    overrideCapacity(number) {
        if (typeof number == 'number') { return this.defaultCapacity += number };
        throw Error('Not a number');
    }
}

export default Airport;
