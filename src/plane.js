class Plane {

    static listOfAllPlanes = [];

    #name
    #location

    constructor(name) {

        try {
            if (!name) throw new Error(`Entry data is missing for plane name.`);
            if (typeof name != 'string') throw new Error(`A plane's name must be a string input.`);
            this.#name = name
            this.#location = 'sky';
            Plane.listOfAllPlanes.push(name);
        } catch (err) {
            console.log(err.message);
        }
    }

    getPlaneName() {
        return this.#name;
    }

    getLocation() {
        return this.#location;
    }

    setPlaneLocation(newLocation) {
        this.#location = newLocation;
        return this.#location;
    }

}


module.exports = { Plane };

// try {
//     if (!date || !entryText) throw new Error(`Entry data missing: ${!date ? `date` : `text`}`);
//     if (!(date instanceof Date)) throw new Error(`Date in incorrect format`);
//     this.#date = date;
//     if (typeof entryText !== `string`) throw new Error(`Text is not a string`);
//     this.#entryText = entryText;
// }
// catch (err) {
//     console.log(err.message);
//     return err;
// }