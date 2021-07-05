class Plane {
    // here's a starting point for you
    constructor(name) {
        this.name = name;
        this.isFlying = false;
    }

    //this function changes the boolean parameter to true and returns the name of the plane flying
    getPlaneFlying(){
        this.isFlying = true;
        console.log(
            `it is ${this.isFlying} that ${this.name} is currently flying`
        );
        return this.name;

    }


}

module.exports = Plane;
