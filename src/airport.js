//think about private properties

class Airport {

    maxCapacity;
    landedPlanes;

    constructor(maxCapacity = 1, landedPlanes = []) {
        this.maxCapacity = maxCapacity;
        this.landedPlanes = landedPlanes;
    };

    landPlane(plane) {

        if (!this.isFull() && plane.getId() !== 'no id' && this.duplicateLandId(plane) === false) { //remember the ! for not full
            this.landedPlanes.push(plane);
        }
    };

    capacityMutator(newCapacity) {
        if (newCapacity % 1 === 0 && typeof newCapacity === 'number') {
            this.maxCapacity = newCapacity;
        };
    };

    isFull() {
        return this.maxCapacity === this.landedPlanes.length;
    };

    planeTakeOff(plane) {
        const index = this.landedPlanes.indexOf(plane);
        this.landedPlanes.splice(index, 1);
    };

    getPlaneId(plane) {
        return plane.getId();
    };

    duplicateLandId(plane) {
        let isDuplicate = false;
        this.landedPlanes.forEach(function (val, index) {
            if (val.getId() === plane.getId()) {
                isDuplicate = true
            }
        })
        return isDuplicate;
    };

    getWeather(weather) {
        return weather.getWeather() // do not forget return with these functions!!!!!!
    };
}

module.exports = Airport;