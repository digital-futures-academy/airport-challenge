class Plane {
    constructor(id) {
        if (typeof id === 'string' && id.trim() !== '') {
            this.id = id;
        } else {
            throw new Error('Invalid ID');
        }
    }
}

module.exports = Plane;