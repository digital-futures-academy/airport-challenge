class Plane {

    #landed;
    #name
    constructor(name, landed = false) {

        this.#landed = landed;
        try {
            if (!name) throw new Error('Please supply a plane name.');
            if (!(typeof name === 'string')) throw new Error('Name must be a string');
        }
        catch (err) {
            console.log(err);
            return err;
        }

        this.#name = name;
    }

    isLanded() {

        return this.#landed;
    }

    getName() {

        return this.#name;

    }

    changeLandingStatus() {
        this.#landed = !this.#landed;
    };

}


module.exports = { Plane }