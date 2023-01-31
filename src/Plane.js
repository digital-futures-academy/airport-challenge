class Plane {
    constructor(name) {
        this.id = undefined;
        this.createId();
        this.name = name;
    }

    createId() {
        let x = Math.random() * 100;
        let y = Math.floor(x);
        this.id = y;
    }
}
module.exports = Plane;