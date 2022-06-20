class Plane {
    #name
    #landed
    constructor(name, landed = false) {
        this.#name = name
        this.#landed = landed
    }

    get name() {
        return this.#name
    }
    get landed() {
        return this.#landed
    }

    set landed(bool) {
        this.#landed = bool
    }
}

module.exports = Plane