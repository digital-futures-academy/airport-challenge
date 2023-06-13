class Airport{
    planeList = [];

    constructor() {
        this.defaultCapacity = 20;
    }

    landPlane(plane) {
        if (typeof plane == 'string') this.planeList.push(plane);
    }


}

export default Airport;
