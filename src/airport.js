class Airport {
    constructor(listPlanes = []) {
        this.planes = listPlanes;
    }

    landPlane(plane) {
        const indx = this.findPlane(plane);
        if (indx === -1) {
            this.planes.push(plane);
        } else {
            console.log('Plane is already at airport');
        }
    }

    sendPlane(plane) {
        const indx = this.findPlane(plane);
        if (indx === -1) {
            console.log('Plane does not exist in airport');
        } else {
            this.planes.splice(indx, 1);
        }
    }

    findPlane(plane) {
        return this.planes.indexOf(plane);
    }

    isPlaneInAirport(plane) {
        return this.planes.indexOf(plane) === -1 ? false : true;
    }
}

module.exports = Airport;
