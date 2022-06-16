class Plane {
    #name
    constructor(name) {
        this.#name = name
    }

    get name() {
        return this.#name
    }
}