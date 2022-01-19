class Plane {

    #landed;
    #name
    constructor(name, landed = false) {

        this.#landed = landed;
        this.#name = name;
    }

    isLanded() {

        return this.#landed;
    }

    getName() {

        return this.#name;

    }


}


module.exports = { Plane }