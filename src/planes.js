class plane{
    #planeID = [];
    #departure = "";
    #destination = "";
    #onAir = true;
    
    isOnAir() {
         return this.#onAir;
    }
}
module.exports = plane;