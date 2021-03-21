class systemDesigner {
    constructor(){}

    overrideCapacity(Airport, newCapacity){
        Airport.capacity = newCapacity;
    }
}

module.exports = systemDesigner;