class Plane {
    //Private variable that will store the state of the plane. E.g. recording whether it has taken off or landed.
    //initializes to blank string.
    #state = '';
    #planeId = 'noID';


    getPlaneId() {
        return this.#planeId;
    }


    //As state is a private variable a getter is needed to see what its value is.
    // Simply returns the #state variable.
    getState() {
        return this.#state;
    }

    // The function will change the this.#state to 'landed'. No return value is required by the domain model (requirment 1).
    land() {
        this.#state = 'landed';
    }

}


module.exports = Plane;