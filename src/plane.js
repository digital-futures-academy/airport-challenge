class Plane {
    constructor(name, status) {
        try {
            if (!(typeof name === 'string') || ((status != 'landed') && (status != 'flying'))) throw new Error('Error! Bad input for plane constructor');
            this.name = name;
            this.status = status;
        } catch (err) {
            console.log('Error! Bad input for plane constructor');
        }
    }
}

module.exports = Plane;