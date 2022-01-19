class Plane {

    #landed;
    constructor(landed = false) {

        this.#landed = landed;
    }

    isLanded() {

        return this.#landed
    };


}


module.exports = { Plane }