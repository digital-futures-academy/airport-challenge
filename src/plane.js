class Plane {

    static listOfAllPlanes = [];

    #name
    #location

    constructor(name) {

        try {
            if (!name) throw new Error(`Entry data is missing for plane name.`);
            if (typeof name != 'string') throw new Error(`A plane's name must be a string input.`);
            this.#name = name
            this.#location = 'sky';
            Plane.listOfAllPlanes.push(name);
        } catch (err) {
            console.log(err.message);
        }
    }

    getPlaneName() {
        return this.#name;
    }

    getLocation() {
        console.log(`Plane ${this.#name} location: ${this.#location}`);
        return this.#location;
    }

    setPlaneLocation(newLocation) {
        this.#location = newLocation;
        return this.#location;
    }

}


module.exports = { Plane };
