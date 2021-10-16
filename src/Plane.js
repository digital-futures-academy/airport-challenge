class Plane {
    

    constructor(planeID, isPlaneFlying) {
        this._planeID = planeID;
        this._isPlaneFlying = isPlaneFlying;

    }

    get isPlaneFlying() {
        return this._isPlaneFlying;
    }

    get planeID() {
        return this._planeID;
    }
}

module.exports = Plane;