class Airport{
    planeList = [];

    constructor() {
        this.defaultCapacity = 20;
    }

    landPlane(plane) {
        if (typeof plane == 'string') this.planeList.push(plane);
    }

    overrideCapacity(number) {
        if (number > 0) {
            return this.defaultCapacity += number;
        }
    }

}

export default Airport;
