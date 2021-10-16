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

    landed() {
        let status = this._isPlaneFlying = false;
        if (status === true) {
            this._isPlaneFlying = true;
            return 'Plane still not landed';
        }
        return status;
    }
}

module.exports = Plane;