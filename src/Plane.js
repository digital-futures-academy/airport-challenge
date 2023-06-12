class Plane {

    #ID;

    constructor(ID) {
        this.#ID = ID;
    }

    getID() {
        return this.#ID;
    }

}

module.exports = {
    Plane
};