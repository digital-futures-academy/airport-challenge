class Airport{
    constructor(name, airportCapacity = 10){
        this.name = name;
        this.airportCapacity = airportCapacity;
        this.currentPlanes = [];

    }
    isFull(){
        return this.currentPlanes.length >= this.airportCapacity;
    }

    landPlane(plane){
        this.currentPlanes.push(plane);
    }

    takeoffPlane(plane){
        let newCurrentPlanes = [];
        for (let i = 0; i < this.currentPlanes.length; i++) {
            if (this.currentPlanes[i].planeId !== plane.planeId) {
            newCurrentPlanes.push(this.currentPlanes[i]);
            }
        }
        this.currentPlanes = newCurrentPlanes;

    }




}
module.exports = Airport;