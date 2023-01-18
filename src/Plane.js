class Plane {

    constructor(id) {
        if (id === undefined) {
            throw new Error(`Plane ID does not exist`);
        } else {
            this.id = id;
        }
    }

    getID() {
        return this.id;
    }
}

module.exports = Plane;
