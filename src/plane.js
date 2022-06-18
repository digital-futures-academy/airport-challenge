class Plane {
    //Private variable that will store the state of the plane. E.g. recording whether it has taken off or landed.
    //initializes to blank string.
    #state = '';
    #planeId;

    constructor(planeId = 'noID') {
        this.#planeId = planeId;
    }

    getPlaneId() {
        return this.#planeId;
    }


    //As state is a private variable a getter is needed to see what its value is.
    // Simply returns the #state variable.
    getState() {
        return this.#state;
    }

    isLanded() {
        if (this.#state === 'landed') {
            return true;
        } else {
            return false;
        }
    }

    // The function will change the this.#state to 'landed'. No return value is required by the domain model (requirement 1).
    land() {
        this.#state = 'landed';
    }

    takeOff() {
        this.#state = 'flying';
    }

}


module.exports = Plane;