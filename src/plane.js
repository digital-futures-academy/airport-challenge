class Plane {

    #id;
    #landed;

    constructor(id) {
        this.#id = id;
        this.#landed = false;
    }

}

module.exports = Plane;