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

    generatePlaneID() {
        let array = [777, 737, 380, 350, 340, 787, 330, 320, 747];
        let rand = array[Math.floor(Math.random()*array.length)]
        return rand;
    }
}

module.exports = Plane;