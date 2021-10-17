class Plane {
    

    constructor(planeID, isPlaneFlying) {
        this._planeID = planeID;
        this._isPlaneFlying = isPlaneFlying;
        this.planeLanded = isPlaneFlying;
    }

    get isPlaneFlying() {
        return this._isPlaneFlying;
    }

    get planeID() {
        return this._planeID;
    }

    landed() {
        this._isPlaneFlying = false;
        this.planeLanded = true;
        return this.planeLanded;
    }

    generatePlaneID() {
        let array = [777, 737, 380, 350, 340, 787, 330, 320, 747];
        let rand = array[Math.floor(Math.random()*array.length)]
        return rand;
    }
}

module.exports = Plane;