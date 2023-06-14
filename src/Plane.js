class Plane {
    #id

    constructor(id = 'no id') {
        this.#id = id;
    };

    getId() {
        return this.#id;
    };
};

module.exports = Plane;